"use strict";
function isLegal(user) {
    return user.age > 18 ? true : false;
}
console.log(isLegal({
    firstName: "Sam",
    lastName: "Vohra",
    age: 22,
}));
