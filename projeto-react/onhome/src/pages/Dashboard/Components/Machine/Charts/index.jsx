import Border from "../../../../../components/Border"
import HardwareInfo from "./HardwareInfo"

import "./style.css"

const Charts = () => {

    return (
        <Border margin={"10px"}>
            <div>
                <div style={{ borderBottom: "1px solid #fff" }}>                    
                    <div style={{ display: "flex", color: "#fff" }}>
                        <div>
                            <h3>CPU</h3>
                            <img src="./images/charts.svg" alt="" />
                        </div>
                        <div>
                            <h3>Disco</h3>
                            <img src="./images/charts.svg" alt="" />
                        </div>
                    </div>
                    <div style={{ display: "flex", color: "#fff" }}>
                        <div>
                            <h3>Memória</h3>
                            <img src="./images/charts.svg" alt="" />
                        </div>
                        <div>
                            <h3>GPU</h3>
                            <img src="./images/charts.svg" alt="" />
                        </div>
                    </div>
                </div>
                <HardwareInfo />
            </div>
        </Border>
    )
}

export default Charts