import "./style.css"

const MenuCadastro = (page) => {

const steps =[1, 2, 3]
    return (
        <div >
                <div className="formulario--menuSteps">{steps}</div>
            <div className="formulario--menuContainer">
                <div className='formulario--menuGradientLine' 
                style={{marginLeft: page === 0 ? "50px" : page === 1 ? "150px" : "250px"}}></div>
                <div className='formulario--menuFineLine'></div >
            </div>
      </div>

    )

}


export default MenuCadastro