import { useState } from "react";
import Border from "../../../components/Border";
import GradientText from "../../../components/GradientText";
import Machine from "../Components/Machine";
import Thermometer from "../Components/Thermometer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import "./style.css";

const Maquinas = () => {
  const machineList = [
    { number: 1, status: -53 },
    { number: 2, status: -29 },
    { number: 3, status: -39 },
    { number: 4, status: -31 },
    { number: 5, status: -30 },
    { number: 6, status: 69 },
    { number: 7, status: -19 },
    { number: 8, status: 10 },
    { number: 9, status: -19 },
    { number: 10, status: -39 },
    { number: 11, status: -22 },
    { number: 12, status: -31 },
    { number: 13, status: -31 },
    { number: 14, status: -31 },
    { number: 15, status: -31 },
    { number: 16, status: -31 },
  ];

  const data = [
    {
      name: '16:41:02',
      atual: 10,
    },
    {
      name: '16:44:34',
      atual: 67,
    },
    {
      name: '16:47:29',
      atual: 49,
    },
    {
      name: '16:50:49',
      atual: 59,
    },
    {
      name: '16:53:21',
      atual: 67,
    }
  ];

  const [chartData, setChartData] = useState(data)
  const [isVisible, setIsVisible] = useState(false);
  const [machineChosen, setMachineChosen] = useState(0);

  const legendList = [
    { title: "Desligada", icon: "./icons/desligado.svg" },
    { title: "Em repouso", icon: "./icons/repouso.svg" },
    { title: "Ideal", icon: "./icons/ideal.svg" },
    { title: "Atenção", icon: "./icons/atencao.svg" },
    { title: "Emergência", icon: "./icons/emergencia.svg" },
  ];

  const handleWindow = (machine) => {
    if (!isVisible) {
      setMachineChosen(machine);
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      {isVisible ? (
        <Machine machineInfo={machineChosen} handleWindow={handleWindow} />
      ) : (
        <div className="maquinas-container">
          <Border margin={"0 0 30px"}>
            <div className="maquinas-header">
              <GradientText
                title={`Desempenho geral dos seus funcionários`}
                textAlign="center"
                fontSize={13}
                margin={"10px 0 0 0"}
              />
              {/* <div className='maquinas-legend'>
                                <ul>
                                    {legendList.map(legend => (
                                        <div style={{ display: "flex" }}>
                                            <img src={`${legend.icon}`} alt="" />
                                            <li>{legend.title}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div> */}
            </div>
          </Border>
          <div className="maquinas-content">
            <ArrowBackIosIcon className="arrow--goBack" />
            {machineList.map((machine) => (
              <Border
                padding={"20px"}
                margin={"20px"}
                cursor={"pointer"}
                onClick={() => handleWindow(machine)}
              >
                <div style={{ fontSize: "20px" }}>{machine.number}</div>
                <Thermometer machineInfo={machine} />
              </Border>
            ))}
            <ArrowForwardIosIcon className="arrow--goNext" />
          </div>
        </div>
      )}
      <div className="maquinas--workerGraphs_container">
        <div className="maquinas--workerGraphs_content">
          <div className="maquinas--itemGraph">
            <label className="maquinas--label">Lorem ipsum sic amet</label>
            <Border
              width={"500px"}
              height={"170px"}
              margin={"10px"}
              textAlign={"center"}
              padding={"60px"}
            >
              <span className="maquinas--graphPlaceholder">
                Selecione algum funcionário para visulizar seu desempenho
              </span>
            </Border>
          </div>
          <div className="maquinas--itemGraph">
            <label className="maquinas--label">Lorem ipsum sic amet</label>
            <Border
              width={"480px"}
              height={"170px"}
              margin={"10px"}
              textAlign={"center"}
              padding={"60px"}
            >
              <span className="maquinas--graphPlaceholder">
                Selecione algum funcionário para visulizar seu desempenho
              </span>
            </Border>
          </div>
          <div className="maquinas--itemGraph">
            <label className="maquinas--label">Lorem ipsum sic amet</label>
            <Border
              width={"450px"}
              height={"180px"}
              margin={"10px"}
              textAlign={"center"}
              padding={"60px"}
            >
              <span className="maquinas--graphPlaceholder">
                Selecione algum funcionário para visulizar seu desempenho
              </span>
            </Border>
          </div>
          <div className="maquinas--itemGraph">
            <label className="maquinas--label">Lorem ipsum sic amet</label>
            <Border
              width={"530px"}
              height={"180px"}
              margin={"10px"}
              textAlign={"center"}
              padding={"60px"}
            >
              {/* <span className="maquinas--graphPlaceholder">
                Selecione algum funcionário para visulizar seu desempenho
              </span> */}
              <AreaChart 
                                        width={420}
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
                                        <Area type="monotone" dataKey="atual" fill="#FF3784" stroke="#FF3784"/>
                                    </AreaChart>
            </Border>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maquinas;
