import React from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./style.css";
import EditModal from "../EditModal";
import DeleteModal from "../DeleteModal";
import { useEffect } from "react";

const UsersList = () => {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [valueInputName, setValueInputName] = useState("");
  const [valueInputEmail, setValueInputEmail] = useState("");
  const [valueInputSenha, setValueInputSenha] = useState("");
  const [valueInputArea, setValueInputArea] = useState("");
  const [valueInputPermissao, setValueInputPermissao] = useState("");

  const [usuarios, setUsuarios] = useState();

  useEffect(() => {
    async function getUserInfo() {

      const data = await fetch("https://onhome-api-v1.herokuapp.com//usuario/37");
      const [json] = await data.json();
      setUsuarios(json);
    }
    getUserInfo();
  }, []);

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

      <DeleteModal setDeleteModal={setDeleteModal} deleteModal={deleteModal} />

      <div className="usuarios-gradient">
        <div className="border-gradient" style={{ padding: "20px" }}>
          <h2 className="cadastrados-title">Cadastrados</h2>

          {usuarios?.map((usuario) => 
            (
              <div className="registered-users">
                {usuario.nomeUsuario}
                <div className="mui-icons">
                  <EditIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setModal(true);
                      setValueInputName(`${usuario.nomeUsuario}`);
                      setValueInputEmail(`${usuario.emailUser}`);
                      setValueInputSenha(`${usuario.senhaUser}`);
                      setValueInputArea(`${usuario.nomeEspecialidade}`);
                      setValueInputPermissao(`${usuario.cargo}`);
                    }}
                  />
                  <DeleteIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setDeleteModal(true);
                    }}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default UsersList;
