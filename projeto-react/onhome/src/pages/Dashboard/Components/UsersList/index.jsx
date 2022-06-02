import React from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./style.css";
import EditModal from "../EditModal";
import DeleteModal from "../DeleteModal";
import { useEffect } from "react";

// Receber os cadastrados no banco de dados
const UsersList = () => {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [valueInputName, setValueInputName] = useState("");
  const [valueInputEmail, setValueInputEmail] = useState("");
  const [valueInputSenha, setValueInputSenha] = useState("");
  const [valueInputArea, setValueInputArea] = useState("");
  const [valueInputPermissao, setValueInputPermissao] = useState("");

  const [usuarios, setUsuarios] = useState(null);


  useEffect(()=> {
    fetch("http://localhost:8080/usuario/37")
   
    .then((res) => res.json())
    .then(
      (result) => {
        setUsuarios(result)
      },
      (error) => {
        console.error("error fetching data: ", error)
      }
    )
  }, []) ;

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
          <div className="registered-users">
            {usuarios && usuarios.map((post) => {
              const {
                idUsuario,
                nomeUsuario,
                emailUser,
                senhaUser,
                nomeEspecialidade,
                cargo,
              } = post
              return (
              <h2>{post.nomeUsuario}</h2>
              )
              })}
            {/* {JSON.stringify(usuarios)} */}
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
              <DeleteIcon
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setDeleteModal(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersList;
