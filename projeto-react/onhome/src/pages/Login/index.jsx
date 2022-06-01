import React from "react";
import { useState } from "react";
import Button from "../../components/Button";
import GradientText from "../../components/GradientText";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";

import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [senha, setSenha] = useState("");
  const [senhaError, setSenhaError] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault()

    const results = await fetch('http://localhost:8080/login', {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        email,
        senha
      },
    })
    
    const userData = await results.json()
    
    if (userData.message) {
      console.log("Credenciais inválidas")
    } else { 
      // TODO: setar informaçoes no session storage e criar um hook de autenticação
      console.log(userData[0])
      navigate('/formulario')
    }
  }


  return (
    <div className="formulario--loginBackground">
      <div className="formulario--loginGradientBackground">
        <form className="formulario--containerLogin">
          <GradientText title={"Seja bem-vindo(a)!"} />
          <label className="formulario--loginLabel">E-mail</label>
          <Input
            type="email"
            value={email}
            width={"90%"}
            height={"30px"}
            margin={"8px 0 5px 0"}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            onBlur={() => {
              if (email == "") {
                setEmailError(true);
              }
            }}
          />
          <div className="container__error">
            {emailError && <p>Por favor, preencha o email</p>}
          </div>
          <label className="formulario--loginLabel">Senha</label>
          <Input
            type="password"
            value={senha}
            width={"90%"}
            height={"30px"}
            margin={"8px 0 5px 0"}
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
            {senhaError && <p>Por favor, preencha a senha</p>}
          </div>
          <div className="formulario--loginButton">
            <Link to={"/formulario"}>
              <Button
                type="submit"
                value={"Entrar"}
                width={"200px"}
                height={"40px"}
                borderRadius={50}
                onClick={handleLogin}
                >
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
