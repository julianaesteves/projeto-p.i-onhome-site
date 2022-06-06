import React, { PureComponent, useEffect } from 'react';
import { useState } from 'react';
import Border from '../../../components/Border';
import GradientText from '../../../components/GradientText';
import Machine from '../Components/Machine';
import Thermometer from '../Components/Thermometer';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useAuth } from '../../../context/Auth';

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
} from 'recharts';

import './style.css';

const Maquinas = () => {
  const machineList = [
    { number: 1, status: -53 },
    { number: 2, status: -29 },
    { number: 3, status: -39 },
    { number: 4, status: -31 },
    { number: 5, status: -30 },
    { number: 6, status: 69 },
    { number: 7, status: -19 },
    { number: 8, status: 60 },
    { number: 9, status: -19 },
    { number: 10, status: -39 },
    { number: 11, status: -22 },
    { number: 12, status: -31 },
    { number: 13, status: -31 },
    { number: 14, status: -31 },
    { number: 15, status: -31 },
    { number: 16, status: -31 },
  ];

  const { userInfo } = useAuth()

  const data = [
    {
      // name: '16:41:02',
      passada: 10,
      atual: 30,
    },
  ];

  const chartColor = ['#e692f7', '#b592f7', '#92b7f7', '#eafc83', '#0000'];

  const [chartData, setChartData] = useState(data);
  const [isVisible, setIsVisible] = useState(false);
  const [machineChosen, setMachineChosen] = useState(0);
  const [processList, setProcessList] = useState();
  const [pieInfo, setPieInfo] = useState();
  const [thermData, setThermData] = useState();
  const [fkEmpresa, setFkEmpresa] = useState(userInfo.fkEmpresa);
  const [comparationData, setComparationData] = useState();
  const [isDashVisible, setIsDashVisible] = useState();


  const handleWindow = (machine) => {
    if (!isVisible) {
      setMachineChosen(machine);
      setIsVisible(true);
      setIsDashVisible('none');
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const getDashInfo = async () => {
      const data = await fetch('https://onhome-api-v1.herokuapp.com/processos');
      const json = await data.json();
      setProcessList(...json);
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

  return (
    <div style={{ height: '100vh' }}>
      {isVisible ? (
        <Machine machineInfo={machineChosen} handleWindow={handleWindow} />
      ) : (
        <div className="maquinas-container">
          <Border margin={'0 0 30px'}>
            <div className="maquinas-header">
              <GradientText
                title={`Desempenho geral dos seus funcionários`}
                textAlign="center"
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
              )})
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
                  <YAxis dataKey="name" type="category"  />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="atual" barSize={20} fill="#e165fc"/>
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
                  fill="#8884d8"
                  label
                >
                  {data.map((item, index) => (
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
    </div>
  );
};

export default Maquinas;
