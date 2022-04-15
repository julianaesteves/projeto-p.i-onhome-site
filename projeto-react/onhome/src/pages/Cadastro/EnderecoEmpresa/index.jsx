import React from "react";
import Input from "../../../components/Input/index.jsx";
// pfv vai agr
const EnderecoEmpresa = (formData, setFormData) => {
  return (
    <div className="enderecoEmpresa--mainContainer">
      <label className="formulario--label" htmlFor="logradouro">
        Logradouro
      </label>
      <Input
        value={formData.logradouro}
        // onChange={() => setFormData({...formData, logradouro: e.target.value})}
        width={"537px"}
        height={"25px"}
      />
      <label className="formulario--label" htmlFor="bairro">
        Bairro
      </label>
      <Input width={"537px"} height={"25px"} />
      <label className="formulario--label" htmlFor="numero">
        Número
      </label>
      <Input width={"243px"} height={"25px"} />
      <label className="formulario--label" htmlFor="cep" >
        CEP
      </label>
      <Input width={"243px"} height={"25px"} />
      <label className="formulario--label" htmlFor="complemento">
        Complemento
      </label>
      <Input width={"537px"} height={"25px"} />
      <label className="formulario--label" htmlFor="estado">
        Estado
      </label>
      <Input width={"243px"} height={"25px"} />
      <label className="formulario--label" htmlFor="cidade">
        Cidade
      </label>
      <Input width={"243px"} height={"25px"} />
    </div>
  );
};
export default EnderecoEmpresa;
