import React from "react";
import { useState } from "react";
import Button from "../../components/Button";
import GradientText from "../../components/GradientText";
import Input from "../../components/Input";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="formulario--background">
      <div className="formulario--loginGradientBackground">
        <form className="formulario--containerLogin">
          <GradientText title={"Seja bem-vindo(a)!"} />
          <label className="formulario--loginLabel">E-mail</label>
          <Input
          type="email"
            value={email}
            height={"25px"}
            width={"537px"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="formulario--loginLabel">Senha</label>
          <Input
            type="password"
            value={senha}
            height={"25px"}
            width={"537px"}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button
            type="submit"
            value={"Entrar"}
            width={"200px"}
            height={"30px"}
            margin={"30px"}
          ></Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
