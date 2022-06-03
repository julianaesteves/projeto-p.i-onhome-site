import { useState } from "react";
import React from "react";
import EnderecoEmpresa from "../EnderecoEmpresa/index";
import Licenca from "../Licenca/index";
import DadosEmpresa from "../DadosEmpresa/index";
import GradientText from "../../../components/GradientText/index";
import sendForm from "../../../services/sendForm"
import { tirarMascara } from "../../../functions/formatter";
import { useAuth } from "../../../context/Auth";
import { useNavigate } from "react-router-dom";

import "./style.css";

const Form = () => {
  const [page, setPage] = useState(0);
  const FormTitles = ["Dados da empresa", "Endereço", "Escolha sua licença"];

  const { userInfo } = useAuth()
  const navigate = useNavigate()

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
    plano: "",
    periodo: "",
    qtdComputadores: "",
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
    if (page === FormTitles.length - 1) {
      formData.cnpj = tirarMascara(formData.cnpj);
      formData.telefoneEmpresa = tirarMascara(formData.telefoneEmpresa);
      formData.cep = tirarMascara(formData.cep);
      
      // Colocar loading de transição
      navigate("/dashboard")

      sendForm(formData, userInfo.idUsuario);
      console.log("Formulário enviado com sucesso!");
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
