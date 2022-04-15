import React from "react";
import Button from "../../components/Button";
import GradientText from "../../components/GradientText";
import Input from "../../components/Input";
import "./style.css";

const Login = () => {
  return (
    <div className="formulario--loginBackground">
      <GradientText title={"Seja bem-vindo(a)!"} />
      <label className="formulario--loginLabel" htmlFor="">E-mail</label>
      <Input height={"25px"} width={"537px"} />
      <label className="formulario--loginLabel" htmlFor="">Senha</label>
      <Input height={"25px"} width={"537px"} />
      <Button>Entrar</Button>
    </div>
  );
};

export default Login;
