import GradientText from "../../../components/GradientText";
import ButtonWithArrow from "../../../components/ButtonWithArrow";

import "./style.css";

const TelaInicialCadastro = () => {
  return (
    <div className="mainDiv--background">
      <div className="formulario--gradientBackground">
        <div className="mainDiv--content">
          <div className="div--text">
            <GradientText
              title={"Olá! este é o seu primeiro acesso"}
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
            <ButtonWithArrow color={"white"}>Seguir</ButtonWithArrow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelaInicialCadastro;
