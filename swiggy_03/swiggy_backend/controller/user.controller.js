const UserModel = require("../model/User.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function register(req,res){ 
    try {
        const {fullName, email, password} = req.body;
        const data = await UserModel.findOne({email});
        if(data){
            return res.status(409).json({message: "User Already exists"})
        }else{
            const newUser = await UserModel.create({
                fullName, 
                email, 
                password: bcrypt.hashSync(password, 10)
            })
            return res.status(201).json({user: newUser});
        }
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function login(req,res){
    try{
        const {email, password} = req.body;
        const data = await UserModel.findOne({email});
        if(!data){
            return res.status(401).json({message: "User Email Doesnot exists"})
        }else{
            let validPassword = bcrypt.compareSync(password, data.password);
            if(!validPassword){
                return res.status(403).json({message: "User credentials not matching"});
            }
            // JWT token
            var token = jwt.sign({ id: data.id }, 'SECRETKEY');
            // var token = jwt.sign({ id: data.id }, 'SECRETKEY', { expiresIn: '7h' });

            return res.status(200).send({
                user: {
                    email: data.email,
                    fullName: data.fullName
                },
                accessToken: token
            })
        }
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {register, login}