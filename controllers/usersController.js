const User = require('../models/models')

const createUser = async(req, res) => {
    const { name, email, phone } = req.body

    const candidate = await User.findOne({email})

    if(candidate){
        return res.status(400).json({message:'User already exists'})
    }

    await User.create({name, email, phone})
    return res.status(201).json({message:'User created successfully'})
}

const getAllUsers = async(req, res) => {
    const users = await User.find()

    if(!users.length){
        return res.status(404).json({message:'User not found'})
    }

    return res.json(users)
}

module.exports = {
    createUser,
    getAllUsers
}