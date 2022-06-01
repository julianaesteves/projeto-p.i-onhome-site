import react, { useState } from "react"
import "./style.css"

const DeleteModal = (props) => {
  const [isModalVisible, setModalVisible] = useState(false)
  function Clicked() {
    setModalVisible(true)
  }
  return (
    <>
      {/* <div>
        <button onClick={Clicked}> apagar </button>
      </div> */}
      <section className="deleteModal__blur">
        {isModalVisible ? (
          <div className="deleteModal__modal">
            <h2>Deletar usuário</h2>

            <p>Deseja excluir a o usuário {props.nomeVaga}?</p>
            <div>
              <button className="deleteModal__buttons">Sim</button>
              <button
                className="deleteModal__buttons"
                onClick={() => setModalVisible(false)}>
                Não
              </button>
            </div>
          </div>
        ) : null}
      </section>
    </>
  )
}

export default DeleteModal
