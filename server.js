const express = require('express') 
const app = express()
const bodyParser = require('body-parser')
const PORT = 8005
const cors = require('cors')

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

const calories = {
    1200:{
        'brekky': ['1 sausage mcmuffin, 1 sausage mcmuffin with egg, fruit & maple oatmeal', '40 protein', 'brekky'],
        'affordable': ['3 mcdoubles', '66 protein', 'high protein'],
        'healtier': ['3 mcchickens, or 3 spicy mcchickens', '42 protein', 'healtierish']
    },

    1000:{
        'brekky': ['TODO', '40 protein', 'brekky'],
        'affordable': ['TODO', '66 protein', 'affordable'],
        'healtier': ['TODO', '42 protein', 'healtierish']
    },

    1400:{
        'brekky': ['TODO', '105 protein', 'high protein', '1370 calories' ],
        'affordable': ['30pc nuggets, waffle fries', '105 protein', 'high protein', '1370 calories' ],
        'healtier': ['2 mcchickens, 1 big mac', '53 protein', 'affordable because u can use mcpoints']
    },

    2000:{
        'brekky': ['TODO', '40 protein', 'brekky'],
        'affordable': ['5 mcdoubles', '110 protein', 'high protein'],
        'healtier': ['5 mcchickens, or 5 spicy mcchickens', '70 protein', 'healtierish']
    },

    simon:{
        'brekky': ['4 oatmeal packages, 4 tbl spoon pb2, 1cup almond milk', 'todo protein', 'brekky', '550 calories'],
        'affordable': ['protein shake', '85 protein', 'high protein', '680 calories'],
        
    }
    
}

//todo add ability to add, 550 + 1000 = 1550





app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res)=> {
    console.log(req.body)
})

app.get('/api/:name', (request, response)=>{
    const caloriesName = request.params.name.toLowerCase()
    if(calories[caloriesName]){
        response.json(calories[caloriesName])
    }else{
        response.json(calories['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`the server is now running on port ${PORT}! Betta Go catch it`)
})






