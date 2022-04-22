import { Link } from 'react-scroll'
import './style.css'

const Header = () => {
    return (
        <div>
            <header className="container--mainContainerHeader">
                    <div className="header--logo">
                    <Link to='container--mainContainerHeader' smooth={true} duration={1000}><span>OnHome</span></Link>
                    </div>
                    <div className='header--options'>
                        <nav>
                            <ul>
                                <li><Link to='solutions--container' smooth={true} duration={1000}>Serviços</Link></li>
                                <li><Link to='products' smooth={true} duration={1000}>Produtos</Link></li>
                                <li>Sobre nós</li>
                                <li>Planos</li>
                                <li>Suporte</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header--login">
                        <button className='btn--login'>Login</button>
                        <button className='btn--registrar'>Registrar-se</button>
                    </div>
            </header>
        </div>
    )
}

export default Header;