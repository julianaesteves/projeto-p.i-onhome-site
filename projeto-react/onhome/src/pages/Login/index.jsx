import React from "react";
import { useState } from "react";
import Button from "../../components/Button";
import GradientText from "../../components/GradientText";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

import { formatarCpf } from '../../functions/formatter';
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const formatar = (e) => {
    e.target.value = formatarCpf(e.target.value);
  } 
  return (
    <div className="formulario--loginBackground">
      <div className="formulario--loginGradientBackground">
        <form className="formulario--containerLogin">
          <GradientText textAlign={"center"} title={"Seja bem-vindo(a)!"} />
          <label className="formulario--loginLabel">E-mail</label>
          <Input
          type="email"
            value={email}
            width={"90%"}
            height={"30px"}
            margin={"8px 0 20px 0"} 
            onChange={(e) => setEmail(e.target.value)}
            onInput={(e) => formatar(e)}
          />
          <label className="formulario--loginLabel">Senha</label>
          <Input
            type="password"
            value={senha}
            width={"90%"}
            height={"30px"}
            margin={"8px 0 20px 0"} 
            onChange={(e) => setSenha(e.target.value)}
          />
          <div className="formulario--loginButton">
          <Link to={"/dashboard"}>
            <Button
              type="submit"
              value={"Entrar"}
              width={"200px"}
              height={"40px"}
              margin={"30px"}
              borderRadius={50}
            />
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
