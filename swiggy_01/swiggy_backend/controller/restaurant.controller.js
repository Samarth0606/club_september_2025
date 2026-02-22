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

async function updateRestaurant(req,res){
    let {id} = req.params;
    //  let {name,rating,cuisines,deliveryTime, imageUrl} = req.body;
    // RestaurantModel.findByIdAndUpdate(id, {name,rating,cuisines,deliveryTime, imageUrl});
    await RestaurantModel.findByIdAndUpdate(id, req.body);
    res.status(200).send("Restaurant Updated Successfully");
}

async function deleteRestaurant(req,res){
   let {id} = req.params;
   await RestaurantModel.findByIdAndDelete(id);
   res.status(200).send("Restaurant Deleted Successfully");
}

module.exports = {fetchRestaurant,createRestaurant,updateRestaurant, deleteRestaurant}