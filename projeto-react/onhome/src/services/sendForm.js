const sendForm = async (formData, idUsuario) => {
    await fetch(`http://localhost:8080/empresa`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, idUsuario })
    })
}

export default sendForm