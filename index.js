const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send('this is live server')
})

app.listen(3000)