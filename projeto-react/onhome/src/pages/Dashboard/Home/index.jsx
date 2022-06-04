import Border from "../../../components/Border";
import GradientText from "../../../components/GradientText";
import Message from "./Message";
import ConnectedMachines from "./ConnectedMachines";
import MachinesOff from "./MachinesOff";
import LastActivities from "./LastActivities";
import Workers from "./Workers";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState } from "react";
import { useAuth } from "../../../context/Auth";

import "./style.css";

const Home = () => {
  const messageList = [
    {
      author: "Slack",
      content:
        "Ola Carlos, os relatórios semanais estão prontos, é só acessar home > Relatórios > e baixar em Excel ou PDF. OnHome agradece a preferência.",
      icon: "./icons/slack.svg",
    },
    {
      author: "Pedro (Gerente de TI) - Squad 1",
      content:
        "Boa tarde! Carlos, poderia cadastrar dois novos desenvolvedores no sistema? Obrigado!",
      icon: "./icons/persona.svg",
    },
    {
      author: "Ana (Desenvolvedora) - Squad 3",
      content:
        "Bom dia! Carlos, chegou uma mensagem de que alguns computadores estão com problemas, poderia verificar? Atenciosamente Ana.",
      icon: "./icons/persona.svg",
    },
    {
      author: "Slack",
      content:
        "Olá Carlos, 3 computadores da squad 03 estão apresentando oscilação com o hardware, clique aqui para visualizar. OnHome agradece a preferência.",
      icon: "./icons/slack.svg",
    },
  ];

const [isMessagesVisible, setMessagesVisible] = useState(true);
const [isWorkerHidden, setWorkerHidden] = useState(true);

const { userInfo } = useAuth()
  
  return (
    <div className="home-graph-container">
      <Border
        width={"730px"}
        padding={"10px 0 0 0"}
        margin={"0 0 20px 0"}
        children={
          <GradientText
            className="welcome"
            title={`Bem-Vindo, ${userInfo?.nomeUsuario}!`}
            textAlign="center"
          />
        }
      />
      <div className="home-graph border-gradient">
        <div className="home-column-graph">
          <div className="home-graph-item">
            <div className="home-graph-title">
              <h3>Atividades anteriores</h3>
            </div>
            <div className="home-graph-content">
              <LastActivities />
            </div>
          </div>
          <div className="home-graph-item">
            <div className="home-graph-title">
              <h3>Visão geral</h3>
            </div>
            <div className="home-graph-content-1">
              <MachinesOff />
              <ConnectedMachines />
            </div>
          </div>
        </div>
        <div className="home-graph-item messages--workers-content">
          <div className="home-graph--rigth-content">
          <div className={isMessagesVisible ? "home-graph-messages-item-visible" : "home-graph-messages-item-hidden"}>
            <div>
                <div className="home-graph-title">
                <h3>Últimas mensagens</h3>
                </div>
                {messageList.map((message) => (
                <Message message={message} />
                ))}
                </div>
          </div>
          <div className={isWorkerHidden ? "home-graph-workers-item-hidden" : "home-graph-workers-item-visible"}>
            <div>
                <div className="home-graph-title">
                <h3>Colaboradores</h3>
                </div>
                <Workers />
                <Workers />
                <Workers />
                <Workers />
                <Workers />
                <Workers />
                <Workers />
            </div>
          </div>
          </div>
            <div className="circle-icons">
                <ArrowCircleLeftIcon 
                  sx={{color: '#00c2d4', fontSize: 40}}
                  onClick={() => {
                    setMessagesVisible(true); setWorkerHidden(true)}}/>
                <ArrowCircleRightIcon 
                  sx={{color: '#fff', fontSize: 40}} 
                  onClick={() => {
                    setWorkerHidden(false); setMessagesVisible(false)}}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
