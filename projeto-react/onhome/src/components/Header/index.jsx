import './style.css'

const Header = () => {
    return (
        <div>
            <header className="container--mainContainerHeader">
                    <div className="header--logo">
                        <span>OnHome</span>
                    </div>
                    <div className='header--options'>
                        <nav>
                            <ul>
                                <li>Features</li>
                                <li>Serviços</li>
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