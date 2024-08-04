const express = require('express');
const path = require('path');
const app = express()
const port = 8000

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })
app.set('view engine', 'ejs');
//app.set("views", path.reslove("./views"));

app.get('/', (req, res) => {
    res.render("home")
}

)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})