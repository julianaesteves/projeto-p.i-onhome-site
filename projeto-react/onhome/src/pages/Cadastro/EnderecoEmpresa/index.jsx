import React from "react";
import Input from "../../../components/Input/index.jsx";
import "./style.css";
import { useState } from "react";
import ButtonWithArrow from "../../../components/ButtonWithArrow/index.jsx";

const EnderecoEmpresa = ({
  setFormData,
  formData,
  nextPage,
  backPage,
  page,
}) => {
  const [logradouroError, setLogradouroError] = useState(false);
  const [bairroError, setBairroError] = useState(false);
  const [numeroError, setNumeroError] = useState(false);
  const [cepError, setCepError] = useState(false);
  const [estadoError, setEstadoError] = useState(false);
  const [cidadeError, setCidadeError] = useState(false);

  function verify() {
    if (formData.logradouro == "") {
      setLogradouroError(true);
    } else {
      setLogradouroError(false);
    }

    if (formData.bairro == "") {
      setBairroError(true);
    } else {
      setBairroError(false);
    }
    if (formData.numero == "") {
      setNumeroError(true);
    } else {
      setNumeroError(false);
    }
    if (formData.cep.length != 8) {
      setCepError(true);
    } else {
      setCepError(false);
    }
    if (formData.estado == "") {
      setEstadoError(true);
    } else {
      setEstadoError(false);
    }
    if (formData.cidade == "") {
      setCidadeError(true);
    } else {
      setCidadeError(false);
    }
    if (
      formData.cidade != "" &&
      formData.estado != "" &&
      formData.cep.length == 8 &&
      formData.numero != "" &&
      formData.bairro != "" &&
      formData.logradouro != ""
    ) {
      nextPage();
    }
  }
  return (
    <div className="enderecoEmpresa--mainContainer">
      <label className="formulario--label">Logradouro</label>
      <Input
        name={"logradouro"}
        value={formData.logradouro}
        // onChange={
        //   ((e) => setFormData({ ...formData, logradouro: e.target.value }),
        //   setLogradouroError(false))
        // }
        onChange={({ target }) => {
          setFormData({ ...formData, logradouro: target.value });
          setLogradouroError(false);
        }}
        onBlur={() => {
          if (formData.logradouro == "") {
            setLogradouroError(true);
          }
        }}
        width={"90%"}
        height={"30px"}
        margin={"8px 0 5px 0"}
      />
      <div className="container__error">
        {logradouroError && <p>Por favor, preencha o logradouro</p>}
      </div>
      <label className="formulario--label">Bairro</label>
      <Input
        name={"bairro"}
        value={formData.bairro}
        // onChange={
        //   ((e) => setFormData({ ...formData, bairro: e.target.value }),
        //   setBairroError(false))
        // }
        onChange={({ target }) => {
          setFormData({ ...formData, bairro: target.value });
          setBairroError(false);
        }}
        onBlur={() => {
          if (formData.bairro == "") {
            setBairroError(true);
          }
        }}
        width={"90%"}
        height={"30px"}
        margin={"8px 0 5px 0"}
      />
      <div className="container__error">
        {bairroError && <p>Por favor, preencha o bairro</p>}
      </div>
      <div className="inline--inputs">
        <div>
          <label className="formulario--label">Número</label>
          <Input
            name={"numero"}
            value={formData.numero}
            // onChange={
            //   ((e) => setFormData({ ...formData, numero: e.target.value }),
            //   setNumeroError(false))
            // }
            onChange={({ target }) => {
              setFormData({ ...formData, numero: target.value });
              setNumeroError(false);
            }}
            onBlur={() => {
              if (formData.numero == "") {
                setNumeroError(true);
              }
            }}
            width={"100%"}
            height={"30px"}
            margin={"8px 0 5px 0"}
            type={"number"}
          />
          <div className="container__error">
            {numeroError && <p>Por favor, preencha o número</p>}
          </div>
        </div>
        <div>
          <label className="formulario--label">CEP</label>
          <Input
            name={"cep"}
            value={formData.cep}
            // onChange={
            //   ((e) => setFormData({ ...formData, cep: e.target.value }),
            //   setCepError(false))
            // }
            onChange={({ target }) => {
              setFormData({ ...formData, cep: target.value });
              setCepError(false);
            }}
            onBlur={() => {
              if (formData.cep == "") {
                setCepError(true);
              }
            }}
            width={"100%"}
            height={"30px"}
            margin={"8px 0 5px 0"}
            type={"number"}
          />
          <div className="container__error">
            {cepError && <p>Por favor, preencha o CEP</p>}
          </div>
        </div>
      </div>
      <label className="formulario--label">Complemento</label>
      <Input
        name={"complemento"}
        value={formData.complemento}
        onChange={(e) =>
          setFormData({ ...formData, complemento: e.target.value })
        }
        width={"90%"}
        height={"30px"}
        margin={"8px 0 40px 0"}
      />
      <div className="inline--inputs">
        <div>
          <label className="formulario--label">Estado</label>
          <Input
            name={"estado"}
            value={formData.estado}
            // onChange={
            //   ((e) => setFormData({ ...formData, estado: e.target.value }),
            //   setEstadoError(false))
            // }
            onChange={({ target }) => {
              setFormData({ ...formData, estado: target.value });
              setEstadoError(false);
            }}
            onBlur={() => {
              if (formData.estado == "") {
                setEstadoError(true);
              }
            }}
            width={"100%"}
            height={"30px"}
            margin={"8px 0 5px 0"}
          />
          <div className="container__error">
            {estadoError && <p>Por favor, preencha o estado</p>}
          </div>
        </div>
        <div>
          <label className="formulario--label">Cidade</label>
          <Input
            name={"cidade"}
            value={formData.cidade}
            // onChange={
            //   ((e) => setFormData({ ...formData, cidade: e.target.value }),
            //   setCidadeError(false))
            // }
            onChange={({ target }) => {
              setFormData({ ...formData, cidade: target.value });
              setCidadeError(false);
            }}
            onBlur={() => {
              if (formData.cidade == "") {
                setCidadeError(true);
              }
            }}
            width={"100%"}
            height={"30px"}
            margin={"8px 0 5px 0"}
          />
          <div className="container__error">
            {cidadeError && <p>Por favor, preencha a cidade</p>}
          </div>
        </div>
      </div>
      <div className="formulario--buttons">
        <button
          type="button"
          disabled={page == 0}
          onClick={backPage}
          style={{ fontSize: "12px", opacity: "60%", marginRight: "50px" }}
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
export default EnderecoEmpresa;
