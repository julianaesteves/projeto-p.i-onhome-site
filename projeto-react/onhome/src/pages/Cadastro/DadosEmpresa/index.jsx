import React from "react";
import Input from "../../../components/Input/index.jsx";
import "./style.css"

const DadosEmpresa = ({ setFormData, formData }) => {

  return (
    <div className="dadosEmpresa--mainContainer">
      <div className="dadosEmpresa-innerContainer">
      <label className="formulario--label">Nome Fantasia</label>
      <Input
        value={formData.nomeFantasia}
        onChange={(e) => setFormData({...formData, nomeFantasia: e.target.value})}
        width={"90%"}
        height={"20px"}
        margin={"8px 0 20px 0"} 
         />
      <label className="formulario--label">CNPJ</label>
      <Input
        value={formData.cnpj}
        onChange={(e) => setFormData({...formData, cnpj: e.target.value})}
        width={"90%"}
        height={"20px"}
        margin={"8px 0 20px 0"} 
      />
      <label className="formulario--label">Razão Social</label>
      <Input
        value={formData.razaoSocial}
        onChange={(e) => setFormData({...formData, razaoSocial: e.target.value})}
        width={"90%"}
        height={"20px"}
        margin={"8px 0 20px 0"} 
      />
      <label className="formulario--label">E-mail</label>
      <Input
        type="email"
        value={formData.emailEmpresa}
        onChange={(e) => setFormData({...formData, emailEmpresa: e.target.value})}
        width={"90%"}
        height={"20px"}
        margin={"8px 0 20px 0"} 
      />
      <label className="formulario--label">Telefone</label>
      <Input
        value={formData.telefoneEmpresa}
        onChange={(e) => setFormData({...formData, telefoneEmpresa: e.target.value})}
        width={"30%"}
        height={"20px"}
        margin={"8px 0 20px 0"} 
      /> 
      </div>
    </div>
  );
};

export default DadosEmpresa;
