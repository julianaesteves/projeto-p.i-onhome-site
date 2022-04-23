import Border from "../../../components/Border";
import GradientText from "../../../components/GradientText";
import Message from "./Message";

import './style.css';
const Home = () => {
    return (
        <div style={{ flex: 1 }}>
            <Border children={<GradientText title="Bem-Vindo(a) Lorem!" textAlign='center' />} />
            <div className="home-graph border-gradient">
                <div className="home-column-graph">
                    <div className="home-graph-item">
                        <div className="home-graph-title">
                            <h2>Atividades anteriores</h2>
                        </div>
                        <div className="home-graph-content">
                            <img src="./images/grafico1.png" width='100%' alt="" />
                        </div>
                    </div>
                    <div className="home-graph-item">
                        <div className="home-graph-title">
                            <h2>Visão geral</h2>
                        </div>
                        <div className="home-graph-content">
                            <img src="./images/grafico2.png" width='100%' />
                        </div>
                    </div>
                </div>
                <div className="home-column-graph">
                    <div className="home-graph-item">
                        <div className="home-graph-title">
                            <h2>Últimas mensagens</h2>
                        </div>
                        <Message radius='10px' />
                        <Message radius='100%' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;