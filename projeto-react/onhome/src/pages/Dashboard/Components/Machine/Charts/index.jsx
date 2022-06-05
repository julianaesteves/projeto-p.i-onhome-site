import { useState, useEffect } from 'react';
import Border from '../../../../../components/Border';
import HardwareInfo from './HardwareInfo';
import { useAuth } from '../../../../../context/Auth';

import {
  LineChart,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import './style.css';

const Charts = ({ handleWindow }) => {
  const data = [
    {
      name: '16:41:02',
      atual: 55,
    },
    {
      name: '16:4c4:34',
      atual: 67,
    },
    {
      name: '16:47:29',
      atual: 49,
    },
  ];

  const { userInfo } = useAuth()
  const [idUsuario, setIdUsuario] = useState(userInfo.idUsuario)
  const [dashData, setDashData] = useState([]);
  const [chartData, setChartData] = useState(data);
  const [nameData, setNameData] = useState(21);
  const [atualData, setAtualData] = useState(3000);
  const [mediaData, setMediaData] = useState(3000);

  useEffect(() => {
    const getCpuUseInfo = async () => {
      const data = await fetch(
        `http://localhost:8080/monitoramento/usuario/${idUsuario}`
      );
      const json = await data.json();
      setDashData(json);
      console.log(json)
    };
    setTimeout(
      () => getCpuUseInfo(),

      1000
    );
  }, [setDashData]);

  const chartsLabel = ['Uso de CPU em porcentagem', 'Uso de Memória em porcentagem'];
  const chartsDataKeys = ['usandoCpu', 'usandoRam']

  const chartsData = [
    {
      titulo:"Uso da CPU (%)",
      uso:"usandoCpu",
    },
    {
      titulo:"Uso da Memória (%)",
      uso:"usandoRam"
    }
  ]
  // useEffect(() => {
  //     setTimeout(() => {
  //         const newName = nameData + 1
  //         const newAtual = atualData + 500
  //         const newMedia = mediaData + 50
  //         setNameData(newName)
  //         setMediaData(newMedia)
  //         setAtualData(newAtual)
  //         let newData = [...data, {name: `${newName}`, atual: `${newAtual}`, media: `${newMedia}`}]
  //         setChartData(newData)
  //     }, 3000)
  // }, [chartData])

  return (
    <Border margin={'10px'} padding={'20px'}>
      <div>
        <div style={{ borderBottom: '1px solid #fff' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              color: '#fff',
              maxWidth: '850px',
              justifyContent: 'center',
            }}
          >
            {chartsData.map(({titulo, uso}) => (
              <div>
                <h2>{titulo}</h2>
                <AreaChart
                  width={640}
                  height={195}
                  data={dashData[0]}
                  margin={{
                    top: 15,
                    right: 30,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid stroke="#333" />
                  <XAxis dataKey="nome" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey={uso}
                    fill="#FF3784"
                    stroke="#FF3784"
                  />
                </AreaChart>
              </div>
            ))}
          </div>
        </div>
        <HardwareInfo handleWindow={handleWindow} />
      </div>
    </Border>
  );
};

export default Charts;
