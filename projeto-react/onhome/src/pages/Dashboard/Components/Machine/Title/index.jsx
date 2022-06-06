import Border from "../../../../../components/Border"
import GradientText from "../../../../../components/GradientText"

const Title = ({ machineInfo}) => {
    return (
        <Border padding={"10px"} margin={"10px"}>
            <GradientText 
                title={machineInfo} 
                textAlign={"center"}
            />
        </Border>
    )
}


export default Title