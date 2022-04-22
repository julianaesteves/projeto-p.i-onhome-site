import Configuracoes from "./Configuracoes"
import Menu from "./Components/Menu"
import Usuarios from "./Usuarios"
import Reports from "./Components/Reports"
import Machine from "./Components/Machine"
import Teste from "./Components/Teste"
import Home from "./Home"
import Maquinas from "./Maquinas"

const Dashboard = () => {
    return (
        //         <div style={{ display: 'flex' }}>  Alteração inserida com o menu do Rafael
        <div style={{ display: "flex", gap: "10px" }}>
            <Menu />
            <Maquinas />
            {/* <Menu /> */}
            {/* <Machine /> */}
            {/* <Configuracoes /> */}
            {/* <Reports /> */}
            {/* <Machine /> */}
            {/* <Teste /> */}
        </div>
    );
};

export default Dashboard;