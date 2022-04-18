import React from "react";
import Input from "../../../components/Input/index.jsx";

const EnderecoEmpresa = ({ setFormData, formData }) => {

  return (
    <div className="enderecoEmpresa--mainContainer">
      <label className="formulario--label">Logradouro</label>
      <Input
        value={formData.logradouro}
        onChange={(e) => setFormData({...formData, logradouro: e.target.value})}
        width={"537px"}
        height={"25px"}
      />
      <label className="formulario--label">Bairro</label>
      <Input
        value={formData.bairro}
        onChange={(e) => setFormData({...formData, bairro: e.target.value})}
        width={"537px"}
        height={"25px"}
      />
      <label className="formulario--label">Número</label>
      <Input
        value={formData.numero}
        onChange={(e) => setFormData({...formData, numero: e.target.value})}
        width={"243px"}
        height={"25px"}
      />
      <label className="formulario--label">CEP</label>
      <Input
        value={formData.cep}
        onChange={(e) => setFormData({...formData, cep: e.target.value})}
        width={"243px"}
        height={"25px"}
      />
      <label className="formulario--label">Complemento</label>
      <Input
        value={formData.complemento}
        onChange={(e) => setFormData({...formData, complemento: e.target.value})}
        width={"537px"}
        height={"25px"}
      />
      <label className="formulario--label">Estado</label>
      <Input
        value={formData.estado}
        onChange={(e) => setFormData({...formData, estado: e.target.value})}
        width={"243px"}
        height={"25px"}
      />
      <label className="formulario--label">Cidade</label>
      <Input
        value={formData.cidade}
        onChange={(e) => setFormData({...formData, cidade: e.target.value})}
        width={"243px"}
        height={"25px"}
      />
      
      
      
    </div>
  );
};
export default EnderecoEmpresa;
