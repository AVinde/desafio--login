const socket = io()

socket.emit("llamarProductos")

socket.on("productos", (products)=>{
    const tableBody = document.querySelector("#productsTable tbody")
    let tableContent = ''
    if (products && Array.isArray(products)) {
    products.forEach(product => {
        tableContent += `
            <tr>
                <td>${product._id}</td>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>${product.category}</td>
                <td>${product.code}</td>
                <td>${product.thumbnail}</td>
            </tr>
        `
    })
} else {
    console.error('Productos no definidos o no es un array:', products)
}

    tableBody.innerHTML = tableContent
    
})

window.onload = async() =>{
    response = await fetch('/api/sessions/user')
    user = await response.json()
    document.getElementById("bienvenido").innerHTML = `Bienvenido ${user.firstName}`
    document.getElementById("email").innerHTML = `Email: ${user.email}`
    document.getElementById("age").innerHTML = `Edad: ${user.age}`
}