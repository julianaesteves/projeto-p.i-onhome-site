import React from 'react'
import Header from '../../components/Header';
import DownArrow from '../../components/DownArrow/';
import ContactUs from './components/ContactUs';
import Feedbacks from './components/Feedbacks';
import Footer from './components/Footer';
import Produtos from './components/Produtos';
import Solutions from './components/Solutions';
import "./style.css";

const InitialPage = () => {
    return (
        <div className="div--mainBox">
            <div className='div--mainGradient'>
                <div className="rl-container">
                    <Header />
                </div>
                <div className="rl-about">
                    <div className="rl-container">
                        <div className="rl-about-content">
                            <p className="rl-subtitle">Potencializando o seu tempo</p>
                            <p className="rl-about-title">Locação de máquinas</p>
                            <p className="rl-about-onhome">Utilize de equipamentos da mais alta qualidade, com preços justos e serviços de suporte 24/7 a sua disposição!</p>
                            <DownArrow />
                        </div>
                    </div>
                </div>
            </div>
            <section className="solutions">
                <div className="rl-container">
                    <Solutions />
                </div>
            </section>
            <Produtos />
            <section className='feedbacks'>
                <div className="rl-container">
                    <Feedbacks />
                </div>
            </section>
            <section className='contact'>
                <div className="rl-container">
                    <ContactUs />
                </div>
            </section>
            <section className='footer'>
                <Footer />
            </section>
        </div>
    )
}

export default InitialPage;