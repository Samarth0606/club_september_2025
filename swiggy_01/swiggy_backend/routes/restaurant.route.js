const { fetchRestaurant, createRestaurant } = require("../controller/restaurant.controller");

function restaurantRoute(app){
    app.get('/api/restaurants' , fetchRestaurant );
    app.post('/api/restaurants' , createRestaurant );
}

module.exports = restaurantRoute;

