const RestaurantModel = require("../model/Restaurant.model")


async function fetchRestaurant(req,res){
    const allRestaurants = await RestaurantModel.find() //return promise
    // res.status(200).send(allRestaurants)
    res.status(200).json({restaurant: allRestaurants})
}

async function createRestaurant(req,res){
    let {name,rating,cuisines,deliveryTime, imageUrl} = req.body;
    const newRestaurant = await RestaurantModel.create( {name,rating,cuisines,deliveryTime, imageUrl} );
    res.status(201).json(newRestaurant)
}

module.exports = {fetchRestaurant, createRestaurant}