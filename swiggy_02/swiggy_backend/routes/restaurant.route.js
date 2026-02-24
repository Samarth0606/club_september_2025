const { fetchRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } = require("../controller/restaurant.controller");

function restaurantRoute(app){
    app.get('/api/restaurants' , fetchRestaurant );
    app.post('/api/restaurants' , createRestaurant );
    app.patch('/api/restaurant/:id' , updateRestaurant );
    app.delete('/api/restaurant/:id' , deleteRestaurant );
}

module.exports = restaurantRoute;

