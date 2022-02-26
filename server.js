const express = require('express')
const app = express()
const router = require('./router')

const PORT = 3000

app.use(express.urlencoded({extended:false}))

app.use('/api',router)

//home route
app.get('/',(req,res)=>{
    res.send('Routing App')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})