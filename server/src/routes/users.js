const express = require('express');
const asyncHandler = require('express-async-handler');
const userServices = require('../services/userServices')
const router = express.Router();


router.post('/register', asyncHandler( async(req,res)=>{
    const {username,email, password}= req.body;
    if(!username || !email || !password){
       return res.status(201).json({message: 'Please provide your required information'})
    }
    try{
      await userServices.registerUser({username,email, password});
      res.status(201).json({message: 'user registered successfully'})

    }catch(error) {
        res.status(500).json({message: error?.message})

    }
    res.status(201).json({message: 'user registered successfully'})

}));

router.post('/login', asyncHandler(async(req,res) => {

}));


module.exports = router;