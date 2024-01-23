const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(cookieParser())

app.use('/admin', require('./routes/admin'))
app.use('/teater', require('./routes/teater'))
app.use('/mouvies', require('./routes/mouvies'))

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})