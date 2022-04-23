import { useState } from "react";
import Border from "../../../components/Border";
import GradientText from "../../../components/GradientText";
import Machine from "../Components/Machine";
import Thermometer from "../Components/Thermometer"

import './style.css'

const Maquinas = () => {
    const machineList = [
        {
            number: 1,
            status: 59
        },
        {
            number: 2,
            status: 39
        },
        {
            number: 3,
            status: 79
        },
        {
            number: 4,
            status: 21
        },
        {
            number: 5,
            status: 69
        },
        {
            number: 6,
            status: 19
        },
        {
            number: 7,
            status: 19
        },
        {
            number: 8,
            status: 19
        },
        {
            number: 9,
            status: 19
        },
        {
            number: 10,
            status: 19
        },
        {
            number: 11,
            status: 19
        },
        {
            number: 12,
            status: 19
        },
    ]

    const [isVisible, setIsVisible] = useState(false)
    const [machineChosen, setMachineChosen] = useState(0)

    const handleWindow = (machine) => {
        if (!isVisible) {
            setMachineChosen(machine)
            setIsVisible(true)
        }
    }

    return (
        <div>
            {isVisible ? 
                <Machine machineInfo={machineChosen}/>
                :
                <div className="maquinas-container">
                    <Border padding={"5px"}>
                        <div className='maquinas-header'>
                            <GradientText title={`Setor X`} textAlign={"center"} />
                            <div className='maquinas-legend'>
                                <ul>
                                    <li>Desligada</li>
                                    <li>Ideal</li>
                                    <li>Regular</li>
                                    <li>Crítico</li>
                                </ul>
                                <ul>
                                    <li>Em respouso</li>
                                    <li>Bom</li>
                                    <li>Atenção</li>
                                    <li>Emergência</li>
                                </ul>
                            </div>
                        </div>
                    </Border>
                    <div className="maquinas-content">
                        {machineList.map(machine => (
                            <Border padding={"20px"} margin={"10px"} cursor={"pointer"} onClick={() => handleWindow(machine)}>
                                <div style={{ fontSize: "20px" }}>{machine.number}</div>
                                <Thermometer machineInfo={machine}/>
                            </Border>
                        ))}
                    </div>
                </div>
            }
        </div>
    ) 
};

export default Maquinas;