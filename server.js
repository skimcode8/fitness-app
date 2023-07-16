const express = require('express') 
const app = express()
const PORT = 8005
const cors = require('cors')

app.use(cors())

const rappers = {
    1200:{
        'brekky': ['1 sausage mcmuffin, 1 sausage mcmuffin with egg, fruit & maple oatmeal', '40 protein', 'brekky'],
        'affordable': ['3 mcdoubles', '66 protein', 'high protein'],
        'healtier': ['3 mcchickens', '42 protein', 'healtierish']
    },

    1000:{
        'brekky': ['TODO', '40 protein', 'brekky'],
        'affordable': ['TODO', '66 protein', 'affordable'],
        'healtier': ['TODO', '42 protein', 'healtierish']
    },

    2000:{
        'brekky': ['TODO', '40 protein', 'brekky'],
        'affordable': ['5 mcdoubles', '110 protein', 'high protein'],
        'healtier': ['5 mcchickens, or 5 spicy mcchickens', '70 protein', 'healtierish']
    }
    
}






app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`the server is now running on port ${PORT}! Betta Go catch it`)
})






