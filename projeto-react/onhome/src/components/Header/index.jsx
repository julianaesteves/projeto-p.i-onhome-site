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
                            <li>Planos</li>
                            <li>Suporte</li>
                         </ul>
                    </nav>
                </div>
                <div className="header--login">


                    <button className='btn--login'><Link to={"/login"}>Login</Link></button>


                    <button className='btn--registrar'>Registrar-se</button>
                </div>
            </header>
        </div>
    )
}

export default Header;