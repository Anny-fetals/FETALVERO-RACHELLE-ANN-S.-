const headerBtn = document.querySelectorAll(".header-btn");
const activeColor = document.querySelector(".active-color");

function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}
function textColor(color) {
  const circle = document.querySelector("span");
  circle.style.color = color;
}
function buttonColor(color) {
  const circle = document.querySelector(".textbox a");
  circle.style.background = color;
}
function listColor(color) {
  const circle = document.querySelector("header ul li a:hover");
  header.style.background = color;
}

//!  CHANGE BUTOTN COLOR WHEN THEME IS CHANGED

let currentColor;

headerBtn.forEach(function (e) {
  e.addEventListener("mouseover", function () {
    currentColor = activeColor.style.background;
    e.style.background = `${currentColor}`;
  });
});

headerBtn.forEach(function (e) {
  e.addEventListener("mouseout", function () {
    e.style.background = "transparent";
  });
});
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const quantityInput = e.target.previousElementSibling;
    const quantity = quantityInput.value;
    alert(`Added ${quantity} item(s) to the cart.`);
    // You can add functionality to update the cart here
  });
});
// Initialize the cart item count
let cartCount = 0;

// Function to handle the Add to Cart button click event
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const menuItem = this.parentElement; // Get the parent container of the clicked button (which is the menu item)
    const itemName = menuItem.querySelector('p').textContent; // Get the name of the menu item
    const quantity = menuItem.querySelector('input').value; // Get the quantity selected

    // Increment the cart count by the selected quantity
    cartCount += parseInt(quantity);

    // Update the cart count displayed on the cart icon
    document.getElementById('cart-count').textContent = cartCount;

    // Show the cart count (if it's greater than 0)
    document.getElementById('cart-count').style.display = cartCount > 0 ? 'inline-block' : 'none';

    // Log the item and quantity to the console for now
    console.log(`Added to cart: ${itemName}, Quantity: ${quantity}`);

    alert(`${itemName} has been added to your cart. Quantity: ${quantity}`);
  });
});
