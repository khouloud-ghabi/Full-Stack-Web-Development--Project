const express = require('express');
const router = express.Router();
const {Users} = require("../models"); 
const bcrypt = require ("bcrypt");


router.post('/',async (req,res)=>{
    const {userName, password} = req.body;
    bcrypt.hash(password,10).then((hash)=>{
       Users.create({
        userName : userName,
        password: hash,
       });
       res.json("Success")
    })
});

router.post('/login',async(req,res)=>{
    const {userName, password} = req.body;
    const user = await Users.findOne({where: { userName:userName } });
    if (!user) res.json({ error: "User Doesn't Exist" });
});

module.exports = router;
