import { useState } from "react";
import Border from "../../../components/Border";
import GradientText from "../../../components/GradientText";
import Machine from "../Components/Machine";
import Thermometer from "../Components/Thermometer"

import './style.css'

const Maquinas = () => {
    const machineList = [
        { number: 1, status: -53 },
        { number: 2, status: 0 },
        { number: 3, status: -39 },
        { number: 4, status: -21 },
        { number: 5, status: -30 },
        { number: 6, status: 69 },
        { number: 7, status: -19 },
        { number: 8, status: 10 },
        { number: 9, status: -19 },
        { number: 10, status: -39 },
        { number: 11, status: -22 },
        { number: 12, status: -31 },
    ]

    const [isVisible, setIsVisible] = useState(false)
    const [machineChosen, setMachineChosen] = useState(0)

    const legendList = [
        { title: "Desligada", icon: "./icons/desligado.svg" },
        { title: "Em repouso", icon: "./icons/repouso.svg" },
        { title: "Ideal", icon: "./icons/ideal.svg" },
        { title: "Atenção", icon: "./icons/atencao.svg" },
        { title: "Emergência", icon: "./icons/emergencia.svg" },
    ]

    const handleWindow = (machine) => {
        if (!isVisible) {
            setMachineChosen(machine)
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    return (
        <div style={{ height: "100vh" }}>
            {isVisible ? 
                <Machine machineInfo={machineChosen} handleWindow={handleWindow} />
                :
                <div className="maquinas-container">
                    <Border padding={8} margin={"0 0 30px"}>
                        <div className='maquinas-header'>
                            <GradientText 
                                title={`Squad - OnHome`} 
                                textAlign={"center"}  
                                fontSize={12}
                                margin={"10px 0 0 0"}
                            />
                            <div className='maquinas-legend'>
                                <ul>
                                    {legendList.map(legend => (
                                        <div style={{ display: "flex" }}>
                                            <img src={`${legend.icon}`} alt="" />
                                            <li>{legend.title}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Border>
                    <div className="maquinas-content">
                        {machineList.map(machine => (
                            <Border padding={"20px"} margin={"20px"} cursor={"pointer"} onClick={() => handleWindow(machine)}>
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