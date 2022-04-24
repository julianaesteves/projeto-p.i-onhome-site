import Border from "../../../components/Border";
import GradientText from "../../../components/GradientText";
import Message from "./Message";

import './style.css';
const Home = () => {
    return (
        <div className="home-graph-container">
            <Border width={"730px"} padding={"10px 0 0 0"} margin={"0 0 20px 0"} children={<GradientText title="Bem-Vindo OnHome!" textAlign='center' />} />
            <div className="home-graph border-gradient">


                <div className="home-column-graph">

                    <div className="home-graph-item">
                        <div className="home-graph-title">
                            <h3>Atividades anteriores</h3>
                        </div>
                        <div className="home-graph-content">
                            <img src="./images/grafico1.png" />
                        </div>
                    </div>

                    <div className="home-graph-item">
                        <div className="home-graph-title">
                            <h3>Visão geral</h3>
                        </div>
                        <div className="home-graph-content">
                            <img src="./images/grafico2.png" />
                        </div>
                    </div>

                </div>


                <div className="home-graph-item">
                    <div className="home-graph-title">
                        <h3>Últimas mensagens</h3>
                    </div>
                    <Message radius='10px' />
                    <Message radius='100%' />
                </div>



            </div>
        </div>
    );
};

export default Home;