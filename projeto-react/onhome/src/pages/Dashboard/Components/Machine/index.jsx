import { useState, useEffect } from "react"
import Charts from "./Charts"
import Process from "./Process"
import Thermometer from "../Thermometer"
import Title from "./Title"
import Border from "../../../../components/Border"

import "./style.css"

const Machine = ({ machineInfo, handleWindow }) => {
    const [machineStatus, setMachineStatus] = useState("")
    const [textColor, setTextColor] = useState("")

    useEffect(() => {
        if (machineInfo.qtdPontos > 65) {
            setMachineStatus("IDEAL")
            setTextColor("#008000")
        } else if (machineInfo.qtdPontos >= 10) {
            setMachineStatus("ATENÇÃO")
            setTextColor("#ffff00")
        } else if (machineInfo.qtdPontos >= -60) {
            setMachineStatus("EMERGENCIA")
            setTextColor("#ff0000")
        }
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "column", margin: "15px"}}>
            <Title machineInfo={machineInfo.nomeUsuario} />
            <div style={{ display: "flex" }}>
                <div>
                    <Border margin={"10px"} padding={"20px 15px"}>
                        <div className="machine--thermometer--header">
                            STATUS: <span style={{ color: `${textColor}` }}>{machineStatus}</span>
                        </div>
                        <Thermometer machineInfo={machineInfo}/>
                    </Border>
                    <Process machineInfo={machineInfo}/>
                </div>
                <Charts handleWindow={handleWindow}/>
            </div>
        </div>
    )
}

export default Machine