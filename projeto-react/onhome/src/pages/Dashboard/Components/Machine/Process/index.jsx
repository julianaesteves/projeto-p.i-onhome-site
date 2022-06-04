import Border from "../../../../../components/Border"
import GradientText from "../../../../../components/GradientText"

import "./style.css"

const Process = () => {

    
    return (
        <Border margin={"10px"} padding={"10px"}>
            <div className="process--container">
                <GradientText title="Nome do usuário"/>
                <div className="process--line"></div>
                <p>Total de pontos: </p>
                <div className="process--hardware"><b>Processador:</b> {"Processador Intel® Core™ i5-1145G7 (8MB Cache, 2.60 GHz) Intel® vPro™"}</div>
                <div className="process--hardware"><b>RAM:</b> {"8 GB Soldado LPDDR4x 4266MHz"}</div>
                <div className="process--hardware"><b>Sistema Operacional:</b> {"Windows 10 Pro 64 (Português BR)"}</div>
            </div>
        </Border>
    )
}

export default Process

// const processList = [
//     { name: "Google Chrome", percentual: "100%" },
//     { name: "VSCode", percentual: "10%" },
//     { name: "Spotify", percentual: "40%" },
//     { name: "NetBeans", percentual: "80%" },
//     { name: "Postman", percentual: "10%" },
//     { name: "Slack", percentual: "15%" },
//     { name: "Microsoft Outlook", percentual: "16%" },
// ]

/* <div>
    <div className="process--header">
        <div>Programas em execução</div>
        <div style={{ width: "100px" }}>% de uso</div>
    </div>
        {processList.map((process, index) => {
            const tableBorder = (index + 1) < processList.length ? "process--table--border" : ""
            return (
                <div className={`process--row ${tableBorder}`}>
                    <div>{process.name}</div>
                    <div style={{ width: "100px" }}>{process.percentual}</div>
                </div>
            )
        })}
</div> */