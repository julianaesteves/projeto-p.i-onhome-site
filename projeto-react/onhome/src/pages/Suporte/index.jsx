import React from "react";
import "./style.css";
import Border from "../../components/Border/index";
import GradientText from "../../components/GradientText";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button"
import { formatarCep } from "../../functions/formatter";
const Suporte = () => {
  const [logradouro, setLogradouro] = useState("");
  const [logradouroError, setLogradouroError] = useState(false);
  const [bairro, setBairro] = useState("");
  const [bairroError, setBairroError] = useState(false);
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [numeroError, setNumeroError] = useState(false);
  const [cep, setCep] = useState("");
  const [cepError, setCepError] = useState(false);
  const [estado, setEstado] = useState("");
  const [estadoError, setEstadoError] = useState(false);
  const [cidade, setCidade] = useState("");
  const [cidadeError, setCidadeError] = useState(false);

  function verify() {
    if (logradouro == "") {
      setLogradouroError(true);
    } else {
      setLogradouroError(false);
    }

    if (bairro == "") {
      setBairroError(true);
    } else {
      setBairroError(false);
    }
    if (numero == "") {
      setNumeroError(true);
    } else {
      setNumeroError(false);
    }
    if (cep.length != 9) {
      setCepError(true);
    } else {
      setCepError(false);
    }
    if (estado == "") {
      setEstadoError(true);
    } else {
      setEstadoError(false);
    }
    if (cidade == "") {
      setCidadeError(true);
    } else {
      setCidadeError(false);
    }
    if (
      cidade != "" &&
      estado != "" &&
      cep == 9 &&
      numero != "" &&
      bairro != "" &&
      logradouro != ""
    ) {
      console.log("Buscando...");
    }
  }
  return (
    <>
      <div className="suporte--background">
        <div className="suporte--gradientBackground">
          <Border
            margin={15}
            padding={"10px 40px 0 20px"}
            height={60}
            width={800}
          >
            <GradientText
              textAlign={"center"}
              title={"Encontre a autorizada mais próxima de você"}
            />
          </Border>

          <div className="map--container">
            <Border padding={30}>
              <h3>Permita ou nos informe</h3>
              <h3> sua localização</h3>
              <label>CEP</label>
              <Input
                width={200}
                height={20}
                value={cep}
                onChange={(e) => {
                  setCep(e.target.value);
                  setCepError(false);
                }}
                onBlur={() => {
                  if (cep == "") {
                    setCepError(true);
                  }
                }}
                onInput={(e) => e.target.value = formatarCep(e.target.value)}
              />
              <div className="container__error">
                {cepError && <p>Por favor, preencha o cep</p>}
              </div>
              <label>Bairro</label>
              <Input
                width={200}
                height={20}
                value={bairro}
                onChange={(e) => {
                  setBairro(e.target.value);
                  setBairroError(false);
                }}
                onBlur={() => {
                  if (bairro == "") {
                    setBairroError(true);
                  }
                }}
              />
              <div className="container__error">
                {bairroError && <p>Por favor, preencha o bairro</p>}
              </div>
              <label>Logradouro</label>
              <Input
                width={200}
                height={20}
                value={logradouro}
                onChange={(e) => {
                  setLogradouro(e.target.value);
                  setLogradouroError(false);
                }}
                onBlur={() => {
                  if (logradouro == "") {
                    setLogradouroError(true);
                  }
                }}
              />
              <div className="container__error">
                {logradouroError && <p>Por favor, preencha o logradouro</p>}
              </div>
              <label>Nº</label>
              <Input
                width={30}
                height={20}
                value={numero}
                onChange={(e) => {
                  setNumero(e.target.value);
                  setNumeroError(false);
                }}
                onBlur={() => {
                  if (numero == "") {
                    setNumeroError(true);
                  }
                }}
              />
              <div className="container__error">
                {numeroError && <p>Por favor, preencha o número</p>}
              </div>
              <label>Complemento</label>
              <Input
                width={200}
                height={20}
                value={complemento}
                onChange={(e) => {
                  setComplemento(e.target.value);
                }}
              />

              <label>Cidade</label>
              <Input
                width={200}
                height={20}
                value={cidade}
                onChange={(e) => {
                  setCidade(e.target.value);
                  setCidadeError(false);
                }}
                onBlur={() => {
                  if (cidade == "") {
                    setCidadeError(true);
                  }
                }}
              />
              <div className="container__error">
                {cidadeError && <p>Por favor, preencha a cidade</p>}
              </div>
              <label>Estado</label>
              <Input
                width={200}
                height={20}
                value={estado}
                onChange={(e) => {
                  setEstado(e.target.value);
                  setEstadoError(false);
                }}
                onBlur={() => {
                  if (estado == "") {
                    setEstadoError(true);
                  }
                }}
              />
              <div className="container__error">
                {estadoError && <p>Por favor, preencha o estado</p>}
              </div>

              <p>Não encontrou?</p>
              <p>Entre em contato com seu superior.</p>
              <Button value={"Pesquisar"} onClick={verify} />
            </Border>

            <Border width={900} height={510}></Border>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suporte;
