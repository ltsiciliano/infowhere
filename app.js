const express = require("express");

const app = express()

const port = process.env.PORT || 4000

app.use(express.json())

app.get('/rota1', (req, res) => {
    res.send('rota 1')
})

app.get('/rota2', (req, res) => {
    res.send('rota 2')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
