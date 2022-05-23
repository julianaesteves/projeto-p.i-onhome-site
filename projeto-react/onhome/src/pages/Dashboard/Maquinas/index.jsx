import React, { PureComponent } from "react";
import { useState } from "react";
import Border from "../../../components/Border";
import GradientText from "../../../components/GradientText";
import Machine from "../Components/Machine";
import Thermometer from "../Components/Thermometer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  LineChart,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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
    { number: 8, status: 60 },
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
      name: "16:41:02",
      atual: 10,
    },
    {
      name: "16:44:34",
      atual: 67,
    },
    {
      name: "16:47:29",
      atual: 49,
    },
    {
      name: "16:50:49",
      atual: 59,
    },
    {
      name: "16:53:21",
      atual: 67,
    },
  ];

  const dataPieChart = [
    { name: "Group A", value: 30 },
    { name: "Group B", value: 100 },
    { name: "Group C", value: 40 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
    { name: "Group G", value: 150 },
  ];

  const chartColor = ["#e692f7", "#b592f7", "#92b7f7", "#eafc83", "#0000"];

  const [chartData, setChartData] = useState(data);
  const [isVisible, setIsVisible] = useState(false);
  const [machineChosen, setMachineChosen] = useState(0);

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
          <div className="maquinas--leftItems">
            <div className="maquinas--itemGraph">
              <label className="maquinas--label">Lorem ipsum sic amet</label>
              <Border
                width={"500px"}
                height={"170px"}
                margin={"10px"}
                textAlign={"center"}
              >
                {/* <span className="maquinas--graphPlaceholder">
                Selecione algum funcionário para visulizar seu desempenho
              </span> */}
                <AreaChart
                  width={560}
                  height={200}
                  data={chartData}
                  margin={{
                    top: 15,
                    right: 110,
                    left: -20,
                    bottom: 35,
                  }}
                >
                  <CartesianGrid stroke="#333" />
                  <XAxis
                    dataKey="name"
                    style={{ fill: "white", fontSize: "14px" }}
                  />
                  <YAxis style={{ fill: "white", fontSize: "14px" }} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="atual"
                    fill="#FF3784"
                    stroke="#FF3784"
                  />
                </AreaChart>
              </Border>
            </div>
            <div className="maquinas--itemGraph">
              <label className="maquinas--label">Lorem ipsum sic amet</label>
              <Border
                width={"500px"}
                height={"170px"}
                margin={"10px"}
                textAlign={"center"}
              >
                <AreaChart
                  width={560}
                  height={200}
                  data={chartData}
                  margin={{
                    top: 15,
                    right: 105,
                    left: -20,
                    bottom: 25,
                  }}
                >
                  <CartesianGrid stroke="#333" />
                  <XAxis
                    dataKey="name"
                    style={{ fill: "white", fontSize: "14px" }}
                  />
                  <YAxis style={{ fill: "white", fontSize: "14px" }} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="atual"
                    fill="#FF3784"
                    stroke="#FF3784"
                  />
                </AreaChart>
              </Border>
            </div>
          </div>
          <div className="maquinas--itemGraph">
            <label className="maquinas--label">Lorem ipsum sic amet</label>
            <Border
              width={"500px"}
              height={"405px"}
              margin={"10px"}
              textAlign={"center"}
            >
              <PieChart width={550} height={390}>
                <Pie
                  dataKey="value"
                  data={dataPieChart}
                  cx="43%"
                  cy="45%"
                  outerRadius={130}
                  fill="#8884d8"
                >
                  {data.map((item, index) => (
                    <Cell fill={chartColor[index]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </Border>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maquinas;
