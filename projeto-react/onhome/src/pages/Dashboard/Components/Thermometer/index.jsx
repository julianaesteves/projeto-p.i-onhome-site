import { useEffect, useState } from "react"
import Border from "../../../../components/Border"

import "./style.css"

const Thermometer = ({ machineInfo }) => {
    const [machineStatus, setMachineStatus] = useState(35)

    useEffect(() => {
        setTimeout(() => {
            if (machineStatus > 65) {
                setMachineStatus(-55)
            } else {
                const newStatus = machineStatus + 30
                setMachineStatus(newStatus)
            }
        }, 2000)
    }, [machineStatus])

    return (
        <Border margin={"10px"}>
            <div className="thermometer--container">
                <div className="thermometer--header">
                    STATUS: EMERGÊNCIA
                </div>
                <div className="thermometer--icon">
                    <img src="./images/metricas.png" alt="" />
                    <div className="thermometer--pointer" style={{ transform: `rotate(${machineStatus}deg)` }}></div>
                </div>
            </div>
        </Border>
    )
}

export default Thermometer