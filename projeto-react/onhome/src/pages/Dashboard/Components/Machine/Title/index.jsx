import Border from "../../../../../components/Border"
import GradientText from "../../../../../components/GradientText"

const Title = ({ squad, machineNumber, style }) => {
    return (
        <Border style={style}>
            <GradientText title={`Squad ${squad} - Máquina ${machineNumber}`}/>
        </Border>
    )
}


export default Title