import Border from "../../../components/Border";
import Button from "../../../components/Button";
import GradientText from "../../../components/GradientText";
import Input from "../../../components/Input";

import "./style.css";

const Configuracoes = () => {
  return (
    <div className="right-content">
      <div className="title">
        <GradientText
          className="config--title"
          title={"Configurações"}
          fontSizeTitle={35}
        />
      </div>
      <div className="cards">
        <div className="empresa-plano">
          <Border height={230} padding={"20px"}>
            <div className="cards-description">
              <h1 className="cards-title">Empresa</h1>
              <div className="cards-content">
                <p className="paragraph-card">
                  <b>Razão Social:</b>.
                </p>
                <p className="paragraph-card">
                  <b>CNPJ:</b>{" "}
                </p>
                <p className="paragraph-card">
                  <b>Nome Fantasia:</b>{" "}
                </p>
                <p className="paragraph-card">
                  <b>Email:</b>{" "}
                </p>
                <p className="paragraph-card">
                  <b>Telefone:</b>{" "}
                </p>
              </div>
            </div>
          </Border>
          <Border height={190} padding={"20px"}>
            <div className="div-plano">
              <div className="cards-description">
                <h1 className="cards-title">Plano</h1>
                <div className="cards-content">
                  <p className="paragraph-card">
                    <b>Opção:</b>{" "}
                  </p>
                  <p className="paragraph-card">
                    <b>Tipo:</b>{" "}
                  </p>
                  <p className="paragraph-card">
                    <b>Quantidade de máquinas:</b>{" "}
                  </p>
                  <p className="paragraph-card">
                    <b>Data da contratação:</b>
                  </p>
                </div>
              </div>
            </div>
          </Border>
        </div>
        <div className="endereco">
          <div className="border-gradient" style={{ width: "100%" }}>
            <div className="cards-description">
              <h1 className="cards-title">Endereço</h1>
              <div className="cards-content">
                <p className="paragraph-card">
                  <b>Logradouro:</b>
                </p>
                <p className="paragraph-card">
                  <b>Número:</b>{" "}
                </p>
                <p className="paragraph-card">
                  <b>Complemento:</b>{" "}
                </p>
                <p className="paragraph-card">
                  <b>CEP:</b>{" "}
                </p>
                <p className="paragraph-card">
                  <b>Bairro:</b>{" "}
                </p>
                <p className="paragraph-card">
                  <b>Cidade:</b>{" "}
                </p>
                <p className="paragraph-card">
                  <b>Estado:</b>{" "}
                </p>
              </div>
            </div>
            <div>
              <div className="div-input">
                <Input
                  width={300}
                  height={30}
                  placeholder={"Status da licença:"}
                />
              </div>
              <div className="button-right">
                <Button width={150} height={30} value={"Renovar..."}></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;
