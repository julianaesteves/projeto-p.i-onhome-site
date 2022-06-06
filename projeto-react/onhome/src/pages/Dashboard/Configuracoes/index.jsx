import Border from "../../../components/Border";
import Button from "../../../components/Button";
import GradientText from "../../../components/GradientText";
import Input from "../../../components/Input";
import { useEffect, useState } from "react";
import "./style.css";

const Configuracoes = () => {
  const [empresas, setEmpresas] = useState();

  useEffect(() => {
    async function getCompanyInfo() {
      const data = await fetch("https://onhome-api-v1.herokuapp.com/empresa/38");
      const [json] = await data.json();
      setEmpresas(json);
    }
    getCompanyInfo();
  }, []);

  console.log(empresas);
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
                  <b>Razão Social: </b> {empresas?.razaoSocial}
                </p>
                <p className="paragraph-card">
                  <b>CNPJ: </b>{empresas?.cnpj}
                </p>
                <p className="paragraph-card">
                  <b>Nome Fantasia: </b>{empresas?.nomeFantasia}
                </p>
                <p className="paragraph-card">
                  <b>Email: </b>{empresas?.emailEmpresa}
                </p>
                <p className="paragraph-card">
                  <b>Telefone:</b>{empresas?.telefoneEmpresa}
                </p>{" "}
              </div>
            </div>
          </Border>
          <Border height={190} padding={"20px"}>
            <div className="div-plano">
              <div className="cards-description">
                <h1 className="cards-title">Plano</h1>
                <div className="cards-content">
                  <p className="paragraph-card">
                    <b>Opção: </b>{empresas?.plano}
                  </p>
                  <p className="paragraph-card">
                    <b>Tipo: </b>{empresas?.periodo}
                  </p>
                  <p className="paragraph-card">
                    <b>Quantidade de máquinas: </b>{empresas?.quantComputadores}
                  </p>
                  <p className="paragraph-card">
                    <b>Data da contratação: </b>{empresas?.dataAquisicao}
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
                  <b>Logradouro: </b>{empresas?.logradouro}
                </p>
                <p className="paragraph-card">
                  <b>Número: </b>{empresas?.numero}
                </p>
                <p className="paragraph-card">
                  <b>Complemento: </b>{empresas?.complemento}
                </p>
                <p className="paragraph-card">
                  <b>CEP: </b>{empresas?.cep}
                </p>
                <p className="paragraph-card">
                  <b>Bairro: </b>{empresas?.bairro}
                </p>
                <p className="paragraph-card">
                  <b>Cidade: </b>{empresas?.cidade}
                </p>
                <p className="paragraph-card">
                  <b>Estado: </b>{empresas?.estado}
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
              {/* <div className="button-right">
                <Button width={150} height={30} value={"Renovar..."}></Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;
