import GradientText from '../../../../components/GradientText'
import FeedbackCard from './FeedbackCard'

import './style.css'

const Feedbacks = () => {
    return (
        <div className='feedback--background'>
            <div className='feedback--container'>
                <div className='feedback--title'>
                    <GradientText title="Feedback dos nossos parceiros" />
                </div>
                <div className='feedback--cards'>
                    <FeedbackCard 
                        textAlign={"left"}
                        label={"Esté é o campo onde terá os feedbacks, escrito por cada cliente"} 
                        fontSizeLabel={12} 
                        title={"Michael Fassbender"} 
                        subtitle={"Gerente de projetos"}
                        fontSizeTitle={19}
                        fontSizeSubtitle={18}/>
                    <FeedbackCard 
                        label={"Esté é o campo onde terá os feedbacks, escrito por cada cliente"} 
                        fontSizeLabel={12} 
                        title={"Robert Pattinson"} 
                        subtitle={"Diretor de RH"}
                        fontSizeTitle={19}
                        fontSizeSubtitle={18}/>
                    <FeedbackCard 
                        label={"Esté é o campo onde terá os feedbacks, escrito por cada cliente"} 
                        fontSizeLabel={12} 
                        title={"Michelle Obama"} 
                        subtitle={"CEO YouTech"}
                        fontSizeTitle={19}
                        fontSizeSubtitle={18}/>
                    <FeedbackCard 
                        label={"Esté é o campo onde terá os feedbacks, escrito por cada cliente"} 
                        fontSizeLabel={12} 
                        title={"Henry Cavill"} 
                        subtitle={"CTO AllSafe"}
                        fontSizeTitle={19}
                        fontSizeSubtitle={18}/>
                    <FeedbackCard 
                        label={"Esté é o campo onde terá os feedbacks, escrito por cada cliente"} 
                        fontSizeLabel={12} 
                        title={"Han Okasaka"} 
                        subtitle={"CTO F&F"}
                        fontSizeTitle={19}
                        fontSizeSubtitle={18}/>
                    <FeedbackCard 
                        label={"Esté é o campo onde terá os feedbacks, escrito por cada cliente"} 
                        fontSizeLabel={12} 
                        title={"Jenifer Lawrence"} 
                        subtitle={"Diretora Regional HungerGames"}
                        fontSizeTitle={19}
                        fontSizeSubtitle={17}/>
                </div>
            </div>
        </div>
    )
}

export default Feedbacks