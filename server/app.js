const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

let users = [];

io.on('connection' , (socket) => {
    console.log('an user connected');

    socket.on('user-connect',(data) => {
        users.push(data)
        io.emit('user-connected',users);
    })
})


http.listen(port,() => {
    console.log(`running on ${port}`)
})
