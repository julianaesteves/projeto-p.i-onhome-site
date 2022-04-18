import Border from "../../../../../components/Border"

import "./style.css"

const Thermometer = () => {
    return (
        <Border margin={"10px"}>
            <div className="thermometer--container">
                <div className="thermometer--header">
                    STATUS: EMERGÊNCIA
                </div>
                <div className="thermometer--icon">
                    <img src="./icons/emergency.svg" alt="" />
                </div>
            </div>
        </Border>
    )
}

export default Thermometer