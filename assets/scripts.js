const cart = {
    currentPrice: 0,
    items: [],
    addItem: function(cookie, price) {
        // add a cookie (string) to the items array
    this.items.push(cookie)
        //add the price (number) to the currentPrice properties
    this.currentPrice= this.currentPrice + price 
    },
    clear: function() {
        //reset the currentPrice and items properties
        this.currentPrice= 0
        this.items= []
    },
}


function addToCart(cookie) {
    /* 
        PRICES
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
        
    */
   
   console.log('The user is adding this type of cookie to their cart: ' , cookie) 



   //add 1 to the itemCount variable
   //add the correct price to the currentPrice variable
   if (cookie == 'peanut butter'){cart.addItem(cookie, 20)}
   if (cookie == 'sandies') {cart.addItem(cookie, 30)}
   if (cookie == 'party press') {cart.addItem(cookie, 35)}
   if (cookie == 'chocolate chip') {cart.addItem(cookie, 25)}

   document.querySelector(".hoverText").innerHTML = cart.currentPrice
    console.log(cart)
    document.getElementById("cartItems").innerHTML= cart.items.length
}



function checkout() {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    window.alert(`Item Count: ${cart.items.length} Total Cost: ${cart.currentPrice}`)
    prompt(`What is your name and address so we can bill you and send you your purchases?`)
    cart.clear()
    document.querySelector(".hoverText").innerHTML = cart.currentPrice
    console.log(cart)
    document.getElementById("cartItems").innerHTML= cart.items.length
}


function darkMode() {
	document.querySelector("body").style.backgroundColor="navy"
    document.querySelector("body").style.color="white"
}