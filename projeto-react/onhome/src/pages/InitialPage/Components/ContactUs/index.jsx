import Input from "../../../../components/Input"
import GradientText from "../../../../components/GradientText"
import Button from "../../../../components/Button"

import "./style.css"

const ContactUs = () => {
    const inputLabels = [
        "Seu nome",
        "Seu email"
    ]

    return (
        <div className="contact--container">
            <div className="contact--header">
                <GradientText 
                    title={"Entre em contato"} 
                    subtitle={"Entre em contato para obter mais informações ou fazer um orçamento que se adeque a suas necessidades"}
                />
            </div>
            <div className="contact--content">
                <div className="contact--content--userInfo">
                    {inputLabels.map(label => (
                        <Input placeholder={label} height={30} width={300} margin={"20px 5px"}/>
                    ))}
                </div>
                <Input placeholder={"Escreva uma mensagem"} height={120} width={650} borderRadius={"20px"}/>
                <Button
                    width={150} 
                    height={30} 
                    margin={"20px 0"}
                    value={"Enviar"}
                /> 
            </div>
        </div>    
    )
}

export default ContactUs