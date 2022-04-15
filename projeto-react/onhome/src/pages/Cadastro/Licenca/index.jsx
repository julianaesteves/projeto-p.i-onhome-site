import React from 'react';
import Input from '../../../components/Input';

const Licenca = (formData, setFormData) =>{
    return (
        <div className="formulario--licencaContainer" >
            <select name="options" id="" value={formData.opcoes} className='formulario--gradientSelect'> 
                <option value="1">Opção 1</option>
                <option value="2">Opção 2</option>
                <option value="3">Opção 3</option>
            </select>
            {/* // pfv vai agr */}
            <select name="types" id="" value={formData.tipos} className='formulario--gradientSelect'>
                <option value="1">Anual</option>
                <option value="2">Semestral</option>
                <option value="3">Mensal</option >
            </select>

            <label className="formulario--label" htmlFor="qtdMaquinas">Quantidade de máquinas</label >
            <Input />
        </div>
    )
}

export default Licenca