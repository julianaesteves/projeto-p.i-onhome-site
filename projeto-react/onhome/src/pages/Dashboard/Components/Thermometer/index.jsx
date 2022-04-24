import { useEffect, useState } from "react"
import Border from "../../../../components/Border"

import "./style.css"

const Thermometer = ({ machineInfo }) => {
    const [chartColor, setChartColor] = useState("")

    useEffect(() => {
        if (machineInfo.status > 65) setChartColor("emergencia")
        else if (machineInfo.status >= 10) setChartColor("atencao")
        else if (machineInfo.status >= -60) setChartColor("ideal")
    }, [])

    return (
            <div className="thermometer--container">
                <div className="thermometer--icon">
                    <img src={`./images/${chartColor}.png`} alt="" />
                    <div className="thermometer--pointer" style={{ transform: `rotate(${machineInfo.status}deg)` }}></div>
                </div>
            </div>
    )
}

export default Thermometer