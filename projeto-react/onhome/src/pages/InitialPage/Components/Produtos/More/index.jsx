import GradientText from "../../../../../components/GradientText";
import RlBorder from "../../../../../components/RlBorder";
import Button from "../../../../../components/Button";

import './style.css';

const More = () => {
    return (
        <RlBorder>
            <GradientText textAlign="left" title="Aumente a sua produtividade com nossos produtos!" subtitle="Com o nosso suporte exclusivo, você irá aumentar a sua produtividade e seus lucros. Tenha uma ótima gestão da sua equipe e controle sobre seus processos." align="left" padding='20px' />
            <div style={{ textAlign: 'left', paddingTop: '20px' }}>
                <Button value={"Saiba mais..."} maxWidth={180} padding={10} color='white' borderRadius={40} margin={20} />
            </div>
        </RlBorder>
    );
};

export default More;