import React from "react";
import Border from "../../../components/Border";
import Input from "../../../components/Input";
import LicencaCards from "./LicencaCards";
import "./style.css"

const Licenca = ({ setFormData, formData }) => {


  return (
    <div className="formulario--licencaContainer">
      <div className="planos--cards">
        <LicencaCards cardText={"Plano 1"}/>
        <LicencaCards cardText={"Plano 2"}/>
        <LicencaCards cardText={"Plano 3"}/>
        <LicencaCards cardText={"Plano personalizado"}/>
      </div>

      <div className="licenca--selects">
      <select
        value={formData.opcoes}
        onChange={(e) => setFormData({...formData, opcoes: e.target.value})}
        className="licenca--gradientSelect"
      >
        <option value={1}>Opção 1</option>
        <option value={2}>Opção 2</option>
        <option value={3}>Opção 3</option>
      </select>
      <select
        value={formData.periodo}
        onChange={(e) => setFormData({...formData, periodo: e.target.value})}
        className="licenca--gradientSelect"
      >
        <option value={1}>Anual</option>
        <option value={2}>Semestral</option>
        <option value={3}>Mensal</option>
        <option value={4}>Personalizada</option>
      </select>
      </div>
      <label className="formulario--label">
        Quantidade de máquinas
      </label>
      <Input
        value={formData.qtdMaquinas}
        width={50}
        margin={"8px 0 20px 0"}
        onChange={(e) => setFormData({...formData, qtdMaquinas: e.target.value})}
      />
      </div>
  );
};

export default Licenca;
