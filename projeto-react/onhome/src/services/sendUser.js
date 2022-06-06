const sendUser = async (userInfo) => {
    await fetch(`https://onhome-api-v1.herokuapp.com/usuario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo)
    })
}

export default sendUser