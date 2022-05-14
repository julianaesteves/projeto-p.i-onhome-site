import Border from "../../../../../components/Border"
import "./style.css"

const SolutionsCard = ({ iconUrl, description }) => {
    return (
        <Border width={"220px"} height={"10rem"} margin={"0.8rem"} padding={"20px"}>
            <img src={iconUrl} alt="" className="card--icon" />
            <div className="card--description">
                {description}
            </div>
        </Border>
    )
}

export default SolutionsCard