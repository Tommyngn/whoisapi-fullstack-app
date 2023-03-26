const whoiser = require("whoiser")
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors({
    origin: '*'
}))

app.get("/api/:search", async (req, res) => {
    let formatRequests = req.param("search")
    if (formatRequests.includes("-com")) {
        formatRequests = formatRequests.replace("-com", ".com")
    } else{
        formatRequests = formatRequests.replaceAll("-",".")
    }

    let response;
    try {
        response = await whoiser(formatRequests)
            .then((res) => {return res})
    } catch (error) {
        response = {"error": "Does not exist. Make sure Ip is valid or domain is formatted like (google.com)"}
    }

    res.json(response)
})


app.listen(process.env.PORT, () => {console.log("listening on port tomm")})