const logout = document.getElementById("logout")

logout.addEventListener("click", async ()=>{
    try {
        await fetch('/api/sessions/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response =>{
            if (response.ok){
                window.location.href = response.url
            }
        })
        .catch(error=>{
            throw(error)
        })

    } catch (error) {
        console.error(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error al cerrar sesion'
        })
    }
})
