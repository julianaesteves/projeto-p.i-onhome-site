import { useEffect, useState } from "react"
import { useAuth } from "../../context/Auth"
import { useNavigate } from "react-router-dom"
import Configuracoes from "./Configuracoes"
import Menu from "./Components/Menu"
import Usuarios from "./Usuarios"
import Reports from "./Components/Reports"
import Home from "./Home"
import Maquinas from "./Maquinas"

const Dashboard = () => {
    const [chosenComponent, setChosenComponent] = useState(<Home/>)
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()
    
    // useEffect(() => {
    //     if (!isAuthenticated) return navigate("/login")
    // })

    const handleChosenItem = (chosen) => {
        const chosenItem = chosen.target.innerText
        switch (chosenItem) {
            case "Geral": 
                setChosenComponent(<Maquinas />)
                break
            case "Suporte":
                navigate("/suporte")
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
                setChosenComponent(<Maquinas />)
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