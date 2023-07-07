const express=require('express');
const app = express();
const data = require('./newsdata.json')

app.get('/', (req, res) => {
    res.json(data);
})

app.listen(3000,()=>{
    console.log("listeing")
})