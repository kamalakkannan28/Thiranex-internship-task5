let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cart").innerHTML =

"Items in Cart : " + cart.length;
