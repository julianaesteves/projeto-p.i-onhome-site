import '../../../../components/Border';
import Button from '../../../../components/Button';
import { useAuth } from '../../../../context/Auth';
import './styles.css';

const Menu = ({ handleChosenItem, selectedItem }) => {
    const { Logout } = useAuth()

    const menuItens = [
        {
            description: "Geral",
            iconUrl: '/icons/homeMenu.svg'
        },
        
        {
            description: "Configurações",
            iconUrl: '/icons/cogMenu.svg'
        },
        {
            description: "Usuários",
            iconUrl: '/icons/userMenu.svg'
        },
        {
            description: "Suporte",
            iconUrl: '/icons/dashMenu.svg'
        },
    ]

    return (
        <div className='menuContainer'>
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
                        {menuItens.map(item => {
                            const isSelected = selectedItem === item.description ? "menu--itemClicked" : ""

                            return (
                                <li className={isSelected} onClick={(e) => handleChosenItem(e)}>
                                    <img src={item.iconUrl} width={20}></img>
                                    <a>{item.description}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className='exit-btn'>
                        <Button
                            value={"Sair"}
                            width={80}
                            height={30}
                            onClick={Logout}
                        />
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Menu;