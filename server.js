const express = require('express');
const path = require('path');
const app = express()
const port = 8000

const userRoute = require('./routes/user')


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("home")
})

app.use('/user/', userRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})