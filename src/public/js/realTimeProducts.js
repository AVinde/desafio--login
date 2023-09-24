const socket = io()
const form = document.getElementById("form")

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const datForm = new FormData(e.target)
    const prod = Object.fromEntries(datForm)
    socket.emit("nuevoProducto", prod)
    e.target.reset()
})