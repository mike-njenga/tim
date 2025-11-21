const router = require("express").Router()
const supabase = require("../supabase")

// register
 router.post("/register", async(req, res)=>{
    const {email, password} = req.body;

    const {data, error} =  await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true
    })

    if(error){
        return res.status(400).json({error: error.message})
    }

    res.json({user: data.user})
 });

 //login 

 router.post("/login", async(req, res)=>{
    const {email, password} = req.body;
    const {data, error} = await supabase.auth.signInWithPassword({
        email, 
        password
    })

    if (error){
        return res.status(400).json({error: error.message})
    }

    res.json({token: data.session.access_token});

 })

 module.exports = router;


