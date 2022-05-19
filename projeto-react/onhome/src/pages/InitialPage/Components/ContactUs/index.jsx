import RlInput from "../../../../components/RlInput";
import GradientText from "../../../../components/GradientText";
import Button from "../../../../components/Button";

import "./style.css";
import { useState } from "react";

const ContactUs = () => {
  const inputLabels = ["Seu nome", "Seu email"];

  const [mensagem, setMensagem] = useState("");
  const [mensagemError, setMensagemError] = useState(false);
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");

  function verify() {
    if (mensagem != "" && email != "" && nome != "") {
      console.log("Email enviado");
    } else {
      setMensagemError(true);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    verify();
  };

  return (
    <div className="contact-content">
      <div className="contact--header">
        <GradientText
          className="contact--title"
          textAlign="center"
          title="Entre em contato"
          subtitle="Entre em contato para obter mais informações ou fazer um orçamento que se adeque a suas necessidades"
          margin="0 auto"
        />
      </div>
      <div className="contact-info">
        <RlInput
          placeholder={"Seu nome"}
          borderRadius="20px"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
            setMensagemError(false);
          }}
          onBlur={() => {
            if (nome == "") {
              setMensagemError(true);
            }
          }}
        />
        <RlInput
          placeholder={"Seu e-mail"}
          borderRadius="20px"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMensagemError(false);
          }}
          onBlur={() => {
            if (email == "") {
              setMensagemError(true);
            }
          }}
        />
      </div>
      <div className="contact-description">
        <RlInput
          placeholder={"Escreva uma mensagem"}
          borderRadius="20px"
          value={mensagem}
          onChange={(e) => {
            setMensagem(e.target.value);
            setMensagemError(false);
          }}
          onBlur={() => {
            if (mensagem == "") {
              setMensagemError(true);
            }
          }}
        />
        <div className="container__error">
          {mensagemError && <p>Por favor, preencha todos os campos!</p>}
        </div>
        <Button
          width={150}
          height={30}
          value={"Enviar"}
          color="white"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default ContactUs;
