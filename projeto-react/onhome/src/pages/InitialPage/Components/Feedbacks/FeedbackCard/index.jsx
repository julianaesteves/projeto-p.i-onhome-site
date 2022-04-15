import Border from '../../../../../components/Border'
import TextWithImage from '../../Produtos/TextWithImage'
import './style.css'

const FeedbackCard = (props) => {
    return (
        <div>
            <Border width={"220px"} height={"150px"} margin={"0.8rem"}>
                <div className='feedback--clientName'>
                    <TextWithImage 
                        label={props.label} 
                        title={props.title}
                        fontSizeTitle={props.fontSizeTitle}  
                        fontSizeLabel={props.fontSizeLabel} 
                        subtitle={props.subtitle}
                        fontSizeSubtitle={props.fontSizeSubtitle}
                    />
                </div>
            </Border>
        </div>
    )
}

export default FeedbackCard;