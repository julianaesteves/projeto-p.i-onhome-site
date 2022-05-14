import Configuracoes from "./Configuracoes"
import Menu from "./Components/Menu"
import Usuarios from "./Usuarios"
import Reports from "./Components/Reports"
import Machine from "./Components/Machine"
import Home from "./Home"
import Maquinas from "./Maquinas"

const Dashboard = () => {
    return (
        <div style={{ display: "flex" }}>
            <Menu />
            {/* <Usuarios /> */}
            {/* <Home /> */}
            <Maquinas />
            {/* <Home /> */}
            {/* <Maquinas /> */}
            {/* <Menu /> */}

            {/* <Machine /> */}
            {/* <Reports /> */}
            {/* <Machine /> */}
        </div>
    );
};

export default Dashboard;