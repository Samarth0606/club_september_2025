const mongoose = require('mongoose');

// schema
const restaurantSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    rating: String,
    deliveryTime: String,
    cuisines: String
})

// model
const RestaurantModel = mongoose.model('Restaurant' , restaurantSchema )

module.exports = RestaurantModel;