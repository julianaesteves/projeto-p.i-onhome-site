import "./style.css"

const HardwareInfo = ({ handleWindow }) => {
    return (
        <div className="hardwareInfo--container">
            <h3 className="hardwareInfo--header">Informações de hardware</h3>
            <div className="hardwareInfo--content">
                <div>Processador: {}</div>
                <div>RAM: {}</div>
                <div>Sistema Operacional: {}</div>
            </div>
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