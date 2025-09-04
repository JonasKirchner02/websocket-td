

// Create WebSocket connection.
let ws = new WebSocket("wss://websockets-td-c8a685041ad6.herokuapp.com:443");

let controlTD = document.querySelector('.controllTD')



controlTD.addEventListener('input', (event) => {
  console.log(controlTD.value);
  ws.send(JSON.stringify({'slider1': controlTD.value}))

});


// Connection opened
socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});

// Listen for messages
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});