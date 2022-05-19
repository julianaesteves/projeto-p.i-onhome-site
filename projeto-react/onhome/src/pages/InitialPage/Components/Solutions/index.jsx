import GradientText from '../../../../components/GradientText';
import SolutionsCard from './SolutionsCard';

import "./style.css";

const Solutions = () => {
    const cards = [
        {
            description: "Escolha o equipamento que precisar",
            url: "/icons/computer.svg"
        },
        {
            description: "Monitore seus hardwares",
            url: "/icons/search.svg"
        },
        {
            description: "Suporte a todo momento para seu time",
            url: "/icons/gear.svg",
        },
        {
            description: "Dashboards personalizados",
            url: "/icons/dashboard.svg",
        },
        {
            description: "Geolocalização das máquinas",
            url: "/icons/web.svg",
        },
        {
            description: "Produtividade",
            url: "/icons/produtivity.svg",
        },
    ]

    return (
        <>
            <div className="solutions--header">
                <img src="./images/notebook.png" alt="" />
                <GradientText title={"Potencialize seu negócio, produtividade é na OnHome"} />
            </div>
            <div className="solutions--container">
                <h3 className="solutions--title">Um mundo de possibilidades</h3>
                <div className="solutions--content">
                    <div className="solutions--cards">
                        {cards.map((card, index) => (
                            <SolutionsCard key={index} description={card.description} iconUrl={card.url} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solutions