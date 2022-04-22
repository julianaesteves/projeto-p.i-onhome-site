import Border from "../../../../../components/Border"
import GradientText from "../../../../../components/GradientText"

const Title = ({ squad, machineNumber, style }) => {
    return (
        <Border>
            <GradientText 
                title={`Squad ${squad} - Máquina ${machineNumber}`} 
                textAlign={"center"}
            />
        </Border>
    )
}


export default Title