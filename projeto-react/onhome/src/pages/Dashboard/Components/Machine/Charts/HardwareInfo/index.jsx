import "./style.css"

const HardwareInfo = ({ handleWindow }) => {
    return (
        <div className="hardwareInfo--container">
            <h3 className="hardwareInfo--header">Informações de hardware</h3>
            <div className="hardwareInfo--content">
                <div><b>Processador:</b> {"Processador Intel® Core™ i5-1145G7 (8MB Cache, 2.60 GHz) Intel® vPro™"}</div>
                <div><b>RAM:</b> {"8 GB Soldado LPDDR4x 4266MHz"}</div>
                <div><b>Sistema Operacional:</b> {"Windows 10 Pro 64 (Português BR)"}</div>
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