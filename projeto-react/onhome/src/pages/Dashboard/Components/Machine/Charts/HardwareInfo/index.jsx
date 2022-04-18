import "./style.css"

const HardwareInfo = () => {
    return (
        <div className="hardwareInfo--container">
            <h3 className="hardwareInfo--header">Informações de hardware</h3>
            <div className="hardwareInfo--content">
                <div>Processador: {}</div>
                <div>RAM: {}</div>
                <div>Sistema Operacional: {}</div>
            </div>
        </div>
    )
}

export default HardwareInfo