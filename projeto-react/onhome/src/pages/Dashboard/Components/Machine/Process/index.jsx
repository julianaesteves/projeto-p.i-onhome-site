import Border from "../../../../../components/Border"

import "./style.css"

const Process = () => {
    const processList = [
        { name: "Google Chrome", percentual: "100%" },
        { name: "VSCode", percentual: "10%" },
        { name: "Spotify", percentual: "40%" },
        { name: "NetBeans", percentual: "80%" },
        { name: "Postman", percentual: "10%" },
        { name: "Slack", percentual: "15%" },
        { name: "Microsoft Outlook", percentual: "16%" },
    ]

    return (
        <Border margin={"10px"} padding={"10px"}>
            <div className="process--container">
                <div>
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
                </div>
            </div>
        </Border>
    )
}

export default Process