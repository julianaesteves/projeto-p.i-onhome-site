import "./style.css"

const HardwareInfo = ({ handleWindow }) => {
    return (
        <div className="hardwareInfo--container">
            <div onClick={() => handleWindow()} 
                style={{ 
                    textAlign: "right", 
                    cursor: "pointer" 
                }}>
                Voltar
            </div>
        </div>
    )
}

export default HardwareInfo