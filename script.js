const socket = io();

document.getElementById("messageInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let input = document.getElementById("messageInput");
    let message = input.value.trim();
    if (message) {
        socket.emit("chat message", message);
        input.value = "";
    }
}

socket.on("chat message", (msg) => {
    let messages = document.getElementById("messages");
    let newMessage = document.createElement("p");
    newMessage.textContent = msg;
    messages.appendChild(newMessage);
});
