import Border from "../../../../../components/Border"
import GradientText from "../../../../../components/GradientText"
import "./style.css"

const Title = ({ sector, machineNumber, style }) => {
    return (
        <Border style={style}>
            <GradientText title={`Setor ${sector} - Máquina ${machineNumber}`}/>
        </Border>
        
    )
}

export default Title