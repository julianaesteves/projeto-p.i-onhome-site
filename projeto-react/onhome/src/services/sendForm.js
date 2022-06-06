const sendForm = async (formData, idUsuario) => {
    await fetch(`https://onhome-api-v1.herokuapp.com/empresa`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, idUsuario })
    })
}

export default sendForm