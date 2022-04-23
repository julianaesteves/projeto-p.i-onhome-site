import { useEffect, useState } from "react"
import Border from "../../../../components/Border"

import "./style.css"

const Thermometer = ({ machineInfo }) => {
    const [machineStatus, setMachineStatus] = useState(machineInfo.status)

    // useEffect(() => {
    //     setTimeout(() => {
    //         if (machineStatus < 65) {
    //             const newInfo = machineStatus + 23
    //             setMachineStatus(newInfo) 
    //         } else {
    //             const newInfo = machineStatus - 79
    //             setMachineStatus(newInfo)
    //         }
    //     }, 1000)
    // }, [machineStatus])

    return (
            <div className="thermometer--container">
                {/* Colocar só no thermometer do machine xx */}
                {/* <div className="thermometer--header">
                    STATUS: EMERGÊNCIA
                </div> */}
                <div className="thermometer--icon">
                    <img src="./images/metricas.png" alt="" />
                    <div className="thermometer--pointer" style={{ transform: `rotate(${machineStatus}deg)` }}></div>
                </div>
            </div>
    )
}

export default Thermometer