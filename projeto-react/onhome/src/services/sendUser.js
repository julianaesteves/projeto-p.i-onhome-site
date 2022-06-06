const sendUser = async (userInfo, idEmpresa) => {
    await fetch(`https://onhome-api-v1.herokuapp.com/usuario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...userInfo, fkEmpresa: idEmpresa})
    })
}

export default sendUser