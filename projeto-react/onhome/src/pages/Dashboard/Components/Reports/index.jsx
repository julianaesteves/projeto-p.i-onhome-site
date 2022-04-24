import Input from "../../../../components/Input"
import Border from "../../../../components/Border"
import GradientText from "../../../../components/GradientText"

import "./style.css"

const Reports = () => {
    const reportsHeader = ["Máquinas", "Squad", "Conteúdo", "Gerar relatório"]
    const reportsList = [
        { maquina: 1, squad: "S01", conteudo: "Uso CPU, GPU, RAM, Disco" },
        { maquina: 2, squad: "S02", conteudo: "Uso CPU, GPU, RAM, Disco" },
        { maquina: 3, squad: "S03", conteudo: "Uso CPU, GPU, RAM, Disco" },
        { maquina: 4, squad: "S04", conteudo: "Uso CPU, GPU, RAM, Disco" },
        { maquina: 5, squad: "S05", conteudo: "Uso CPU, GPU, RAM, Disco" },

    ]

    return (
        <div className="reports-container">
            <Border textAlign={"center"} padding={"20px"} margin={20}>
                <div style={{ display: "flex", maxHeight: "50px", justifyContent: "center" }}>
                    <img src="./icons/dashboard.svg" alt="" />
                    <GradientText title={"Relatórios de Monitoramento"} textAlign={"center"} />
                </div>
                <Input placeholder={"Pesquisar"} width={"80%"} />
                <div className="reports-gradient">
                <Border margin={"20px 30px"} padding={"20px"}>
                    <div>
                        <div className="reports--header">
                            {reportsHeader.map(title => (
                                <div>{title}</div>
                            ))}
                        </div>
                        {reportsList.map((item, index) => {
                            const tableBorder = (index + 1) < reportsList.length ? "reports--table--border" : ""
                            return (
                                <div className={`reports--row ${tableBorder}`} key={index}>
                                    <div>{item.maquina}</div>
                                    <div>{item.squad}</div>
                                    <div>{item.conteudo}</div>
                                    <div>
                                        <img src="./icons/pdf.svg" alt="" />
                                        <img src="./icons/csv.svg" alt="" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Border>
                </div>
            </Border>
        </div>
    )
}

export default Reports