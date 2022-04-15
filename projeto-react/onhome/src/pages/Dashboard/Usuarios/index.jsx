import Border from '../../../components/Border';
import GradientText from '../../../components/GradientText';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import './style.css'

const Usuarios = () => {

    // pfv vai agr
    return (
        <div className='right-content'>
            <div className='title'>
                <GradientText title={"Cadastro de Usuários"} fontSizeTitle={45}/>
            </div>
            <Border>
                <div className='div-cadastro-usuarios'>
                    <form action="#" className='div-inputs'>
                        <label className='label-title-form'>Nome:</label>
                        <input type="text" name='nome' className="border-gradient-input" />
                        <label className='label-title-form'>E-mail:</label>
                        <input type="text" name='email' className="border-gradient-input" />
                        <label className='label-title-form'>Senha:</label>
                        <input type="text" name='senha' className="border-gradient-input" />
                        <label className='label-title-form'>Cargo:</label>
                        <input type="text" name='cargo' className="border-gradient-input" />
                        <div className='right-content-button'>
                            <button className="border-gradient" type="submit">Cadastrar</button>
                        </div>
                    </form>
                    <div className="border-gradient">
                        <h2 className='cadastrados-title'>Cadastrados</h2>
                        <div className='registered-users'>
                            <p>Felipe Camara</p>
                            <div className='mui-icons'>
                                <EditIcon />
                                <DeleteIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </Border>
        </div>
    )
}

export default Usuarios;