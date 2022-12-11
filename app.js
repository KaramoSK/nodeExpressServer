const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());


app.listen(port,() => {console.log(`Listening on ${port}`)});


let users = [
    {
        id: 1,
        name: "John"
    },
    {
        id:3,
        name: "Lisa"     
    }
]

app.get('/users', (req, res) => {
    res.send({
         sucsses:true,
        message: 'users found',
        data: users
    })
})

app.post('/users', (req, res) => {
    
    let name = req.body.name

    if(name){
        
        users.push({
        id:(users.length + 1).toString(),
        name: name 
        })
        res.send({
            sucsses:true,
            message: 'user added',
            data: users
        })
    }else{
        res.send({
            sucsses: false,
            message: 'validation erros',
            errors: [
                {
                    field: "name",
                    message: "Cannot be null"
                }
            ]
        })
    }    
})

app.delete('/users/:id', (req, res) => {
    let id = req.params.id
    let newUser = users.filter(user => user.id != id)
        users = newUser

        res.send({
            sucsses:true,
            message: "user deleted"
        })
    
})

app.put('/users/:id', (req, res) => {
    let id = req.params.id
    let name = req.body.name

    if(name) {
        let index = users.findIndex(user => user.id == id)

    users[index] = {
        ...users[index],
        name:name
    }

    res.send({
        sucsses: true,
        message: "user updated",
        data: users
    }) 
    }else{
        res.send({
            sucsses: false,
            message: 'validation erros',
            errors: [
                {
                    field: "name",
                    message: "Cannot be null"
                }
            ]
        })
    } 
   
})