import Charts from "./Charts"
import Process from "./Process"
import Thermometer from "../Thermometer"
import Title from "./Title"

import "./style.css"
import Border from "../../../../components/Border"

const Machine = ({ machineInfo }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <Title squad={"S01"} machineNumber={4}/>
            <div style={{ display: "flex" }}>
                <div>
                    <Border>
                        <Thermometer machineInfo={machineInfo}/>
                    </Border>
                    <Process />
                </div>
                <Charts />
            </div>
        </div>
    )
}

export default Machine