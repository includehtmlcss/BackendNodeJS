const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    const url = "https://us21.api.mailchimp.com/3.0/lists/60889ea76f"
    const options = {
        method: "POST",
        auth: "erharshparwal:7be61a2fb211069ed0cfadf2d7d583e0-us21"
    }
    const jsonData = JSON.stringify(data);
    const request = https.request(url, options, (response) => {
        response.on("data", (data) => {
            console.log(response.statusCode);
        })
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        }
        else {
            res.sendFile(__dirname + "failure.html");
        }
    })
    request.write(jsonData);
    request.end();
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

// 7be61a2fb211069ed0cfadf2d7d583e0-us21
// 60889ea76f