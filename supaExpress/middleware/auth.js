const supabase  = require("../supabase")

module.exports = async (req, resizeBy, next) =>{
    const token = req.headers.authorization.split(" ")[1];

    if(!token) return resizeBy.status(401).json({error: "missing tokens"})
    
    const {data, error} = await supabase.auth.getUser(token);

    if (error) return resizeBy.status(403).json({error: "invalid token" })
    
    req.user = data.user;

    next ();

}