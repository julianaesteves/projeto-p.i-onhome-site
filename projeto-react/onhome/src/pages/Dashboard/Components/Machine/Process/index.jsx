import Border from '../../../../../components/Border';
import GradientText from '../../../../../components/GradientText';
import { useAuth } from '../../../../../context/Auth';
import {useEffect, useState} from 'react'

import './style.css';

const Process = ({ machineInfo }) => {

const [userStats, setUserStats] = useState()
const [idUsuario, setIdUsuario] = useState(machineInfo.idUsuario);
  

  useEffect(() => {
    console.log(machineInfo)
    const getUserStats = async () => {
      const data = await fetch(
        `https://onhome-api-v1.herokuapp.com/computador/usuario/${idUsuario}`
      );
      const [json] = await data.json();
      setUserStats(...json);
      console.log(userStats);
    };
    setTimeout(() => getUserStats(), 1000)
  }, []);

  return (
    <Border margin={'10px'} padding={'30px'}>
      <div className="process--container">
        {/* <GradientText title={machineInfo.nomeUsuario}/> */}
        <div className="process--line"></div>
        <p>Total de pontos: {machineInfo.qtdPontos}</p>
        <div className="process--hardware">
          <b>Processador: </b>{userStats?.modeloProcessador}
        </div>
        <div className="process--hardware">
          <b>RAM:</b> {userStats?.tamanhoRam.toFixed()} <b>GB</b>
        </div>
        <div className="process--hardware">
          <b>Sistema Operacional:</b> {userStats?.sistemaOperacional}
        </div>
      </div>
    </Border>
  );
};

export default Process;
