import React from "react";
import Input from "../../../components/Input";

const Licenca = ({ setFormData, formData }) => {

  return (
    <div className="formulario--licencaContainer">
      <select
        value={formData.opcoes}
        onChange={(e) => setFormData({...formData, opcoes: e.target.value})}
        className="formulario--gradientSelect"
      >
        <option value={1}>Opção 1</option>
        <option value={2}>Opção 2</option>
        <option value={3}>Opção 3</option>
      </select>
      <select
        value={formData.periodo}
        onChange={(e) => setFormData({...formData, periodo: e.target.value})}
        className="formulario--gradientSelect"
      >
        <option value={1}>Anual</option>
        <option value={2}>Semestral</option>
        <option value={3}>Mensal</option>
      </select>
      <br />
      <br />
      <label className="formulario--label">
        Quantidade de máquinas
      </label>
      <Input
        value={formData.qtdMaquinas}
        onChange={(e) => setFormData({...formData, qtdMaquinas: e.target.value})}
      />
    </div>
  );
};

export default Licenca;
