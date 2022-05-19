import GradientText from '../../../../components/GradientText'
import FeedbackCard from './FeedbackCard'

import './style.css'

const Feedbacks = () => {
    return (
        <div className='feedback--background'>
            <div className='feedback--title'>
                <GradientText maxWidth='400px' textAlign='center' margin='0 auto' title="Feedback dos nossos parceiros" />
            </div>
            <div className='feedback--cards'>
                <FeedbackCard
                    textAlign={"left"}
                    label={"Com os serviços da OnHome nossa produtividade dobrou a velocidade."}
                    fontSizeLabel={13}
                    title={"Marcos Barbosa de Sá"}
                    subtitle={"Gerente de projetos"}
                    fontSizeTitle={19}
                    fontSizeSubtitle={18} />
                <FeedbackCard
                    label={"Simplesmente incrível."}
                    fontSizeLabel={14}
                    title={"Mariana Angiulli Caito"}
                    subtitle={"Diretora de RH"}
                    fontSizeTitle={19}
                    fontSizeSubtitle={18} />
                <FeedbackCard
                    label={"O suporte é com certeza um diferencial do mercado!"}
                    fontSizeLabel={14}
                    title={"Daniel Santos da Silva"}
                    subtitle={"CEO YouTech"}
                    fontSizeTitle={19}
                    fontSizeSubtitle={18} />
                <FeedbackCard
                    label={"A melhor empresa que você nunca ouviu falar"}
                    fontSizeLabel={14}
                    title={"Mariane Cerqueira Ito"}
                    subtitle={"CTO AllSafe"}
                    fontSizeTitle={19}
                    fontSizeSubtitle={18} />
                <FeedbackCard
                    label={"Super atenciosos e prestativos, do primeiro atendimento até o suporte"}
                    fontSizeLabel={14}
                    title={"Han Okasaka Woong"}
                    subtitle={"CTO F&F"}
                    fontSizeTitle={19}
                    fontSizeSubtitle={18} />
                <FeedbackCard
                    label={"Empresa que acreditam que nada está escrito a lápis"}
                    fontSizeLabel={14}
                    title={"Pedro Ribeiro Cesare"}
                    subtitle={"Diretor Tech"}
                    fontSizeTitle={19}
                    fontSizeSubtitle={15} />
            </div>
        </div>
    )
}

export default Feedbacks