const {Router}= require('express');
const router = Router();

router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/layoutsSignup',(req,res)=>{
    res.render('signup');
});

router.get('/layoutsLogin',(req,res)=>{
    res.render('login');
});

router.get('/layoutsRegistro',(req,res)=>{
    res.render('registro');
});
module.exports =router;
