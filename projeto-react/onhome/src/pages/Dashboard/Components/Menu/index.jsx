import '../../../../components/Border';
import './styles.css';

const Menu = () => {
    return (
        <nav className="navbar border-gradient">
            <ul className="menu">
                <li><a href="#">Geral<i></i></a></li>
                <li><a href="#">Máquinas<i></i></a></li>
                <li><a href="#">Localização<i></i></a></li>
                <li><a href="#">Relatórios<i></i></a></li>
                <li><a href="#">Configurações<i></i></a></li>
                <li><a href="#">Usuários<i></i></a></li>
                <li><a href="#">Sair<i></i></a></li>
            </ul>
        </nav>
    );
};

export default Menu;