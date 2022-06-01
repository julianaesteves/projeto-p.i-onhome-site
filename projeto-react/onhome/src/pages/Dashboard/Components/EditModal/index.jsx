import React, { useState } from "react";
import "./style.css";

const EditModal = ({
  setModal,
  modal,
  valueInputName,
  valueInputEmail,
  valueInputSenha,
  valueInputArea,
  valueInputPermissao,
  setValueInputSenha,
  setValueInputEmail,
  setValueInputName,
  setValueInputArea,
  setValueInputPermissao,
}) => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [senhaError, setSenhaError] = useState(false);
  const [permissaoError, setPermissaoError] = useState(false);
  const [areaError, setAreaError] = useState(false);

  if (modal) {
    function verify() {
      if (valueInputName == "") {
        setNameError(true);
      } else {
        setNameError(false);
      }
      if (valueInputEmail == "") {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
      if (valueInputSenha == "") {
        setSenhaError(true);
      } else {
        setSenhaError(false);
      }
      if (valueInputPermissao == "") {
        setPermissaoError(true);
      } else {
        setPermissaoError(false);
      }
      if (valueInputArea == "") {
        setAreaError(true);
      } else {
        setAreaError(false);
      }
      if (
        valueInputName != "" &&
        valueInputEmail != "" &&
        valueInputSenha != "" &&
        valueInputPermissao != "" &&
        valueInputArea != ""
      ) {
        setModal(false);
      }
    }

    return (
      <section className="modalEdit__blur">
        <div className="modalEdit__modal">
          <h2 className="modalEdit__title">Atualizar cadastro</h2>
          <label className="modalEdit__label">Nome:</label>
          <input
            className="modalEdit__input"
            value={valueInputName}
            onChange={({ target }) => {
              setValueInputName(target.value);
              setNameError(false);
            }}
            onBlur={() => {
              if (valueInputName == "") {
                setNameError(true);
              }
            }}
          />
          <span
            onClick={() => {
              setValueInputName("");
              setNameError(true);
            }}
            className="modalEdit__input--clean"
          >
            x
          </span>

            <div className="modalEdit__error">
              {nameError && <p>Por favor, preencha o nome</p>}
            </div>

          <label className="modalEdit__label">E-mail:</label>
          <input
            className="modalEdit__input"
            value={valueInputEmail}
            onChange={({ target }) => {
              setValueInputEmail(target.value);
              setEmailError(false);
            }}
            onBlur={() => {
              if (valueInputEmail == "") {
                setEmailError(true);
              }
            }}
          />
          <span
            onClick={() => {
              setValueInputEmail("");
              setEmailError(true);
            }}
            className="modalEdit__input--clean"
          >
            x
          </span>
          <div className="modalEdit__error">
              {emailError && <p>Por favor, preencha o email</p>}
            </div>
          <label className="modalEdit__label">Senha:</label>
          <input
            className="modalEdit__input"
            value={valueInputSenha}
            onChange={({ target }) => {
              setValueInputSenha(target.value);
              setSenhaError(false);
            }}
            onBlur={() => {
              if (valueInputSenha == "") {
                setSenhaError(true);
              }
            }}
          />
          <span
            onClick={() => {
              setValueInputSenha("");
              setSenhaError(true);
            }}
            className="modalEdit__input--clean"
          >
            x
          </span>
          <div className="modalEdit__error">
              {senhaError && <p>Por favor, preencha a senha</p>}
            </div>

          <label className="modalEdit__label">Permissão:</label>
          <input
            className="modalEdit__input"
            value={valueInputPermissao}
            onChange={({ target }) => {
              setValueInputPermissao(target.value);
              setPermissaoError(false);
            }}
            onBlur={() => {
              if (valueInputPermissao == "") {
                setPermissaoError(true);
              }
            }}
          />
          <span
            onClick={() => {
              setValueInputPermissao("");
              setPermissaoError(true);
            }}
            className="modalEdit__input--clean"
          >
            x
          </span><div className="modalEdit__error">
              {permissaoError && <p>Por favor, preencha a permissão</p>}
            </div>

          <label className="modalEdit__label">Área:</label>
          <input
            className="modalEdit__input"
            value={valueInputArea}
            onChange={({ target }) => {
              setValueInputArea(target.value);
              setAreaError(false);
            }}
            onBlur={() => {
              if (valueInputArea == "") {
                setAreaError(true);
              }
            }}
          />
          <span
            onClick={() => {
              setValueInputArea("");
              setAreaError(true);
            }}
            className="modalEdit__input--clean"
          >
            x
          </span>
          <div className="modalEdit__error">
              {areaError && <p>Por favor, preencha a área</p>}
            </div>

          <div className="modalEdit__buttons">
            <button
              onClick={() => {
                setModal(false);
                setNameError(false);
                setEmailError(false);
                setSenhaError(false);
                setPermissaoError(false);
                setAreaError(false);
              }}
            >
              Cancelar
            </button>
            <button onClick={verify} className="modalEdit__buttons--save">
              Salvar
            </button>
          </div>
        </div>
      </section>
    );
  }
  return null;
};

export default EditModal;
