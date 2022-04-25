import React from "react";
import Border from "../../../components/Border";
import Input from "../../../components/Input";
import LicencaCards from "./LicencaCards";
import "./style.css";

const Licenca = ({ setFormData, formData }) => {
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
            onChange={(e) =>
              setFormData({ ...formData, opcoes: e.target.value })
            }
            className="licenca--gradientSelect"
          >
            <option value={1}>Opção 1</option>
            <option value={2}>Opção 2</option>
            <option value={3}>Opção 3</option>
          </select>
          <select
            value={formData.periodo}
            onChange={(e) =>
              setFormData({ ...formData, periodo: e.target.value })
            }
            className="licenca--gradientSelect"
          >
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
            onChange={(e) =>
              setFormData({ ...formData, qtdMaquinas: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Licenca;
