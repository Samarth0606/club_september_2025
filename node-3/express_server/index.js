const express = require('express') // function
const app = express() // object => instance of your application

//api ('/' = root route)
app.get( '/' , (req, res) => {
    res.send('Hello World!')
} )

app.get( '/sam' , (req, res) => {
    res.send('Sammy bhai is here')
} )

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

// http methods (5)
// GET, POST, PUT , PATCH , DELETE