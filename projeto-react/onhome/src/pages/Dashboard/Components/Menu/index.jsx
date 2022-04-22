import '../../../../components/Border';
import './styles.css';

const Menu = () => {
    return (
        <div className="menu">
            <label htmlFor='dropdown' className="dropdown">
                <span className="hamburger-icon">
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </span>
            </label>
            <input id="dropdown" type="checkbox" />
            <nav className="navbar border-gradient">
                <ul>
                    <li><a href="#">Geral<i></i></a></li>
                    <li><a href="#">Máquinas<i></i></a></li>
                    <li><a href="#">Localização<i></i></a></li>
                    <li><a href="#">Relatórios<i></i></a></li>
                    <li><a href="#">Configurações<i></i></a></li>
                    <li><a href="#">Usuários<i></i></a></li>
                    <li><a href="#">Sair<i></i></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;