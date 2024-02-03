///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((total, food) => total + food.price, 0)
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    const taxes = cartTotal * tax
    const finalPrice = cartTotal + taxes - couponValue
    return finalPrice
}

console.log(calcFinalPrice(9.99, 1, .06 ))
console.log(calcFinalPrice(8.99, 1, .06))
console.log(calcFinalPrice(7.99, 1, .06))
///console logs for all three

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    //First we would need the name and second, the age of the customer - the site of the reasturant should verify the age of the customer
    in this hypothetical resturant - it is more of a "Cheesecake Factory" where different types of foods and styles are on the menu, which is 
    why it will have a "favorite food" property to cater toward the customers favorite types of foods. It will also have an Email property so the 
    resturant can email them promotions, coupons, etc //
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name: 'Brandon',
    age: 30,
    favoriteFood: 'Italian',
    email: 'brajgon@gmail.com'
}
