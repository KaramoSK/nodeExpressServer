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
        res.json(await User.findById(req.params.id));
    }catch(error) {
        res.json({message: error});
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
        res.json(await User.deleteOne({'_id':req.params.id}));
    }catch(error) {
        res.json({message: error});
    }
}

exports.updateUser = async (req, res) => {
    try {
        res.json(await User.updateOne(
            {'_id': req.params.id},
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