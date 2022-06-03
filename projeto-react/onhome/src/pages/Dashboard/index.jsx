import { useState } from "react"
import Configuracoes from "./Configuracoes"
import Menu from "./Components/Menu"
import Usuarios from "./Usuarios"
import Reports from "./Components/Reports"
import Home from "./Home"
import Maquinas from "./Maquinas"

const Dashboard = () => {
    const [chosenComponent, setChosenComponent] = useState(<Home/>)

    const handleChosenItem = (chosen) => {
        const chosenItem = chosen.target.innerText
        switch (chosenItem) {
            case "Geral": 
                setChosenComponent(<Home />)
                break
            case "Máquinas":
                setChosenComponent(<Maquinas />)
                break
            case "Relatórios":
                setChosenComponent(<Reports />)
                break
            case "Configurações":
                setChosenComponent(<Configuracoes />)
                break
            case "Usuários":
                setChosenComponent(<Usuarios />)
                break
            default: 
                setChosenComponent(<Home/>)
        }
    }

    return (
        <div style={{ display: "flex" }}>
            <Menu handleChosenItem={handleChosenItem}/>
            {chosenComponent}
        </div>
    );
};

export default Dashboard;