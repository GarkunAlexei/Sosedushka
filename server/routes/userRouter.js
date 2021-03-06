const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');

router.route('/check')
.post((req, res) => {
    if(req.session.user){
       return res.status(200).json({user: req.session.user})
    }
 res.sendStatus(401);
});

router.route('/signup')
.post(async (req, res) => {
    const {email, login, password} = req.body;
    // console.log(req.body);
    if(email && login && password){
        const cryptPass = await bcrypt.hash(password, Number(process.env.SALT_ROUND))
        try{
          const currentUser =  await User.create({...req.body, password:cryptPass})
          req.session.user = {id:currentUser.id, login:currentUser.login, role_id: currentUser.role_id}
          return res.json({user:{id:currentUser.id, login:currentUser.login, role_id: currentUser.role_id}})
        }catch(err){
            console.log(err)
            return res.sendStatus(500)
        }
    } else {
        return res.sendStatus(500)
    }
});

router.route('/signin')
.post(async (req, res) => {
    const {email, password} = req.body;
    if(email && password){
        try{
            const currentUser = await User.findOne({where:{email}})
            if(currentUser && await bcrypt.compare(password, currentUser.password)){
                req.session.user = {id:currentUser.id, login:currentUser.login, role_id: currentUser.role_id}
                return res.json({user:{id:currentUser.id, login:currentUser.login,role_id: currentUser.role_id}})
            } else {
                return res.sendStatus(500)
            }
        }catch(err){
            console.log(err)
            return res.sendStatus(500)
        }
    }else{
        return res.sendStatus(500)
    }
})



router.route('/logout')
.post((req, res) => {
    req.session.destroy()
    res.clearCookie('somename').sendStatus(200)
});

module.exports = router;
