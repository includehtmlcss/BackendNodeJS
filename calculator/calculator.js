const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    var num1=parseInt(req.body.num1);
    var num2=parseInt(req.body.num2);
    var result=num1+num2;
    res.send("Calculation result is "+result);
})

app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname+"/bmi_calculator.html");
})

app.post("/bmicalculator",(req,res)=>{
    var height=parseFloat(req.body.height);
    var weight=parseFloat(req.body.weight);
    var BMI=weight/Math.pow(height,2);
    res.send("BMI Calculation result is "+BMI);
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
})