import { useState, useEffect } from "react";
import Border from "../../../../../components/Border"
import HardwareInfo from "./HardwareInfo"
import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import "./style.css"

const Charts = ({ handleWindow }) => {

    const data = [
        {
          name: 'Dia 1',
          atual: 4000,
          media: 2400,
        },
        {
          name: 'Dia 2',
          atual: 3000,
          media: 1398,
        },
        {
          name: 'Dia 3',
          atual: 2000,
          media: 9800,
        },
        {
          name: 'Dia 4',
          atual: 2780,
          media: 3908,
        },
        {
          name: 'Dia 5',
          atual: 1890,
          media: 4800,
        },
        {
          name: 'Dia 6',
          atual: 2390,
          media: 3800,
        },
        {
          name: 'Dia 7',
          atual: 3490,
          media: 4300,
        },
      ];

    const chartsLabel = ["CPU", "Disco", "Memória", "GPU"]
    const [chartData, setChartData] = useState(data)
    const [nameData, setNameData] = useState(21)
    const [atualData, setAtualData] = useState(3000)
    const [mediaData, setMediaData] = useState(3000)

    useEffect(() => {
        setTimeout(() => {
            const newName = nameData + 1
            const newAtual = atualData + 500
            const newMedia = mediaData + 50
            setNameData(newName)
            setMediaData(newMedia)
            setAtualData(newAtual)
            let newData = [...data, {name: `${newName}`, atual: `${newAtual}`, media: `${newMedia}`}]
            setChartData(newData)
        }, 3000)
    }, [chartData])

    return (
        <Border margin={"10px"} padding={"20px"}>
            <div>
                <div style={{ borderBottom: "1px solid #fff" }}>                    
                    <div style={{ display: "flex", flexWrap: "wrap", color: "#fff", maxWidth: "850px", justifyContent: "center" }}>
                            {chartsLabel.map(chart => (
                                <div>
                                    <h2>{chart}</h2>
                                    <AreaChart 
                                        width={320}
                                        height={170}
                                        data={chartData}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid stroke="#333" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        {/* <Legend /> */}
                                        {/* <Line type="monotone" dataKey="media" stroke="#ff0000" activeDot={{ r: 8 }} /> */}
                                        <Area type="monotone" dataKey="atual" stroke="#ffa500" />
                                    </AreaChart>
                                </div>
                            ))}         
                    </div>
                </div>
                <HardwareInfo handleWindow={handleWindow} />
            </div>
        </Border>
    )
}

export default Charts