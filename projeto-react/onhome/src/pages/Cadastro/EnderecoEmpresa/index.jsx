import React from "react";
import { useState } from "react"; 
import ButtonWithArrow from "../../../components/ButtonWithArrow/index.jsx";
import Input from "../../../components/Input/index.jsx";

const EnderecoEmpresa = ({ nextPage, backPage, toggleButton, onSubmit, setFormData, formData }) => {

  return (
    <form className="enderecoEmpresa--mainContainer" onSubmit={onSubmit}>
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
      <button onClick={backPage}>
        Voltar
      </button>
      <ButtonWithArrow
        type="submit"
        width={"200px"}
        height={"30px"}
        margin={"30px"}
        value={toggleButton}
      ></ButtonWithArrow>
      
    </form>
  );
};
export default EnderecoEmpresa;
