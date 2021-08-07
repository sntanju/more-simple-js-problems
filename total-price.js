const cart = [ 
    {name: 'laptop', price: 43000, quantity: 1},
    {name: 'shirt', price: 500 , quantity: 8},
    {name: 'watch', price:3680 , quantity: 3},
    {name: 'phone', price:55000 , quantity: 1}
];

let totalPrice = 0;

for(const product of cart){
    totalPrice = totalPrice + product.price * product.quantity;
}
console.log(totalPrice);
/*
const cart = [ 
    {name: 'laptop', price: 43000, quantity: 1},
    {name: 'shirt', price: 500 , quantity: 8},
    {name: 'watch', price:3680 , quantity: 3},
    {name: 'phone', price:55000 , quantity: 1}
];

let cartTotal = 0;

for(const product of cart){
    console.log(product);
   const productPrice = product.price * product.quantity;
   cartTotal = cartTotal + productTotal
}
console.log(cartTotal);
*/
