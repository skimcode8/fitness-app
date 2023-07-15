const express = require('express') 
const app = express()
const PORT = 8005

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.listen(PORT, ()=>{
    console.log(`the server is now running on port ${PORT}! Betta Go catch it`)
})