const router = require('express').Router();
const bcrypt = require('bcrypt');
const axios = require('axios');
const { User } = require('../db/models');

router.route('/check')
.post((req, res) => {
    if(req.session.user){
       return res.status(200).json({user: req.session.user})
    }
 res.sendStatus(401);
});

router.route('/signup')
.post(async (req, res) => {
    const {email, name, password} = req.body;
    if(email && name && password){
        const cryptPass = await bcrypt.hash(password, Number(process.env.SALT_ROUND))
        try{
          const currentUser =  await User.create({...req.body, password:cryptPass})
          req.session.user = {id:currentUser.id, name:currentUser.name, role_id: currentUser.role_id}
          return res.json({user:{id:currentUser.id, name:currentUser.name, role_id: currentUser.role_id}})
        }catch(err){
            console.log(err)
            return res.sendStatus(500)
        }
    } else {
        return res.sendStatus(500)
    }
});

router.route('/logout')
.post((req, res) => {
    req.session.destroy()
    res.clearCookie('sid').sendStatus(200)
});

module.exports = router;
