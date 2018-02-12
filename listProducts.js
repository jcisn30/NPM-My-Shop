var faker = require("faker");

console.log("===================");
console.log("Welcome to My Shop!");
console.log("===================");

function list(){
for(var i = 0; i < 10; i++){
    var randomProduct = faker.commerce.productName();
    var randomNum = faker.commerce.price();
    console.log(randomProduct + " - $" + randomNum);
    }
}

list();

//for(var i = 0; i < 10; i++){
    //console.log(faker.commerce.productName() + " - $" faker.commerce.price());
//}






