import GradientText from "../../../../components/GradientText"
import SolutionsCard from "./SolutionsCard"

import "./style.css"

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
            description: "Lorem ipson",
            url: "/icons/",
        },
    ]

    return (
        <div className="solutions--container">
            <div className="solutions--header">
                <img src="https://www.pngmart.com/files/16/Laptop-Notebook-PNG-HD.png" alt="" />
                <GradientText title={"Potencialize seu negócio, produtividade é na OnHome"} />
            </div>
            <GradientText title={"Um mundo de possibilidades!"} align={"left"} />
            <div className="solutions--content">
                <div className="solutions--cards">
                    {cards.map((card, index) => (
                        <SolutionsCard key={index} description={card.description} iconUrl={card.url}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Solutions