const products = [

{
id:1,
name:"Laptop",
price:50000
},

{
id:2,
name:"Mobile",
price:20000
},

{
id:3,
name:"Headphones",
price:3000
}

];

const container = document.getElementById("product-list");

products.forEach(product=>{

container.innerHTML += `

<div class="card">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addCart(${product.id})">

Add to Cart

</button>

</div>

`;

});

function addCart(id){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(id);

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to Cart");

}
