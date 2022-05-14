import React from "react";
import "./style.css";
import Border from "../../components/Border/index"
import GradientText from "../../components/GradientText";
import Input from "../../components/Input"

const Suporte = () => {
    return (
        <>
        <div className="suporte--background">
            <div className="suporte--gradientBackground">
                <Border margin={15} padding={"10px 40px 0 20px"} height={60} width={800}>
                    <GradientText textAlign={"center"} title={"Encontre a autorizada mais próxima de você"}/>
                </Border>

                <div className="map--container">
                <Border padding={30}>
                    <h3>Permita ou nos informe</h3><h3> sua localização</h3>
                        <label>CEP</label>
                        <Input width={200} height={20}/>
                        <label>Logradouro</label>
                        <Input width={200} height={20}/>
                        <label>Nº</label>
                        <Input width={30} height={20}/>
                        <label>Complemento</label>
                        <Input width={200} height={20}/>
                        <label>Cidade</label>
                        <Input width={200} height={20}/>
                        <label>Estado</label>
                        <Input width={200} height={20}/>

                    <p>Não encontrou?</p>
                    <p>Entre em contato com seu superior.</p>
                </Border>
                <Border width={900} height={510}>

                </Border>
                </div>
            </div>
        </div>
        </>




    )
}

export default Suporte;