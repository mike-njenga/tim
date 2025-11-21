require("dotenv").config
const express = require("express")


const authRoutes  = require("./routes/auth")
const  profilesRoutes = require("./routes/profile")

const app = express();
app.use(express.json())

//route 
app.use("/auth", authRoutes);
app.use("profile", profilesRoutes);

app.get("/", (req,res)=>{
    res.json({message: "Express + Supabase API" })
})


app.listen(5000,()=> console.log("Server running on port http://localhost:5000"))