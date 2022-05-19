import RlBorder from "../../../../../components/RlBorder"
import "./style.css"

const SolutionsCard = ({ iconUrl, description }) => {
    return (
        <RlBorder centerVertical='middle' size='size-3'>
            <img src={iconUrl} alt="" className="card--icon" />
            <div className="card--description">{description}</div>
        </RlBorder>
    )
}

export default SolutionsCard