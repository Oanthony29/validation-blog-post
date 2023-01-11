const express = require('express');
const postRouter = require('./Routers/postRouters')

const port = 1800;
const app = express();

app.use(express.json());
app.use(express.static('./uploads'))

app.listen(port,()=>{
    console.log(`Connecting...:${port}`)
})

app.get('/',(req, res)=>{
    res.send('welcome body')
})

app.use('/api', postRouter)
app.use('/uploaded-image', express.static('./uploads'))
