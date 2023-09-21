const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });
const cors = require('cors');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'public'))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/', (req, res)=>{
    res.render('index.html')
})

let messages = [];

io.on('connection', socket => {
    console.log(`Novo socket conectado: ${socket.id}`)
    messages.push(data);
    socket.broadcast.emit('receivedMessage', data);
});

server.listen(3000)