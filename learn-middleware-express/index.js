const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.use((req, res, next) => {
    res.send('Hello Middleware')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Example app listening on port http://localhost:3000')
})