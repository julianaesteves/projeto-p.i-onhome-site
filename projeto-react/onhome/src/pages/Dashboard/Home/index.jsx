import Configuracoes from "../Configuracoes";
import Menu from "../Components/Menu";
import Usuarios from "../Usuarios";

const Home = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Menu />
            <Configuracoes />
        </div>
    );
};

export default Home;