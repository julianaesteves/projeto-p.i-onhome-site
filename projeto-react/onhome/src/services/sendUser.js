const sendUser = async (userInfo) => {
    await fetch(`http://localhost:8080/usuario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo)
    })
}

export default sendUser