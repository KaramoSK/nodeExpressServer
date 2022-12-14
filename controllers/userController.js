const User = require('../models/User')

exports.getAllUsers = async (req, res) => {
    try {
        res.json(await User.find());
    }catch(error) {
        res.json({message: error});
    }
}

exports.getUserById = async (req, res) => {
    try {
        res.json(await User.findById(req.params.userid))
    }catch(erros) {
        res.json({message: error})
    }
}

exports.postUser = async (req, res) => {
   
    try{
        const user = new User({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            tags: req.body.tags
        })
        res.json(await user.save());
    }catch(error){
        res.json({message: error});
    }
}

exports.deleteUserById = async (req, res) => {
    try {
        res.json(await User.deleteOne({'_id':req.params.userid}));
    }catch(error) {
        res.json({message: error});
    }
}

exports.updatUser = async (req, res) => {
    try {
        res.json(await User.updateOne(
            {'_id': req.params.userid},
            {
                $set: {
                    title: req.body.title,
                    author: req.body.author,
                    content: req.body.content,
                    tags: req.body.tags
                }
            }
        ));
    }catch (error) {
        res.json({message: error});
    }
}