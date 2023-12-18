const express = require('express')
const app = express()
const port = 3000

app.use(express.static(`stuff`))

app.get('/colou?r', (req, res) => {
    res.send('\ngot you\n')
})

app.get(/i*fly?$/, (req, res) => {
    res.send('\nIt is true \n')
})

//this will match the app anywhere in the string, meaning no matter how you write the path, as long as you have the word apple, it will find it and it will work
app.get(/i*apple$/, (req, res) => {
    res.send('\nWe have an apple for you\n')
})

app.route('banana')
    .get((req, res) => {
        res.send('\nget resquest\n')
    })
    .put((req, res) => {
        res.send('\nget put\n')
    })
    .delete((req, res) => {
        res.send('\nget delete\n')
    })


app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

