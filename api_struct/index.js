const express = require('express')
const app = express()

app.get('/sayHello', (req,res) => {
    res.json({
        messsage: "Hello user"
    })
})

app.listen(80, () => {
    console.log("API is running on port 80")
})