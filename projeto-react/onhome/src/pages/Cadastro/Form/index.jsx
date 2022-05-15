import { useState } from "react";
import React from "react";
import "./style.css";
import EnderecoEmpresa from "../EnderecoEmpresa/index";
import Licenca from "../Licenca/index";
import DadosEmpresa from "../DadosEmpresa/index";
import GradientText from "../../../components/GradientText/index";
import MenuCadastro from "../MenuCadastro/index";

const Form = () => {
  const [page, setPage] = useState(0);
  const FormTitles = ["Dados da empresa", "Endereço", "Escolha sua licença"];

  const [formData, setFormData] = useState({
    nomeFantasia: "",
    cnpj: "",
    razaoSocial: "",
    emailEmpresa: "",
    telefoneEmpresa: "",
    logradouro: "",
    bairro: "",
    numero: "",
    cep: "",
    complemento: "",
    estado: "",
    cidade: "",
    opcoes: "",
    periodo: "",
    qtdMaquinas: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <DadosEmpresa
          formData={formData}
          setFormData={setFormData}
          nextPage={nextPage}
          backPage={backPage}
          page={page}
        />
      );
    } else if (page === 1) {
      return (
        <EnderecoEmpresa
          formData={formData}
          setFormData={setFormData}
          nextPage={nextPage}
          backPage={backPage}
          page={page}
        />
      );
    } else {
      return (
        <Licenca
          formData={formData}
          setFormData={setFormData}
          nextPage={nextPage}
          backPage={backPage}
          page={page}
        />
      );
    }
  };

  function backPage() {
    setPage((currPage) => currPage - 1);
  }

  function nextPage() {
    if (page == FormTitles.length - 1) {
      console.log("Formulário enviado com sucesso!");
      console.log(formData);
    } else {
      setPage((currPage) => currPage + 1);
    }
  }

  // const toggleButton = page == FormTitles.length - 1 ? "Finalizar" : "Próximo";

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="formulario--background">
      <div className="formulario--gradientBackground">
        {/* <MenuCadastro /> */}
        <div className="formulario--mainContainer">
          <div className="formulario--gradientTitle">
            <GradientText title={FormTitles[page]} />
          </div>
          <form className="formulario--body" onSubmit={onSubmit}>
            {PageDisplay()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
