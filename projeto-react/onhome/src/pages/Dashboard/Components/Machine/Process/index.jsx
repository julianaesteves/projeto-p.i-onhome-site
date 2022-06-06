import Border from '../../../../../components/Border';
import GradientText from '../../../../../components/GradientText';
import { useAuth } from '../../../../../context/Auth';
import {useEffect, useState} from 'react'

import './style.css';

const Process = ({ machineInfo }) => {

const [userStats, setUserStats] = useState()
const { userInfo } = useAuth();
const [idUsuario, setIdUsuario] = useState(userInfo.idUsuario);
  

  useEffect(() => {
    const getUserStats = async () => {
      const data = await fetch(
        `http://localhost:8080/computador/usuario/${idUsuario}`
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
          <b>Processador:</b>{userStats?.modeloProcessador}
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

// const processList = [
//     { name: "Google Chrome", percentual: "100%" },
//     { name: "VSCode", percentual: "10%" },
//     { name: "Spotify", percentual: "40%" },
//     { name: "NetBeans", percentual: "80%" },
//     { name: "Postman", percentual: "10%" },
//     { name: "Slack", percentual: "15%" },
//     { name: "Microsoft Outlook", percentual: "16%" },
// ]

/* <div>
    <div className="process--header">
        <div>Programas em execução</div>
        <div style={{ width: "100px" }}>% de uso</div>
    </div>
        {processList.map((process, index) => {
            const tableBorder = (index + 1) < processList.length ? "process--table--border" : ""
            return (
                <div className={`process--row ${tableBorder}`}>
                    <div>{process.name}</div>
                    <div style={{ width: "100px" }}>{process.percentual}</div>
                </div>
            )
        })}
</div> */
