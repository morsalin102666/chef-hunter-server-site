const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const allChef = require("./jsonFile/chefData.json")


app.get('/', (req, res) => {
    res.send('Wellcome to my server side')
})

app.get('/allChef', (req, res) => {
    res.send(allChef)
})

app.listen(port, () => {
    console.log(`listening port, ${port}`)
})