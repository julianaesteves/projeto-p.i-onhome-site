import '../../../../components/Border';
import Button from '../../../../components/Button'
import './styles.css';

const Menu = ({ handleChosenItem }) => {
    const menuItens = [
        {
            description: 'Tela inicial',
            iconUrl: '/icons/homeMenu.svg'
        },
        {
            description: "Geral",
            iconUrl: ''
        }, 
        {   
            description: "Máquinas",
            iconUrl: '/icons/monitorMenu.svg'
        }, 
        {   
            description: "Relatórios",
            iconUrl: '/icons/dashMenu.svg'
        }, 
        {
            description: "Configurações",
            iconUrl: '/icons/cogMenu.svg'
        }, 
        {   
            description: "Usuários",
            iconUrl: '/icons/userMenu.svg'
        },
    ]

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
                        <li onClick={(e) => handleChosenItem(e)}><img src={item.iconUrl} width={20}></img><a>{item.description}</a></li>
                    ))}
                </ul>
                <div className='exit-btn'>
                    <Button value={"Sair"} width={80} height={30}/>
                </div>
            </nav>
        </div>
    );
};

export default Menu;