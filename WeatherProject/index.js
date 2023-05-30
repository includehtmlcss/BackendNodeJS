const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{

    res.sendFile(__dirname+"/index.html");
    // res.sendFile(__dirname+"/index.html");
})

app.post("/",(req,res)=>{
    var city = req.body.city;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=856efc4bbfa7e9ea43f0abe19f5f48a1";
    https.get(url,(response)=>{
        console.log(response.statusCode);
        response.on("data",(data)=>{
            const weatherData=JSON.parse(data);
            console.log(weatherData.main.temp);
            var iconName = weatherData.weather[0].icon;
            var iconUrl="https://openweathermap.org/img/wn/"+iconName+"@2x.png";
            res.write("<h1>The temperature in Indore is "+weatherData.main.temp+" degrees</h1>");
            res.write("<img src=\""+iconUrl+"\"/>");
            res.send();
        })
    })
})

app.listen(3000,()=>{
    console.log("Server started on port 3000");
})