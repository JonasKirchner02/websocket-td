

// Create WebSocket connection.
let ws = new WebSocket("wss://websockets-td-c8a685041ad6.herokuapp.com:443");

let controlTD = document.querySelector('.controllTD')



controlTD.addEventListener('input', (event) => {
  console.log(controlTD.value);
  ws.send(JSON.stringify({'slider1': controlTD.value / 100.0}))

});


// Connection opened
ws.addEventListener("open", (open) => {
  ws.send("Hello Server!");
});

// Listen for messages
ws.addEventListener('message', (message) => {
 if(message.data =='ping'){
    ws.send('pong');
    return
 }
 
 let data = JSON.parse(message.data);
 if('slider1' in data){
    let val = data['slider1'];
    console.log('val' val)
 }
  console.log(data);
});