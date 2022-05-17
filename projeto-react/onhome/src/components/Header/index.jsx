import './style.css'
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
    return (
        <div>
            <header className="container--mainContainerHeader">
                <div className="header--logo">
                    <LinkScroll to='container--mainContainerHeader' smooth={true} duration={1000}><span>OnHome</span></LinkScroll>
                </div>
                <div className='header--options'>
                    <nav>
                        <ul>
                            <li><LinkScroll to='solutions--container' smooth={true} duration={1000}>Serviços</LinkScroll></li>
                                <li><LinkScroll to='products' smooth={true} duration={1000}>Produtos</LinkScroll></li>
                                <li>Sobre nós</li>
                                <li>Suporte</li>
                                <li><LinkScroll to='contact--container' smooth={true} duration={1000}>Contato</LinkScroll></li>
                         
                        </ul>
                    </nav>
                </div>
                <div className="header--login">
                    <Link to={"/login"}><button className='btn--login' style={{color: "#FFF"}}>Login</button></Link>
                    <button className='btn--registrar'><LinkScroll to='contact--container' smooth={true} duration={1000}>Registrar-se</LinkScroll></button>
                </div>
            </header>
        </div>
    )
}

export default Header;