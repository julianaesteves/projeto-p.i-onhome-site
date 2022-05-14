import React, { useState } from "react";
import Input from "../../../components/Input/index.jsx";
import "./style.css";
import ButtonWithArrow from "../../../components/ButtonWithArrow/index.jsx";
const DadosEmpresa = ({ setFormData, formData, nextPage }) => {
  const [nomeFantasiaError, setNomeFantasiaError] = useState(false);
  const [cnpjError, setCNPJError] = useState(false);
  const [razaoSocialError, setRazaoSocialError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [telefoneError, setTelefoneError] = useState(false);

  function verify() {
    if (formData.nomeFantasia == "") {
      setNomeFantasiaError(true);
    } else {
      setNomeFantasiaError(false);
    }
    if (formData.cnpj.length != 15) {
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
    if (formData.telefoneEmpresa.length != 10) {
      setTelefoneError(true);
    } else {
      setTelefoneError(false);
    }
    if (
      formData.nomeFantasia != "" &&
      formData.cnpj != "" &&
      formData.razaoSocial != ""&&
      formData.emailEmpresa != "" &&
      formData.telefoneEmpresa != ""
    ) {
      console.log("foi?");
      nextPage();

    }
  }
  return (
    <div className="dadosEmpresa--mainContainer">
      <div className="dadosEmpresa-innerContainer">
        <label className="formulario--label">Nome Fantasia</label>
        <Input
          value={formData.nomeFantasia}
          // onChange={(e) =>
          //   setFormData({ ...formData, nomeFantasia: e.target.value }),
          //   setNomeFantasiaError(false)
          // }
          onChange={({ target }) => {
            setFormData({ ...formData, nomeFantasia: target.value });
            setNomeFantasiaError(false);
          }}
          onBlur={() => {
            if (formData.nomeFantasia == "") {
              setNomeFantasiaError(true);
            }
          }}
          width={"90%"}
          height={"30px"}
          margin={"8px 0 20px 0"}
        />
        <div className="container__error">
          {nomeFantasiaError && <p>Por favor, preencha o nome fantasia</p>}
        </div>
        <label className="formulario--label">CNPJ</label>
        <Input
          value={formData.cnpj}
          // onChange={(e) =>
          //   setFormData({ ...formData, cnpj: e.target.value }),
          //   setCNPJError(false)
          // }
          onChange={({ target }) => {
            setFormData({ ...formData, cnpj: target.value });
            setCNPJError(false);
          }}
          onBlur={() => {
            if (formData.cnpj == "") {
              setCNPJError(true);
            }
          }}
          width={"90%"}
          height={"30px"}
          margin={"8px 0 20px 0"}
        />
        <div className="container__error">
          {cnpjError && <p>Por favor, preencha o cnpj</p>}
        </div>
        <label className="formulario--label">Razão Social</label>
        <Input
          value={formData.razaoSocial}
          // onChange={(e) =>
          //   setFormData({ ...formData, razaoSocial: e.target.value }),
          //   setRazaoSocialError(false)
          // }
          onChange={({ target }) => {
            setFormData({ ...formData, razaoSocial: target.value });
            setRazaoSocialError(false);
          }}
          onBlur={() => {
            if (formData.razaoSocial == "") {
              setRazaoSocialError(true);
            }
          }}
          width={"90%"}
          height={"30px"}
          margin={"8px 0 20px 0"}
        />
        <div className="container__error">
          {razaoSocialError && <p>Por favor, preencha a razao social</p>}
        </div>
        <label className="formulario--label">E-mail</label>
        <Input
          type="email"
          value={formData.emailEmpresa}
          // onChange={(e) =>
          //   setFormData({ ...formData, emailEmpresa: e.target.value }),
          //   setEmailError(false)
          // }
          onChange={({ target }) => {
            setFormData({ ...formData, emailEmpresa: target.value });
            setEmailError(false);
          }}
          onBlur={() => {
            if (formData.emailEmpresa == "") {
              setEmailError(true);
            }
          }}
          width={"90%"}
          height={"30px"}
          margin={"8px 0 20px 0"}
        />
        <div className="container__error">
          {emailError && <p>Por favor, preencha o email</p>}
        </div>
        <label className="formulario--label">Telefone</label>
        <Input
          value={formData.telefoneEmpresa}
          // onChange={(e) =>
          //   setFormData({ ...formData, telefoneEmpresa: e.target.value }),
          //   setTelefoneError(false)
          // }
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
          margin={"8px 0 20px 0"}
        />
        <div className="container__error">
          {telefoneError && <p>Por favor, preencha o telefone</p>}
        </div>

      </div>
      <ButtonWithArrow
        width={"200px"}
        height={"30px"}
        margin={"30px"}
        onClick={verify}
        children={"Próximo"}
      ></ButtonWithArrow>
    </div>
  );
};

export default DadosEmpresa;
