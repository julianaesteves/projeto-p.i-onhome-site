import RlBorder from '../../../../../components/RlBorder'
import TextWithImage from '../../Produtos/TextWithImage'
import './style.css'

const FeedbackCard = (props) => {
    return (
        <RlBorder centerVertical='middle' size='size-3'>
            <TextWithImage
                title={props.title}
                fontSizeTitle={props.fontSizeTitle}
                label={props.label}
                fontSizeLabel={props.fontSizeLabel}
                subtitle={props.subtitle}
                fontSizeSubtitle={props.fontSizeSubtitle}
            />
        </RlBorder>
    )
}

export default FeedbackCard;