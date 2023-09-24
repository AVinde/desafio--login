const socket = io()
const form = document.getElementById("login")

form.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const datForm = new FormData(e.target)
    const login = Object.fromEntries(datForm)
    try {
        await fetch('/api/sessions/login', {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login)
        })
        .then(response =>{
            if (response.ok)window.location.href = response.url
        })
        .catch(error=>{
            throw(error)
        })

    } catch (error) {
        console.error(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error al intentar iniciar sesión'
        })
    }
})