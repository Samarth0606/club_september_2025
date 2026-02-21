const express = require('express') // function
const app = express() // object => instance of your application

// body parsing middleware
app.use(express.json()) // for parsing application/json

//api ('/' = root route)
app.get( '/' , (req, res) => {
    res.send('Hello World!')
} )

app.get( '/sam' , (req, res) => {
    res.send('Sammy bhai is here')
} )

app.post('/sam' , (req, res) => {
    console.log(req.body); //by default - body parsing middleware
    res.send('post bhai is here')
})

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

// http methods (5)
// GET, POST, PUT , PATCH , DELETE