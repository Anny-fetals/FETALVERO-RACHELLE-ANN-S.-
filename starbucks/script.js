let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
 
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
});

let cart = [];


function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cartSection = document.querySelector('.cart-section');
    
   
    cartItemsContainer.innerHTML = '';

    // Calculate the total price
    let totalPrice = 0;

    // Iterate over the cart and update the UI
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x${item.quantity} - PHP ${item.price * item.quantity}`;
        cartItemsContainer.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    // Update the total price
    totalPriceElement.textContent = `PHP ${totalPrice.toFixed(2)}`;

    // Show the cart section if there are items in the cart
    if (cart.length > 0) {
        cartSection.style.display = 'block';
    } else {
        cartSection.style.display = 'none';
    }
}

// Function to add items to the cart
function addToCart(name, price, id, quantity) {
    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name, price, id, quantity });
    }

    // Update the cart display
    updateCart();
}

// Add event listeners for all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        const id = parseInt(button.getAttribute('data-id'));
        const quantity = parseInt(document.getElementById(`${name.toLowerCase().replace(' ', '-')}-quantity`).value);

        addToCart(name, price, id, quantity);
    });
});

// Checkout Button functionality (optional)
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cart = []; // Empty the cart after checkout
    updateCart(); // Update the cart display to show it's empty
});
// Function to toggle the visibility of the cart
const cartIcon = document.getElementById('cart-icon');
const cartSection = document.querySelector('.cart-section');

// Toggle cart visibility when the cart icon is clicked
cartIcon.addEventListener('click', () => {
    cartSection.style.display = (cartSection.style.display === 'block') ? 'none' : 'block';
});

// Function to close the cart when clicking outside or on a close button
document.addEventListener('click', (event) => {
    if (!cartIcon.contains(event.target) && !cartSection.contains(event.target)) {
        cartSection.style.display = 'none';
    }
});

// Optionally, add a close button to the cart
const closeButton = document.createElement('span');
closeButton.classList.add('close-btn');
closeButton.textContent = '×';
cartSection.appendChild(closeButton);

// Close cart when the close button is clicked
closeButton.addEventListener('click', () => {
    cartSection.style.display = 'none';
});
