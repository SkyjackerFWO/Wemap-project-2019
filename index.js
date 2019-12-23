const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(port, () => console.log(`Example app listening on port ${port}!`));