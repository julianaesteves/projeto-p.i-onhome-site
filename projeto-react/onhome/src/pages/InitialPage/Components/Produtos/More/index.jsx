import GradientText from "../../../../../components/GradientText";
import './style.css';
import Border from "../../../../../components/Border";
import Button from "../../../../../components/Button";

const More = () => {
    return (
        <Border>
            <GradientText title="Aumente a sua produtividade com nossos produtos!" subtitle="Com o nosso suporte exclusivo, você irá aumentar a sua produtividade e seus lucros. Tenha uma ótima gestão da sua equipe e controle sobre seus procesos." align="left" />
            <div style={{ textAlign: 'left', paddingTop: '20px' }}>
                <Button value={"Saiba Mais..."}/>
            </div>
        </Border>
    );
};

export default More;