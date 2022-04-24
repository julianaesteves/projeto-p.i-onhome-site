import '../../../../components/Border';
import './styles.css';

const Menu = ({ handleChosenItem }) => {
    const menuItens = ["Geral", "Máquinas", "Relatórios", "Configurações", "Usuários"]

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
                    {menuItens.map(item => (
                        <li onClick={(e) => handleChosenItem(e)}><a>{item}</a></li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Menu;