const sendUser = async (userInfo, idEmpresa) => {
    await fetch(`http://localhost:8080/usuario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...userInfo, fkEmpresa: idEmpresa})
    })
}

export default sendUser