const express = require('express') 
const app = express()
const PORT = 8005
const cors = require('cors')

app.use(cors())

const rappers = {
    'twleve':{
        'brekky': ['1 sausage mcmuffin, 1 sausage mcmuffin with egg, fruit & maple oatmeal', '40 protein', 'brekky'],
        'affordable': ['3 mcdoubles', '66 protein', 'affordable'],
        'healtier': ['3 mcchickens', '42 protein', 'healtierish']
    },

    'mcchicken':{
        'foodName': '3 mcchickens',
        'protein': 42,
        'optionType': 'healtier but not really'
    },

    'unknown':{
        'foodName': 'unknown',
        'protein': 'unknown',
        'optionType': 'unknown'
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






