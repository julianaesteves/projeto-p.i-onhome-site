import RlInput from "../../../../components/RlInput";
import GradientText from "../../../../components/GradientText";
import Button from "../../../../components/Button";
import Swal from 'sweetalert2'

import "./style.css";
import { useEffect, useState } from "react";

const ContactUs = () => {
  const inputLabels = ["Seu nome", "Seu email"];

  const [mensagem, setMensagem] = useState("");
  const [mensagemError, setMensagemError] = useState(false);
  const [sucess, setSucess] = useState(false);

  const [customer, setCustomer] = useState({
    customerName: "",
    customerEmail: ""
  })

  const sendEmail = async () => {
    await fetch('https://onhome-api-v1.herokuapp.com/mailer', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer)
    })
  }

  const sendEmailAlert = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Verifique seu email :)',
      showConfirmButton: false,
      timer: 1500
    })
  }

  function verify() {
    if (mensagem != "" && customer.customerEmail != "" && customer.customerName != "") {
      sendEmailAlert();
      sendEmail();
      setSucess(true);
    } else {
      setMensagemError(true);
      setSucess(false)
    }
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    verify();
    console.log(customer)
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
          value={customer.customerName}
          onChange={({ target }) => {
            setCustomer({ ...customer, customerName: target.value});
            setMensagemError(false); 
          }}
          onBlur={() => {
            if (customer.customerName == "") {
              setMensagemError(true);
            }
          }}
        />
        <RlInput
          placeholder={"Seu e-mail"}
          borderRadius="20px"
          value={customer.customerEmail}
          onChange={({ target }) => {
            setCustomer({ ...customer, customerEmail: target.value});
            setMensagemError(false); 
          }}
          onBlur={() => {
            if (customer.customerEmail == "") {
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
          {sucess && <p className="sucess_message">E-mail enviado com sucesso!</p>}
          {mensagemError && <p>Por favor, preencha todos os campos!</p>}
        </div>
        <Button
          width={150}
          height={30}
          value={"Enviar"}
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default ContactUs;
