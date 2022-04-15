import Border from '../../../components/Border';
import GradientText from '../../../components/GradientText';
import Input from '../../../components/Input';

import './style.css';

const Configuracoes = () => {

// pfv vai agr
    return (
        <div className='right-content'>
            <div className='title'>
                <GradientText title={"Configurações"} fontSizeTitle={45}/>
            </div>
            <div className='cards'>
                <div className='empresa-plano'>
                    <Border height={230}>
                        <div className='cards-description'>
                            <h1 className='cards-title'>Empresa</h1>
                            <div className="cards-content">
                                <p className='paragraph-card'>Razao Social:</p>
                                <p className='paragraph-card'>CNPJ:</p>
                                <p className='paragraph-card'>Nome Fantasia:</p>
                                <p className='paragraph-card'>Email:</p>
                                <p className='paragraph-card'>Telefone:</p>
                            </div>
                        </div>
                    </Border>
                    <Border height={190}>
                        <div className='div-plano'>
                        <div className='cards-description'>
                            <h1 className='cards-title'>Plano</h1>
                            <div className="cards-content">
                                <p className='paragraph-card'>Opção:</p>
                                <p className='paragraph-card'>Tipo:</p>
                                <p className='paragraph-card'>Quantidade de máquinas:</p>
                                <p className='paragraph-card'>Data da contratatação:</p>
                            </div>
                        </div>
                        </div>
                    </Border>
                </div>
                <div className='endereco'>
                    <div className="border-gradient">
                        <div className='cards-description'>
                            <h1 className='cards-title'>Endereço</h1>
                            <div className="cards-content">
                                <p className="paragraph-card">Logradouro</p>
                                <p className="paragraph-card">Número</p>
                                <p className="paragraph-card">Complemento</p>
                                <p className="paragraph-card">CEP</p>
                                <p className="paragraph-card">Bairro</p>
                                <p className="paragraph-card">Estado</p>
                                <p className='paragraph-card'>Cidade</p>
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