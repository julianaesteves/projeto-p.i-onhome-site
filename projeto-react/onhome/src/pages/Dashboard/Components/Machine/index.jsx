import Charts from "./Charts"
import Process from "./Process"
import Thermometer from "./Thermometer"
import Title from "./Title"

import "./style.css"

const Machine = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <Title squad={"S01"} machineNumber={4} />
            <div style={{ display: "flex" }}>
                <div>
                    <Thermometer />
                    <Process />
                </div>
                <Charts />
            </div>
        </div>
    )
}

export default Machine