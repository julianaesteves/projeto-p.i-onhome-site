import React from "react";
import { useState } from "react";
import Input from "../../../components/Input";
import LicencaCards from "./LicencaCards";
import "./style.css";
import ButtonWithArrow from "../../../components/ButtonWithArrow";

const Licenca = ({ setFormData, formData, nextPage, backPage, page }) => {
  const imgsLicenca = [
    {
      text: "Plano 1",
      urlImage: "./images/plano-1.png",
    },
    {
      text: "Plano 2",
      urlImage: "./images/plano-4.png",
    },
    {
      text: "Plano 3",
      urlImage: "./images/plano-2.png",
    },
    {
      text: "Plano personalizado",
      urlImage: "./images/plano-3-1.png",
    },
  ];

  const [opcaoError, setOpcaoError] = useState(false);
  const [periodoError, setPeriodoError] = useState(false);
  const [qtdComputadoresError, setqtdComputadoresError] = useState(false);

  function verify() {
    if (formData.plano == "") {
      setOpcaoError(true);
    } else {
      setOpcaoError(false);
    }
    if (formData.periodo == "") {
      setPeriodoError(true);
    } else {
      setPeriodoError(false);
    }
    if (formData.qtdComputadores == "") {
      setqtdComputadoresError(true);
    } else {
      setqtdComputadoresError(false);
    }
    if (
      formData.plano != "" &&
      formData.periodo != "" &&
      formData.qtdComputadores != ""
    ) {
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
          <div>
            <select
              name="plano"
              value={formData.plano}
              // onChange={
              //   ((e) => setFormData({ ...formData, plano: e.target.value }),
              //   setOpcaoError(false))
              // }
              onChange={({ target }) => {
                setFormData({ ...formData, plano: target.value });
                setOpcaoError(false);
              }}
              className="licenca--gradientSelect"
            >
              <option value={""}>Selecione...</option>
              <option value={1}>Plano 1</option>
              <option value={2}>Plano 2</option>
              <option value={3}>Plano 3</option>
            </select>
            <div className="container__error">
              {opcaoError && <p>Selecione uma opção</p>}
            </div>
          </div>
          <div>
            <select
              name="periodo"
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
              <option value={"anual"}>Anual</option>
              <option value={"semestral"}>Semestral</option>
              <option value={"mensal"}>Mensal</option>
            </select>
            <div className="container__error">
              {periodoError && <p>Escolha o período</p>}
            </div>
          </div>
          <div className="input--maquinas">
            <Input
              type={"number"}
              name={"qtdComputadores"}
              placeholder={"Quantidade de máquinas"}
              value={formData.qtdComputadores}
              width={190}
              margin={"10px 0 10px 10px"}
              // onChange={
              //   ((e) => setFormData({ ...formData, qtdComputadores: e.target.value }),
              //   setqtdComputadoresError(false))
              // }
              onChange={({ target }) => {
                setFormData({ ...formData, qtdComputadores: target.value });
                setqtdComputadoresError(false);
              }}
              onBlur={() => {
                if (formData.qtdComputadores == "") {
                  setqtdComputadoresError(true);
                }
              }}
            />
            <div className="container__error">
              {qtdComputadoresError && <p>Por favor, preencha a quantidade</p>}
            </div>
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
          type="submit"
          width={"200px"}
          height={"30px"}
          margin={"30px"}
          onClick={verify}
          children={"Finalizar"}
        ></ButtonWithArrow>
      </div>
    </div>
  );
};

export default Licenca;
