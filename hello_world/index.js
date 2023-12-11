const express = require('express');
const app = express();
const HostName = 'localhost';
const PORT = 5005;

// action perform

app.get('/', (req, res)=>{
    res.send(`<h1 style='color: red'>Hello World!</h1>`);
})
app.get('/welcome', (req, res)=>{
    res.send("Welcome Jii");
})
app.get('/about', (req, res)=>{
    res.send("I am a Full stack Developer");
})


app.listen(PORT, ()=>{
    console.log(`Server is running on ${HostName}:${PORT}`);
})