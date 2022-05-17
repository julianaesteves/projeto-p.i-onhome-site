import GradientText from "../../../components/GradientText";
import ButtonWithArrow from "../../../components/ButtonWithArrow";
import { Link } from "react-router-dom";

import "./style.css";

const TelaInicialCadastro = () => {
  return (
    <div className="mainDiv--background">
      <div className="mainDiv--gradientBackground">
        <div className="mainDiv--content">
          <div className="div--text">
            <GradientText
              title={"Olá! Este é o seu primeiro acesso"}
              fontSizeTitle={30}
            />
            <GradientText
              title={
                "Por favor, nos informe alguns dados para acessar nossa plataforma"
              }
              fontSizeTitle={30}
            />
          </div>
          <div>
            <Link to={"/formulario"}><ButtonWithArrow color={"white"}>Seguir</ButtonWithArrow></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelaInicialCadastro;
