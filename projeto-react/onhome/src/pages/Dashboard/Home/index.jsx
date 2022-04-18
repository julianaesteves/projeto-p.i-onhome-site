import Configuracoes from "../Configuracoes";
import Menu from "../Components/Menu";
import Usuarios from "../Usuarios";
import Reports from "../Components/Reports"
import Machine from "../Components/Machine"
import Teste from "../Components/Teste";

const Home = () => {
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <Menu />
            {/* <Configuracoes /> */}
            {/* <Reports /> */}
            <Machine />
            {/* <Teste /> */}
        </div>
    );
};

export default Home;