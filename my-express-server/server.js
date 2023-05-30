const express = require("express");
const app = express();
app.get("/", (request, response) => {
    response.send("Hello");
    console.log(response);
});
app.get("/contact",(req,res)=>{
    res.send("Contact me at +91 9340034443");
})
app.get("/about",(req,res)=>{
    res.send("<h1>Hey! My name is Harsh.</h1>");
})
app.listen(3000, () => {
    console.log("Server started on port 3000");
});