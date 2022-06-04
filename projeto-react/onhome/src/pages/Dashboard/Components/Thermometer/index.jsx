import { useEffect, useState } from "react"
import Border from "../../../../components/Border"

import "./style.css"

const Thermometer = ({ machineInfo }) => {
    const [chartColor, setChartColor] = useState("")

    useEffect(() => {
        if (machineInfo.qtdPontos > 55) setChartColor("emergencia")
        else if (machineInfo.qtdPontos >= 10) setChartColor("atencao")
        else if (machineInfo.qtdPontos >= -60) setChartColor("ideal")
    })

    return (
            <div className="thermometer--container">
                <div className="thermometer--icon">
                    <img src={`./images/${chartColor}.png`} alt="" />
                    <div className="thermometer--pointer" style={{ transform: `rotate(${machineInfo.qtdPontos}deg)` }}></div>
                </div>
            </div>
    )
}

export default Thermometer