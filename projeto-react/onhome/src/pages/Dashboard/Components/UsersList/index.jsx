import React from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./style.css";
import EditModal from "../EditModal";

// Receber os cadastrados no banco de dados
const UsersList = () => {
  const [modal, setModal] = useState(false);
  const [valueInputName, setValueInputName] = useState("");
  const [valueInputEmail, setValueInputEmail] = useState("");
  const [valueInputSenha, setValueInputSenha] = useState("");
  const [valueInputArea, setValueInputArea] = useState("");
  const [valueInputPermissao, setValueInputPermissao] = useState("");

  return (
    <>
      <EditModal
        setModal={setModal}
        modal={modal}
        valueInputName={valueInputName}
        valueInputEmail={valueInputEmail}
        valueInputSenha={valueInputSenha}
        valueInputArea={valueInputArea}
        valueInputPermissao={valueInputPermissao}
        setValueInputName={setValueInputName}
        setValueInputEmail={setValueInputEmail}
        setValueInputSenha={setValueInputSenha}
        setValueInputArea={setValueInputArea}
        setValueInputPermissao={setValueInputPermissao}
      />

      <div className="usuarios-gradient">
        <div className="border-gradient" style={{ padding: "20px" }}>
          <h2 className="cadastrados-title">Cadastrados</h2>
          <div className="registered-users">
            <p>Felipe Camara</p>
            <div className="mui-icons">
              <EditIcon
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setModal(true);
                  setValueInputName("Felipe Camara");
                  setValueInputEmail("felipe.camara@bandtec.com.br");
                  setValueInputSenha("admin@admin");
                  setValueInputArea("Front-end");
                  setValueInputPermissao("Administrador");
                }}
              />
              <DeleteIcon style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersList;
