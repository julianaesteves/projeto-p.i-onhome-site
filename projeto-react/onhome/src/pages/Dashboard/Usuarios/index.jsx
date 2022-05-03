import Border from '../../../components/Border';
import GradientText from '../../../components/GradientText';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import './style.css'

const Usuarios = () => {

    return (
        <div className='right-content'>
            <div className='title'>
                <GradientText title={"Cadastro de Usuários"} textAlign="left" fontSizeTitle={35} />
            </div>
            <Border padding={"20px"}>
                <div className='div-cadastro-usuarios'>
                    <form action="#" className='div-inputs'>
                        <label className='label-title-form'>Nome:</label>
                        <input type="text" name='nome' className="border-gradient-input" style={{ margin: "20px 0"}}/>
                        <label className='label-title-form'>E-mail:</label>
                        <input type="text" name='email' className="border-gradient-input" style={{ margin: "20px 0"}}/>
                        <label className='label-title-form'>Senha:</label>
                        <input type="text" name='senha' className="border-gradient-input" style={{ margin: "20px 0"}}/>
                        <label className='label-title-form'>Permissão:</label>
                        
                        <select name="" id="" className='cadastro--gradientSelect'>
                            <option value="">Usuário</option>
                            <option value="">Administrador</option>
                        </select>
                        <div className='right-content-button'>
                            <button className="border-gradient" type="submit">Cadastrar</button>
                        </div>
                    </form>
                    <div className="usuarios-gradient">
                        <div className="border-gradient" style={{ padding: "20px" }}>
                            <h2 className='cadastrados-title'>Cadastrados</h2>
                            <div className='registered-users'>
                                <p>Felipe Camara</p>
                                <div className='mui-icons'>
                                    <EditIcon style={{ cursor: "pointer" }}/>
                                    <DeleteIcon style={{ cursor: "pointer" }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Border>
        </div>
    )
}

export default Usuarios;