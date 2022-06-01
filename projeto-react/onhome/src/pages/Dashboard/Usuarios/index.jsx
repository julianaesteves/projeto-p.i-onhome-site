import { useState } from "react";
import Border from "../../../components/Border";
import GradientText from "../../../components/GradientText";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import sendUser from "../../../services/sendUser";
import UsersList from "../Components/UsersList";
import "./style.css";

const Usuarios = () => {
  const [userNameError, setUserNameError] = useState(false);
  const [userEmailError, setUserEmailError] = useState(false);
  const [permissionError, setPermissionError] = useState(false);
  const [areaError, setAreaError] = useState(false);
  const [senhaError, setSenhaError] = useState(false);

  const [usuarios, setUsuarios] = useState({
    userName: "",
    userEmail: "",
    permission: "",
    area: "",
    senha: "",
  });

  function verify() {
    if (usuarios.userName == "") {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }
    if (usuarios.userEmail == "") {
      setUserEmailError(true);
    } else {
      setUserEmailError(false);
    }
    if (usuarios.senha.length < 8) {
      setSenhaError(true);
    } else {
      setSenhaError(false);
    }
    if (usuarios.permission == "") {
      setPermissionError(true);
    } else {
      setPermissionError(false);
    }
    if (usuarios.area == "") {
      setAreaError(true);
    } else {
      setAreaError(false);
    }
    if (
      usuarios.userName != "" &&
      usuarios.userEmail != "" &&
      usuarios.senha.length >= 8 &&
      usuarios.area != "" &&
      usuarios.permission != ""
    ) {
      console.log("Usuário cadastrado com sucesso!");
      console.log(usuarios);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    verify();
    sendUser(usuarios);
  };

  return (
    <div className="right-content">
      <div className="title">
        <GradientText
          title={"Cadastro de Usuários"}
          textAlign="left"
          fontSizeTitle={35}
        />
      </div>
      <Border padding={"20px"}>
        <div className="div-cadastro-usuarios">
          <form action="#" className="div-inputs">
            <label className="label-title-form">Nome:</label>
            <Input
              type={"text"}
              name={"nome"}
              value={usuarios.userName}
              onChange={({ target }) => {
                setUsuarios({ ...usuarios, userName: target.value });
                setUserNameError(false);
              }}
              onBlur={() => {
                if (usuarios.userName == "") {
                  setUserNameError(true);
                }
              }}
            />
            <div className="container__error">
              {userNameError && <p>Por favor, preencha o nome</p>}
            </div>
            <label className="label-title-form">E-mail:</label>
            <Input
              type={"email"}
              name={"email"}
              value={usuarios.userEmail}
              onChange={({ target }) => {
                setUsuarios({ ...usuarios, userEmail: target.value });
                setUserEmailError(false);
              }}
              onBlur={() => {
                if (usuarios.userEmail == "") {
                  setUserEmailError(true);
                }
              }}
            />
            <div className="container__error">
              {userEmailError && <p>Por favor, preencha o email</p>}
            </div>
            <label className="label-title-form">Senha:</label>
            <Input
              type={"password"}
              name={"senha"}
              value={usuarios.senha}
              onChange={({ target }) => {
                setUsuarios({ ...usuarios, senha: target.value });

                setSenhaError(false);
              }}
              onBlur={() => {
                if (usuarios.senha == "") {
                  setSenhaError(true);
                }
              }}
            />
            <div className="container__error">
              {senhaError && <p>A senha deve ter pelo menos 8 caracteres</p>}
            </div>

            <label className="label-title-form">Permissão:</label>
            <select
              name=""
              id=""
              className="cadastro--gradientSelect"
              value={usuarios.permission}
              onChange={({ target }) => {
                setUsuarios({ ...usuarios, permission: target.value });
                setPermissionError(false);
              }}
            >
              <option value="" selected disabled>
                Escolha uma permissão...
              </option>
              <option value="user">Usuário</option>
              <option value="admin">Administrador</option>
            </select>
            <div className="container__error">
              {permissionError && <p>Por favor, selecione uma permissão</p>}
            </div>
            <label className="label-title-form">Área: </label>
            <select
              name=""
              id=""
              className="cadastro--gradientSelect"
              value={usuarios.area}
              onChange={({ target }) => {
                setUsuarios({ ...usuarios, area: target.value });
                setAreaError(false);
              }}
            >
              <option value="" selected disabled>
                Escolha uma área...
              </option>
              <option value="front">Front-End</option>
              <option value="back">Back-End</option>
              <option value="devops">DevOps</option>
            </select>
            <div className="container__error">
              {areaError && <p>Por favor, escolha uma área</p>}
            </div>
            <div className="right-content-button">
              <Button
                type={"submit"}
                value={"Cadastrar"}
                width={"150px"}
                borderRadius={"40px"}
                onClick={onSubmit}
              />
            </div>
          </form>
          <UsersList />
        </div>
      </Border>
    </div>
  );
};

export default Usuarios;
