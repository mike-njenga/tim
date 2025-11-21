const router = require("express").Router();
const supabase =  require("../supabase")
const auth = require("../middleware/auth")

//create profile
router.post("/", async(req,res)=>{
    const {username} = req.body;

    const {data, error} = await supabase
        .from("profiles")
        .insert({username, id: req.user.id})
        .select();
    
    if (error) return res.status(400).json({error: error.message})
    
    res.json({profiles: data[0]})
})

module.exports = router;