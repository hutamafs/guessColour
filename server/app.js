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
let scores = [];
let lifes = [];

io.on('connection' , (socket) => {
    console.log('an user connected');
    let skor = null;
    let life = null;
    let name = null;

    socket.on('user-connect',(data) => {
        let index = users.indexOf(data)
        if(index == -1) {
            users.push(data)
        }
        name = data
        console.log(users)
        io.emit('allUsers',users);
    })

    socket.on('sendScore',(data) => {
        console.log('skor masuk',data)
        skor = data
        scores.push(data)
        socket.broadcast.emit('enemyScore',data)
    })

    socket.on('sendLife',(data) => {
        console.log('life masuk',data)
        life = data
        lifes.push(data)
        socket.broadcast.emit('enemyLife',data)
    })

    socket.on('sendStatus',(data) => {
        console.log(data,'status')
        let payload = { name,skor,life }
        
        socket.broadcast.emit('enemyStatus',payload)
    })

    //socket.on('disconnect')
})


http.listen(port,() => {
    console.log(`running on ${port}`)
})
