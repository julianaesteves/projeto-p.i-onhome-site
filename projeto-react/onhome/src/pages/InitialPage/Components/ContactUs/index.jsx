import RlInput from "../../../../components/RlInput"
import GradientText from "../../../../components/GradientText"
import Button from "../../../../components/Button"

import "./style.css"

const ContactUs = () => {
    const inputLabels = [
        "Seu nome",
        "Seu email"
    ]

    return (
        <div className="contact-content">
            <div className="contact--header">
                <GradientText
                    className="contact--title"
                    textAlign="center"
                    title="Entre em contato"
                    subtitle="Entre em contato para obter mais informações ou fazer um orçamento que se adeque a suas necessidades"
                    margin='0 auto'
                />
            </div>
            <div className="contact-info">
                {inputLabels.map(label => (
                    <RlInput
                        placeholder={label}
                    />
                ))}
            </div>
            <div className="contact-description">
                <RlInput
                    placeholder={"Escreva uma mensagem"}
                    borderRadius='20px'
                />
                <Button
                    width={150}
                    height={30}
                    value={"Enviar"}
                    color='white'
                />
            </div>
        </div>
    )
}

export default ContactUs