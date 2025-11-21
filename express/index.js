const express = require ("express")
const app = express();

app.use(express.json());


//routes
app.get("/",(req,res)=>{
    res.json({message: "welcome to api"})
})


//start server
const PORT = 5000
app.listen(PORT, console.log("server is running"))