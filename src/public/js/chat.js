const socket = io();

const btnChat = document.querySelector("#botonChat");
const parrafosMensajes = document.querySelector("#parrafosMensajes");
const valueInput = document.querySelector("#chatBox");

let userEmail;

Swal.fire({
    title: "Ingrese un usuario",
    text: "Por favor ingrese su usuario",
    input: "text",
    inputValidator: (valor) => {
        return !valor && "ingrese un usuario correctamente";
    },
    allowOutsideClick: false,
}).then((resultado) => {
    userEmail = resultado.value;
    socket.emit("loadChats");
});

btnChat.addEventListener("click", () => {
    if (valueInput.value.trim().length > 0) {
        socket.emit("newMessage", { email: userEmail, message: valueInput.value });
        valueInput.value = "";
        socket.on();
    }
});

socket.on("showMessages", (arrayMessages) => {
    parrafosMensajes.innerHTML = "";

    arrayMessages.forEach((element) => {
        parrafosMensajes.innerHTML += `
            <li class="liParrafosMensajes">
             <div class="spanContainer">
                <p>${element.postTime}</p>
                <p>${element.email}:</p>
             </div>
            <p class="userMessage">${element.message}
            </p>
            </li>
        `;
    });
});