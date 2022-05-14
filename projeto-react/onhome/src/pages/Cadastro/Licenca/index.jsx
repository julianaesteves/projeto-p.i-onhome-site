import React from "react";
import { useState } from "react";
import Input from "../../../components/Input";
import LicencaCards from "./LicencaCards";
import "./style.css";
import ButtonWithArrow from "../../../components/ButtonWithArrow";

const Licenca = ({ setFormData, formData, nextPage }) => {
  const imgsLicenca = [
    {
      text: "Plano 1",
      urlImage:
        "./images/plano-1.png",
    },
    {
      text: "Plano 2",
      urlImage:
      "./images/plano-4.png",
    },
    {
      text: "Plano 3",
      urlImage:
      "./images/plano-2.png",
    },
    {
      text: "Plano personalizado",
      urlImage:
      "./images/plano-3-1.png",
    },
  ];

  const [opcaoError, setOpcaoError] = useState(false);
  const [periodoError, setPeriodoError] = useState(false);
  const [qtdMaquinasError, setQtdMaquinasError] = useState(false);

  function verify() {
    if (formData.opcoes == "") {
      setOpcaoError(true);
    } else {
      setOpcaoError(false);
    }
    if (formData.periodo == "") {
      setPeriodoError(true);
    } else {
      setPeriodoError(false);
    }
    if (formData.qtdMaquinas == "") {
      setQtdMaquinasError(true);
    } else {
      setQtdMaquinasError(false);
    }
    if (
      formData.opcoes != "" &&
      formData.periodo != ""&&
      formData.qtdMaquinas != ""
    ) {
      console.log("foi TUDO");
      nextPage();
    }
  }

  return (
    <div className="formulario--licencaContainer">
      <div className="planos--cards">
        {imgsLicenca.map((imgLicenca, index) => (
          <LicencaCards
            key={index}
            cardText={imgLicenca.text}
            imageUrl={imgLicenca.urlImage}
          />
        ))}
      </div>
      <div className="inputsContainer">
        <div className="licenca--selects">
          <select
            value={formData.opcoes}
            // onChange={
            //   ((e) => setFormData({ ...formData, opcoes: e.target.value }),
            //   setOpcaoError(false))
            // }
            onChange={({ target }) => {
              setFormData({ ...formData, opcoes: target.value });
              setOpcaoError(false);
            }}
            className="licenca--gradientSelect"
          >
            <option value={""}>Selecione...</option>
            <option value={1}>Opção 1</option>
            <option value={2}>Opção 2</option>
            <option value={3}>Opção 3</option>
          </select>
          <select
            value={formData.periodo}
            // onChange={
            //   ((e) => setFormData({ ...formData, periodo: e.target.value }),
            //   setPeriodoError(false))
            // }
            onChange={({ target }) => {
              setFormData({ ...formData, periodo: target.value });
              setPeriodoError(false);
            }}
            className="licenca--gradientSelect"
          >
            <option value={""}>Selecione...</option>
            <option value={1}>Anual</option>
            <option value={2}>Semestral</option>
            <option value={3}>Mensal</option>
            <option value={4}>Personalizada</option>
          </select>
          <Input
            placeholder={"Quantidade de máquinas"}
            value={formData.qtdMaquinas}
            width={190}
            margin={"0 0 0 10px"}
            // onChange={
            //   ((e) => setFormData({ ...formData, qtdMaquinas: e.target.value }),
            //   setQtdMaquinasError(false))
            // }
            onChange={({ target }) => {
              setFormData({ ...formData, qtdMaquinas: target.value });
              setQtdMaquinasError(false);
            }}
            onBlur={() => {
              if (formData.qtdMaquinas == "") {
                setQtdMaquinasError(true);
              }
            }}
          />
          <div className="container__error">
            {qtdMaquinasError && <p>Por favor, preencha a quantidade</p>}
          </div>
        </div>
      </div>
      <ButtonWithArrow
        type="submit"
        width={"200px"}
        height={"30px"}
        margin={"30px"}
        onClick={verify}
        children={"Finalizar"}
      ></ButtonWithArrow>
    </div>
  );
};

export default Licenca;
