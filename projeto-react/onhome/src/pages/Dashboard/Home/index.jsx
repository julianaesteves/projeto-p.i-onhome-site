import Border from "../../../components/Border";
import GradientText from "../../../components/GradientText";
import Message from "./Message";
import ConnectedMachines from "./ConnectedMachines"
import MachinesOff from "./MachinesOff";
import LastActivities from "./LastActivities";

import './style.css';

const Home = () => {
    const messageList = [
        {
            author: "Slack",
            content: "Ola Carlos, os relatórios semanais estão prontos, é só acessar home > Relatórios > e baixar em Excel ou PDF. OnHome agradece a preferência.",
            icon: "./icons/slack.svg"
        },
        {
            author: "Pedro (Gerente de TI) - Squad 1",
            content: "Boa tarde! Carlos, poderia cadastrar dois novos desenvolvedores no sistema? Obrigado!",
            icon: "./icons/persona.svg"
        },
        {
            author: "Ana (Desenvolvedora) - Squad 3",
            content: "Bom dia! Carlos, chegou uma mensagem de que alguns computadores estão com problemas, poderia verificar? Atenciosamente Ana.",
            icon: "./icons/persona.svg"
        },
        {
            author: "Slack",
            content: "Olá Carlos, 3 computadores da squad 03 estão apresentando oscilação com o hardware, clique aqui para visualizar. OnHome agradece a preferência.",
            icon: "./icons/slack.svg"
        }
    ]

    return (
        <div className="home-graph-container">
            <Border width={"730px"} padding={"10px 0 0 0"} margin={"0 0 20px 0"} children={<GradientText title="Bem-Vindo, Carlos!" textAlign='center' />} />
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
                <div className="home-graph-item">
                    <div className="home-graph-title">
                        <h3>Últimas mensagens</h3>
                    </div>
                    {messageList.map(message => (
                        <Message message={message}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;