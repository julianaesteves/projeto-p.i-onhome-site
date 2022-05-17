import Border from "../../../components/Border";
import GradientText from "../../../components/GradientText";
import EditIcon from "@mui/icons-material/Edit";
import Input from "../../../components/Input";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import "./style.css";
import Button from "../../../components/Button";

const Usuarios = () => {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userEmailError, setUserEmailError] = useState(false);
  const [permission, setPermission] = useState("");
  const [permissionError, setPermissionError] = useState(false);
  const [area, setArea] = useState("");
  const [areaError, setAreaError] = useState(false);
  const [senha, setSenha] = useState("");
  const [senhaError, setSenhaError] = useState(false);

  function verify() {
    if (userName == "") {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }
    if (userEmail == "") {
      setUserEmailError(true);
    } else {
      setUserEmailError(false);
    }
    if (senha == "") {
      setSenhaError(true);
    } else {
      setSenhaError(false);
    }
    if (permission == "") {
      setPermissionError(true);
    } else {
      setPermissionError(false);
    }
    if (area == "") {
      setAreaError(true);
    } else {
      setAreaError(false);
    }
    if (
      userName != "" &&
      userEmail != "" &&
      senha > 7 &&
      area != "" &&
      permission != ""
    ) {
      console.log("Usuário cadastrado com sucesso!");
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    verify();
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
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
                setUserNameError(false);
              }}
              onBlur={() => {
                if (userName == "") {
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
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
                setUserEmailError(false);
              }}
              onBlur={() => {
                if (userEmail == "") {
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
              onChange={(e) => {
                setSenha(e.target.value);
                setSenhaError(false);
              }}
              onBlur={() => {
                if (senha == "") {
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
              value={permission}
              onChange={(e) => {
                setPermission(e.target.value);
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
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
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
          <div className="usuarios-gradient">
            <div className="border-gradient" style={{ padding: "20px" }}>
              <h2 className="cadastrados-title">Cadastrados</h2>
              <div className="registered-users">
                <p>Felipe Camara</p>
                <div className="mui-icons">
                  <EditIcon style={{ cursor: "pointer" }} />
                  <DeleteIcon style={{ cursor: "pointer" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Border>
    </div>
  );
};

export default Usuarios;
