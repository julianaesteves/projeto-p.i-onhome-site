import '../../../../components/Border';
import './styles.css';

const Menu = () => {
    return (
        <div className="menu">
            <input id="dropdown" class="input-box" type="checkbox"/>
            <label for="dropdown" class="dropdown">
                <span class="hamburger-icon">
                    <span class="icon-bar top-bar"></span>
                    <span class="icon-bar middle-bar"></span>
                    <span class="icon-bar bottom-bar"></span>
                </span>
            </label>
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