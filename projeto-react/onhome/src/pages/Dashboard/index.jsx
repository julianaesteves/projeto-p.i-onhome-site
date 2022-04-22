import Configuracoes from "./Configuracoes"
import Menu from "./Components/Menu"
import Usuarios from "./Usuarios"
import Reports from "./Components/Reports"
import Machine from "./Components/Machine"
import Home from "./Home"

const Dashboard = () => {
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <Menu />
            {/* <Home /> */}
            {/* <Configuracoes /> */}
            {/* <Reports /> */}
            {/* <Machine /> */}
        </div>
    );
};

export default Dashboard;