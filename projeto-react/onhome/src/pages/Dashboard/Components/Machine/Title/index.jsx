import Border from "../../../../../components/Border"
import GradientText from "../../../../../components/GradientText"

const Title = ({ squad, machineNumber, padding }) => {
    return (
        <Border padding={"10px"} margin={"10px"}>
            <GradientText 
                title={`Squad ${squad} - Máquina ${machineNumber}`} 
                textAlign={"center"}
            />
        </Border>
    )
}


export default Title