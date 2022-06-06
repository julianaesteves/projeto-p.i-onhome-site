import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import MenuHamburguer from '../MenuHamburguer';
import MenuHamburguerAberto from '../MenuHamburguer/MenuHamburguerAberto';

import './style.css'

const Header = () => {
    return (
        <header className="rl-header">
            <MenuHamburguer />
            <div className="rl-logo">
                <LinkScroll to='rl-header' smooth={true} duration={1000}><span>OnHome</span></LinkScroll>
            </div>
            <div className='rl-options'>
                <nav className='rl-navbar'>
                    <ul>
                        <li><LinkScroll to='solutions--container' smooth={true} duration={1000}>Serviços</LinkScroll></li>
                        <li><LinkScroll to='products' smooth={true} duration={1000}>Produtos</LinkScroll></li>
                        <li><Link to={"/suporte"}>Suporte</Link></li>
                        <li><LinkScroll to='contact' smooth={true} duration={1000}>Contato</LinkScroll></li>
                    </ul>
                </nav>
                <div className="rl-login">
                    <Link to={"/login"}><button className='rl-btn-login'>Login</button></Link>
                    <button className='rl-btn-registrar'><LinkScroll to='contact' smooth={true} duration={1000}>Registrar-se</LinkScroll></button>
                </div>
            </div>
            <nav className="rl-navigation rl-transparent">
                <div className="rl-navigation-container">
                    <MenuHamburguerAberto />
                    <LinkScroll to='solutions' smooth={true} duration={1000}>Serviços</LinkScroll>
                    <LinkScroll to='products' smooth={true} duration={1000}>Produtos</LinkScroll>
                    <Link to={"/suporte"}>Suporte</Link>
                    <LinkScroll to='contact' smooth={true} duration={1000}>Contato</LinkScroll>
                    <Link to={"/login"}>Login</Link>
                    <LinkScroll to='contact' smooth={true} duration={1000}>Registrar-se</LinkScroll>
                </div>
                <span className="rl-navigation-menu-close" />
            </nav>
        </header>
    )
}

export default Header