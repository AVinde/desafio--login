const socket = io()
const form = document.getElementById("form")

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const datForm = new FormData(e.target)
    const newUser = Object.fromEntries(datForm)
    console.log(newUser)
    socket.emit("nuevoUsuario", newUser)
})

socket.on('registrado', (user) =>{
    window.location.href = '/login'
})