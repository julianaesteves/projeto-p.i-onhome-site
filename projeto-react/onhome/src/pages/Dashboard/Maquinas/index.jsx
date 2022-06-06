import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/Auth';
import Border from '../../../components/Border';
import GradientText from '../../../components/GradientText';
import Machine from '../Components/Machine';
import Thermometer from '../Components/Thermometer';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  AreaChart,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer
} from 'recharts';

import './style.css';

const Maquinas = () => {
  const { userInfo } = useAuth()

  // Apagar e depois mapear os dados do gráfico para colorir
  const data = [
    {
      // name: '16:41:02',
      passada: 10,
      atual: 30,
    },
  ];

  const chartColor = ['#00F0FF', '#FF007A', '#5773FF', '#964AB9'];

  // const [chartData, setChartData] = useState(data);
  const [isVisible, setIsVisible] = useState(false);
  const [machineChosen, setMachineChosen] = useState(0);
  const [processList, setProcessList] = useState();
  const [pieInfo, setPieInfo] = useState();
  const [thermData, setThermData] = useState();
  const [fkEmpresa] = useState(userInfo?.fkEmpresa);
  const [comparationData, setComparationData] = useState();
  const [isDashVisible, setIsDashVisible] = useState();


  const handleWindow = (machine) => {
    if (!isVisible) {
      setMachineChosen(machine);
      setIsVisible(true);
      setIsDashVisible('none');
    } else {
      setIsVisible(false);
      setIsDashVisible("flex")
    }
  };

  useEffect(() => {
    const getDashInfo = async () => {
      const data = await fetch(`https://onhome-api-v1.herokuapp.com/processos/empresa/${fkEmpresa}`);
      const json = await data.json();
      setProcessList(json);
      console.log(json)
    };

    const getPieData = async () => {
      const pieInfo = await fetch(`https://onhome-api-v1.herokuapp.com/pontuacao-total/${fkEmpresa}`);
      const json = await pieInfo.json();
      setPieInfo(json);
      console.log(pieInfo);
    };

    const getThermometerData = async () => {
      const thermData = await fetch(`https://onhome-api-v1.herokuapp.com/computadores/empresa/${fkEmpresa}`);
      const json = await thermData.json();
      setThermData(json);
    };

    const getComparationData = async () => {
      const data = await fetch('https://onhome-api-v1.herokuapp.com/pontuacao/empresa/37');
      const json = await data.json();
      setComparationData([...json]);
    };

    setTimeout(() => {
      getDashInfo();
      getPieData();
      getThermometerData();
      getComparationData();
    }, 1000);
  }, [setProcessList, setPieInfo, fkEmpresa, setComparationData]);

  const Loading = <img style={{ width: 100 }} src='/images/loader.svg' alt='Loading' />

  return (
    <div style={{ height: '100vh' }}>
      {!processList ?
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          {Loading}
        </div>
        :
        <>
          {isVisible ? (
            <Machine machineInfo={machineChosen} handleWindow={handleWindow} />
          ) : (
            <div className="maquinas-container">
              <Border margin={'0 0 30px'}>
                <div className="maquinas-header">
                  <GradientText
                    title={`Desempenho geral dos seus funcionários`}
                    fontSize={13}
                    margin={'10px 0 0 0'}
                  />
                </div>
              </Border>
              <div className="maquinas-content">
                <ArrowBackIosIcon className="arrow--goBack" />
                {thermData ?
                  thermData.map((machine) => {
                    console.log(machine)
                    return (
                      <Border
                        padding={'20px'}
                        margin={'20px'}
                        cursor={'pointer'}
                        onClick={() => handleWindow(machine)}
                      >
                        <div style={{ fontSize: '20px' }}>{machine.nomeUsuario}</div>
                        <Thermometer machineInfo={machine} />
                      </Border>
                    )
                  })
                  :
                  null
                }
                <ArrowForwardIosIcon className="arrow--goNext" />
              </div>
            </div>
          )}
          <div className="maquinas--workerGraphs_container">
            <div
              className="maquinas--workerGraphs_content"
              style={{ display: `${isDashVisible}` }}
            >
              <div className="maquinas--leftItems">
                <div className="maquinas--itemGraph">
                  <label className="maquinas--label">
                    Principais processos da equipe na semana
                  </label>
                  <Border
                    width={'500px'}
                    height={'170px'}
                    margin={'10px'}
                    textAlign={'center'}
                  >
                    <BarChart
                      width={450}
                      style={{ marginTop: '10px' }}
                      height={160}
                      data={processList}
                    >
                      <Bar dataKey="usoCpu" fill="#8884d8" />
                      <Tooltip />
                      <YAxis dataKey="usoCpu" />
                      <XAxis dataKey="nomeProcesso" />
                    </BarChart>
                  </Border>
                </div>
                <div className="maquinas--itemGraph">
                  <label className="maquinas--label">
                    Pontos do Squad - semana passada e atual
                  </label>
                  <Border
                    width={'500px'}
                    height={'170px'}
                    margin={'10px'}
                    textAlign={'center'}
                  >
                    <ComposedChart
                      layout="vertical"
                      width={450}
                      height={180}
                      data={comparationData}
                      margin={{
                        top: 20,
                        right: 40,
                        bottom: 20,
                        left: 20,
                      }}
                    >
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="atual" barSize={20} fill="#e165fc" />
                      <Bar dataKey="passada" barSize={20} fill="#69d2f5" />
                    </ComposedChart>
                  </Border>
                </div>
              </div>
              <div className="maquinas--itemGraph">
                <label className="maquinas--label">
                  Qtd. de desenvolvedores por intervalo de pontuação
                </label>
                <Border
                  width={'500px'}
                  height={'405px'}
                  margin={'10px'}
                  textAlign={'center'}
                >
                  <PieChart width={550} height={390}>
                    <Pie
                      dataKey="value"
                      data={pieInfo}
                      cx="43%"
                      cy="50%"
                      outerRadius={130}
                      // fill="#8884d8"
                      label
                    >
                      {pieInfo?.map((item, index) => (
                        <Cell fill={chartColor[index]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </Border>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default Maquinas;
