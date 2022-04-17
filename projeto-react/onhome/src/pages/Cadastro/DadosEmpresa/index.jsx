import React from "react";
import { useState } from "react";
import Input from "../../../components/Input/index.jsx";
import ButtonWithArrow from "../../../components/ButtonWithArrow/index.jsx";
import GradientText from "../../../components/GradientText/index";

const DadosEmpresa = ({ nextPage, toggleButton, onSubmit, setFormData, formData, handleChange }) => {

  return (
    <form className="dadosEmpresa--mainContainer" onSubmit={onSubmit}>
      <label className="formulario--label">Nome Fantasia</label>
      <Input
        value={formData.nomeFantasia}
        onChange={(e) => setFormData({...formData, nomeFantasia: e.target.value})}
        width={"537px"}
        height={"25px"}
      />
      <label className="formulario--label">CNPJ</label>
      <Input
        value={formData.cnpj}
        onChange={(e) => setFormData({...formData, cnpj: e.target.value})}
        width={"537px"}
        height={"25px"}
      />
      <label className="formulario--label">Razão Social</label>
      <Input
        value={formData.razaoSocial}
        onChange={(e) => setFormData({...formData, razaoSocial: e.target.value})}
        width={"537px"}
        height={"25px"}
      />
      <label className="formulario--label">E-mail</label>
      <Input
        type="email"
        value={formData.emailEmpresa}
        onChange={(e) => setFormData({...formData, emailEmpresa: e.target.value})}
        width={"537px"}
        height={"25px"}
      />
      <label className="formulario--label">Telefone</label>
      <Input
        value={formData.telefoneEmpresa}
        onChange={(e) => setFormData({...formData, telefoneEmpresa: e.target.value})}
        width={"258px"}
        height={"25px"}
      />
      <ButtonWithArrow
        type="submit"
        width={"200px"}
        height={"30px"}
        margin={"30px"}
        children={toggleButton}
      ></ButtonWithArrow>
    </form>
  );
};

export default DadosEmpresa;
