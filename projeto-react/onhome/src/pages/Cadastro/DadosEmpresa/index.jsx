import React from "react";
import Input from "../../../components/Input/index.jsx";
// pfv vai agr
const DadosEmpresa = () => {
  return (
    <div className="dadosEmpresa--mainContainer" >
      <label className="formulario--label" htmlFor="nome_fantasia">
        Nome Fantasia
      </label>
      <Input width={"537px"} height={"25px"} />
      <label className="formulario--label" htmlFor="cnpj">
        CNPJ
      </label>
      <Input width={"537px"} height={"25px"} />
      <label className="formulario--label" htmlFor="razao_social">
        Razão Social
      </label>
      <Input width={"537px"} height={"25px"} />
      <label className="formulario--label" htmlFor="email">
        E-mail
      </label>
      <Input width={"537px"} height={"25px"} />
      <label className="formulario--label" htmlFor="telefone">
        Telefone
      </label>
      <Input width={"258px"} height={"25px"} />
    </div>
  );
};

export default DadosEmpresa;
