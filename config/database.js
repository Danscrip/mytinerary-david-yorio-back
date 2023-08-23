import mongoose from "mongoose";

mongoose.connect("mongodb+srv://dfyorio:0tLnOdSjyKXNCvfY@cluster0.t8zv5lc.mongodb.net/cities")
.then(()=>{
    console.log("database connected");
})
.catch(()=>{
    console.log("database connection failed");
})