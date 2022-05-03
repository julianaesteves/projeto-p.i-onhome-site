import More from "./More";
import GradientText from "../../../../components/GradientText";
import TextWithImage from "./TextWithImage";

import './style.css';

const Produtos = () => {
    return (
        <section className="products">
            <div className="container">
                <GradientText 
                    className="main-title"
                    textAlign="center" 
                    label="Introdução à" 
                    title="Nossos produtos!" 
                    subtitle="Esqueça lentidão e estresse durante o trabalho, nossos produtos são da mais alta qualidade e de acordo com o que você precisa." 
                />
                <TextWithImage classNameTitle="borderTextLeft" 
                    classNameSubtitle="borderTextLeft" 
                    alt="Titulo monitoramento de máquinas" 
                    label="O que é" 
                    title="Monitoramento de máquinas" 
                    subtitle="O monitoramento de máquinas é voltado para squads de desenvolvedores, esses que necessitam de suporte 24/7 devido a alta demanda de trabalho e que não devem ter tempo ocoioso devido a lentidão de suas máquinas." 
                    image="./images/monitoramento.png" 
                />
                <TextWithImage classNameTitle="borderTextLeft" 
                    classNameSubtitle="borderTextLeft" 
                    alt="Dashboards" 
                    reverse="row-reverse" 
                    label="O que mais oferecemos?" 
                    title="Dashboards" 
                    subtitle="Nossos dashboards são adequados a sua necessidade, possibilitando ter controle total sobre a gestão da sua equipe. Tome decisões estratégicas e certeiras com o que nossos gráficos proporcionam." 
                    image="./images/dashs.png"
                />
                <More />
            </div>
        </section>
    );
};

export default Produtos;