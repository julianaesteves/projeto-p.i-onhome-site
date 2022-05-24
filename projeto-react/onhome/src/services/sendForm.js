const sendForm = async (formData) => {
    await fetch(`http://localhost:8080/empresa`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
}

export default sendForm