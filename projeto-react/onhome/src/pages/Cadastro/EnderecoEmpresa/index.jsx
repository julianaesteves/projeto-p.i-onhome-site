import React from "react";
import Input from "../../../components/Input/index.jsx";
import "./style.css";

const EnderecoEmpresa = ({ setFormData, formData }) => {
  return (
    <div className="enderecoEmpresa--mainContainer">
      <label className="formulario--label">Logradouro</label>
      <Input
        value={formData.logradouro}
        onChange={(e) =>
          setFormData({ ...formData, logradouro: e.target.value })
        }
        width={"90%"}
        height={"30px"}
        margin={"8px 0 20px 0"}
      />
      <label className="formulario--label">Bairro</label>
      <Input
        value={formData.bairro}
        onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
        width={"90%"}
        height={"30px"}
        margin={"8px 0 20px 0"}
      />
      <div className="inline--inputs">
        <div>
          <label className="formulario--label">Número</label>
          <Input
            value={formData.numero}
            onChange={(e) =>
              setFormData({ ...formData, numero: e.target.value })
            }
            width={"100%"}
            height={"30px"}
            margin={"8px 0 20px 0"}
          />
        </div>
        <div>
          <label className="formulario--label">CEP</label>
          <Input
            value={formData.cep}
            onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
            width={"100%"}
            height={"30px"}
            margin={"8px 0 20px 0"}
          />
        </div>
      </div>
      <label className="formulario--label">Complemento</label>
      <Input
        value={formData.complemento}
        onChange={(e) =>
          setFormData({ ...formData, complemento: e.target.value })
        }
        width={"90%"}
        height={"30px"}
        margin={"8px 0 20px 0"}
      />
      <div className="inline--inputs">
        <div>
          <label className="formulario--label">Estado</label>
          <Input
            value={formData.estado}
            onChange={(e) =>
              setFormData({ ...formData, estado: e.target.value })
            }
            width={"100%"}
            height={"30px"}
            margin={"8px 0 20px 0"}
          />
        </div>
        <div>
          <label className="formulario--label">Cidade</label>
          <Input
            value={formData.cidade}
            onChange={(e) =>
              setFormData({ ...formData, cidade: e.target.value })
            }
            width={"100%"}
            height={"30px"}
            margin={"8px 0 20px 0"}
          />
        </div>
      </div>
    </div>
  );
};
export default EnderecoEmpresa;
