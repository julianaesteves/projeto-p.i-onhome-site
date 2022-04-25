import Border from '../../../components/Border';
import GradientText from '../../../components/GradientText';
import Input from '../../../components/Input';

import './style.css';

const Configuracoes = () => {

    return (
        <div className='right-content'>
            <div className='title'>
                <GradientText title={"Configurações"} fontSizeTitle={35}/>
            </div>
            <div className='cards'>
                <div className='empresa-plano'>
                    <Border height={230} padding={"20px"}>
                        <div className='cards-description'>
                            <h1 className='cards-title'>Empresa</h1>
                            <div className="cards-content">
                                <p className='paragraph-card'><b>Razão Social:</b> OnHome Digital Solutions Ltda.</p>
                                <p className='paragraph-card'><b>CNPJ:</b> 01.555.287/0001-87</p>
                                <p className='paragraph-card'><b>Nome Fantasia:</b> OnHome</p>
                                <p className='paragraph-card'><b>Email:</b> onhome@contato.com</p>
                                <p className='paragraph-card'><b>Telefone:</b> (11) 96892-3112</p>
                            </div>
                        </div>
                    </Border>
                    <Border height={190} padding={"20px"}>
                        <div className='div-plano'>
                        <div className='cards-description'>
                            <h1 className='cards-title'>Plano</h1>
                            <div className="cards-content">
                                <p className='paragraph-card'><b>Opção:</b> Plano 1</p>
                                <p className='paragraph-card'><b>Tipo:</b> Semestral</p>
                                <p className='paragraph-card'><b>Quantidade de máquinas:</b> 16</p>
                                <p className='paragraph-card'><b>Data da contratatação:</b> 21/02/2022</p>
                            </div>
                        </div>
                        </div>
                    </Border>
                </div>
                <div className='endereco'>
                    <div className="border-gradient" style={{ width: "100%" }}>
                        <div className='cards-description'>
                            <h1 className='cards-title'>Endereço</h1>
                            <div className="cards-content">
                                <p className="paragraph-card"><b>Logradouro:</b> Rua Haddock Lobo</p>
                                <p className="paragraph-card"><b>Número:</b> 595</p>
                                <p className="paragraph-card"><b>Complemento:</b> 1 andar</p>
                                <p className="paragraph-card"><b>CEP:</b> 01414-001</p>
                                <p className="paragraph-card"><b>Bairro:</b> Cerqueira César</p>
                                <p className='paragraph-card'><b>Cidade:</b> São Paulo</p>
                                <p className="paragraph-card"><b>Estado:</b> São Paulo</p>
                            </div>
                        </div>
                        <div>
                            <div className='div-input'>
                                <Input width={300} height={30} placeholder={"Status da licença:"}/>
                            </div>
                            <div className='button-right'>
                                <button className="border-gradient">Renovar...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Configuracoes;