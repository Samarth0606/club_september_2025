
// mongodb+srv://samarthvohraindia_db_user:IxEEuR4FELg988eI@cluster0.8sut9zn.mongodb.net/
const express = require('express');
const app =  express();
const restaurantRoute = require('./routes/restaurant.route')
const userRoute = require('./routes/user.route')

const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/code_baithak') //returns a promise
mongoose.connect('mongodb+srv://samarthvohraindia_db_user:IxEEuR4FELg988eI@cluster0.8sut9zn.mongodb.net/') //returns a promise
.then(()=>{ console.log("DB CONNECTED") })
.catch((err)=>{ console.log("DB NOT CONNECTED" , err) })

// middleware
app.use(express.json());

restaurantRoute(app)
userRoute(app)

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})








