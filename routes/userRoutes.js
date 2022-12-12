const express = require('express');
const router = express.Router();

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

router.get('/users', (req, res) => {
    res.send({
         sucsses:true,
        message: 'users found',
        data: users
    })
})

router.post('/users', (req, res) => {
    
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

router.delete('/users/:id', (req, res) => {
    let id = req.params.id
    let newUser = users.filter(user => user.id != id)
        users = newUser

        res.send({
            sucsses:true,
            message: "user deleted"
        })
    
})

router.put('/users/:id', (req, res) => {
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

module.exports = router;