import React, { useState } from "react"
import "./style.css"

const DeleteModal = ({
  user,
  setDeleteModal,
  deleteModal}) => {

    if (deleteModal) {
      // Função para remover o usuário do banco e da tela
      function deleteUser(){
        setDeleteModal(false);
      }

  return (
    <>
      <section className="modalEdit__blur">
          <div className="deleteModal__modal">
            <h2>Deletar usuário</h2>

            <p>Deseja excluir o usuário <span>{user}</span>?</p>
            <div>
              <button className="deleteModal__buttons" onClick={deleteUser}>Sim</button>
              <button
                className="deleteModal__buttons"
                onClick={() => setDeleteModal(false)}>
                Não
              </button>
            </div>
          </div>
      </section>
    </>
  )
  }
  return null;
}

export default DeleteModal
