import { useState } from "react";
import React from "react";
import "./style.css";
import EnderecoEmpresa from "../EnderecoEmpresa/index";
import Licenca from "../Licenca/index";
import DadosEmpresa from "../DadosEmpresa/index";
import GradientText from "../../../components/GradientText/index";
import ButtonWithArrow from "../../../components/ButtonWithArrow/index.jsx";
import MenuCadastro from "../MenuCadastro/index";

const Form = () => {
  const [page, setPage] = useState(0);

  // Array de títulos
  const FormTitles = ["Dados da empresa", "Endereço", "Escolha sua licença"];

  // Objeto de campos do formulário onde serão armazenados os novos valores digitados
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
    opcoes: 1,
    periodo: 1,
    qtdMaquinas: "",
  });

  // Função que renderiza o componente do formulário a ser exibido
  const PageDisplay = () => {
    if (page === 0) {
      return <DadosEmpresa formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <EnderecoEmpresa formData={formData} setFormData={setFormData} />;
    } else {
      return <Licenca formData={formData} setFormData={setFormData} />;
    }
  };

  // Função responsável por voltar para o componente anterior
  function backPage() {
    setPage((currPage) => currPage - 1);
  }

  // Função responsável por avançar o formulário
  function nextPage() {
    if (page == FormTitles.length - 1) {
      // condição para enviar o formulario para a API se estivermos na ultima pagina
      console.log("Formulário enviado com sucesso!");
      console.log(formData);
    } else {
      setPage((currPage) => currPage + 1);
    }
  }

  // Função que altera o texto do botão para "Finalizar" caso estiver na última página
  const toggleButton = page == FormTitles.length - 1 ? "Finalizar" : "Próximo";

  const onSubmit = (e) => {
    e.preventDefault();
    nextPage();
  };

  return (
    <div className="formulario--background">
      <div className="formulario--gradientBackground">
        {/* <MenuCadastro /> */}
        <div className="formulario--mainContainer">
          <div className="formulario--gradientTitle">
            <GradientText title={FormTitles[page]} textAlign="center" />
          </div>
          <form className="formulario--body" onSubmit={onSubmit}>
            {PageDisplay()}
            <div className="formulario--buttons">
              <button type="button" disabled={page == 0} onClick={backPage} style={{fontSize: "12px", opacity: "60%"}}>
                Voltar
              </button>
              <ButtonWithArrow
                type="submit"
                style={{ width: "140px", height: "30px", marginLeft: "20px"}}
                children={toggleButton}
              ></ButtonWithArrow>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
