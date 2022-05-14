import GradientText from "../../../../../components/GradientText";
import Border from "../../../../../components/Border";
import Button from "../../../../../components/Button";

import './style.css';

const More = () => {
    return (
            <Border padding={"20px"} margin={"20px"}>
                <GradientText textAlign="left" title="Aumente a sua produtividade com nossos produtos!" subtitle="Com o nosso suporte exclusivo, você irá aumentar a sua produtividade e seus lucros. Tenha uma ótima gestão da sua equipe e controle sobre seus processos." align="left" />
                <div style={{ textAlign: 'left', paddingTop: '20px' }}>
                    <Button value={"Saiba mais..."} width={180} height={45} borderRadius={40} margin={20}/>
                </div>
            </Border>
    );
};

export default More;