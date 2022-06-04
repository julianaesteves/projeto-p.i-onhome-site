import React, { useState } from "react";
import Input from "../../../components/Input/index.jsx";
import "./style.css";
import ButtonWithArrow from "../../../components/ButtonWithArrow/index.jsx";
import { formatarCNPJ, formatarTelefone, tirarMascara } from "../../../functions/formatter.js";

const DadosEmpresa = ({ setFormData, formData, nextPage, backPage, page }) => {
  const [nomeFantasiaError, setNomeFantasiaError] = useState(false);
  const [cnpjError, setCNPJError] = useState(false);
  const [razaoSocialError, setRazaoSocialError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [telefoneError, setTelefoneError] = useState(false);

  // console.log(formData.telefoneEmpresa.length)
  // console.log(formData.cnpj.length)


  function verify() {
    if (formData.nomeFantasia == "") {
      setNomeFantasiaError(true);
    } else {
      setNomeFantasiaError(false);
    }
    if (formData.cnpj.length != 18) {
      setCNPJError(true);
    } else {
      setCNPJError(false);
    }
    if (formData.razaoSocial == "") {
      setRazaoSocialError(true);
    } else {
      setRazaoSocialError(false);
    }
    if (formData.emailEmpresa == "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (
      formData.telefoneEmpresa.length != 14 ||
      formData.telefoneEmpresa.length != 15
    ) {
      setTelefoneError(true);
    } else {
      setTelefoneError(false);
    }
    if (
      formData.nomeFantasia != "" &&
      formData.cnpj.length == 18 &&
      formData.razaoSocial != "" &&
      formData.emailEmpresa != "" &&
      (
        formData.telefoneEmpresa.length == 14 ||
        formData.telefoneEmpresa.length == 15
      )
      ) {
      nextPage();
    }
  }
  return (
    <div className="dadosEmpresa--mainContainer">
      <div className="dadosEmpresa-innerContainer">
        <label className="formulario--label">Nome Fantasia</label>
        <Input
          name={"nomeFantasia"}
          value={formData.nomeFantasia}
          onChange={({ target }) => {
            setFormData({ ...formData, nomeFantasia: target.value });
            setNomeFantasiaError(false);
          }}
          onBlur={() => {
            if (formData.nomeFantasia == "") {
              setNomeFantasiaError(true);
            }
          }}
          width={"100%"}
          height={"30px"}
          margin={"8px 0 5px 0"}
        />
        <div className="container__error">
          {nomeFantasiaError && <p>Por favor, preencha o nome fantasia</p>}
        </div>
        <label className="formulario--label">CNPJ</label>

        <Input
          name={"cnpj"}
          value={formData.cnpj}
          onChange={({ target }) => {
            setFormData({ ...formData, cnpj: target.value });
            setCNPJError(false);
          }}
          onBlur={() => {
            if (formData.cnpj == "") {
              setCNPJError(true);
            }
          }}
          width={"100%"}
          height={"30px"}
          margin={"8px 0 5px 0"}
          onInput={(e) => e.target.value = formatarCNPJ(e.target.value)}
          />
        <div className="container__error">
          {cnpjError && <p>O CNPJ deve ter 14 caracteres</p>}
        </div>
        <label className="formulario--label">Razão Social</label>
        <Input
          name={"razaoSocial"}
          value={formData.razaoSocial}
          onChange={({ target }) => {
            setFormData({ ...formData, razaoSocial: target.value });
            setRazaoSocialError(false);
          }}
          onBlur={() => {
            if (formData.razaoSocial == "") {
              setRazaoSocialError(true);
            }
          }}
          width={"100%"}
          height={"30px"}
          margin={"8px 0 5px 0"}
        />
        <div className="container__error">
          {razaoSocialError && <p>Por favor, preencha a razão social</p>}
        </div>
        <label className="formulario--label">E-mail</label>
        <Input
          name={"emailEmpresa"}
          type="email"
          value={formData.emailEmpresa}
          onChange={({ target }) => {
            setFormData({ ...formData, emailEmpresa: target.value });
            setEmailError(false);
          }}
          onBlur={() => {
            if (formData.emailEmpresa == "") {
              setEmailError(true);
            }
          }}
          width={"100%"}
          height={"30px"}
          margin={"8px 0 5px 0"}
        />
        <div className="container__error">
          {emailError && <p>Por favor, preencha o e-mail</p>}
        </div>
        <label className="formulario--label">Telefone</label>
        <Input
          name={"telefoneEmpresa"}
          value={formData.telefoneEmpresa}
          onChange={({ target }) => {
            setFormData({ ...formData, telefoneEmpresa: target.value });
            setTelefoneError(false);
          }}
          onBlur={() => {
            if (formData.telefoneEmpresa == "") {
              setTelefoneError(true);
            }
          }}
          width={"30%"}
          height={"30px"}
          margin={"8px 0 5px 0"}
          onInput={(e) => e.target.value = formatarTelefone(e.target.value)}

        />
        <div className="container__error">
          {telefoneError && <p>Por favor, preencha o telefone com o DDD</p>}
        </div>
      </div>
      <div className="formulario--buttons">
      <button className="botao--voltar"
          type="button"
          disabled={page == 0}
          onClick={backPage}
          style={{ fontSize: "12px", opacity: "60%" }}
        >
          Voltar
        </button>
        <ButtonWithArrow
          width={"200px"}
          height={"30px"}
          onClick={verify}
          children={"Próximo"}
        ></ButtonWithArrow>
      </div>
    </div>
  );
};

export default DadosEmpresa;
