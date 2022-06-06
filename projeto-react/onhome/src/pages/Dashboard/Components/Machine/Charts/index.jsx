import { useState, useEffect } from 'react';
import Border from '../../../../../components/Border';
import HardwareInfo from './HardwareInfo';
import { useAuth } from '../../../../../context/Auth';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import './style.css';

const Charts = ({ handleWindow, machineInfo }) => {

  const [idUsuario, setIdUsuario] = useState(machineInfo.idUsuario);
  const [dashData, setDashData] = useState([]);

  useEffect(() => {
    const getCpuUseInfo = async () => {
      const data = await fetch(
        `https://onhome-api-v1.herokuapp.com/monitoramento/usuario/${idUsuario}`
      );
      const json = await data.json();
      setDashData(json);
    };

    setTimeout(() => {
      getCpuUseInfo();
    }, 1000);
  }, [idUsuario, setDashData]);


  const chartsData = [
    {
      titulo: 'Uso da CPU (%)',
      uso: 'usandoCpu',
    },
    {
      titulo: 'Uso da Memória (%)',
      uso: 'usandoRam',
    },
  ];
  
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
            {chartsData.map(({ titulo, uso }) => (
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
