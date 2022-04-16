import Border from '../../../../../components/Border'
import TextWithImage from '../../Produtos/TextWithImage'
import './style.css'

const FeedbackCard = (props) => {
    return (
        <div>
            <Border width={"220px"} height={"150px"} margin={"0.8rem"}>
                <div className='feedback--clientName'>
                    <TextWithImage
                        title={props.title}
                        fontSizeTitle={props.fontSizeTitle}

                        label={props.label} 
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