const cart = [];
let cartTotal = 0;

const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');
const cartSection = document.querySelector('.cart-section');

function updateCart() {
   
    cartItems.innerHTML = '';
    cartTotal = 0;

   
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.quantity} - PHP ${item.price * item.quantity}`;
        cartItems.appendChild(li);
        cartTotal += item.price * item.quantity;
    });

   
    cartCount.textContent = cart.length;
    cartCount.style.display = cart.length > 0 ? 'inline-block' : 'none';
    totalPrice.textContent = `PHP ${cartTotal.toFixed(2)}`;


    cartSection.style.display = cart.length > 0 ? 'block' : 'none';
}


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        const quantityInput = button.closest('.box').querySelector('input[type="number"]');
        const quantity = parseInt(quantityInput.value);

        
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ name, price, quantity });
        }

        updateCart();
        alert(`${quantity} ${name} added to cart!`);
    });
});


cartIcon.addEventListener('click', () => {
    cartSection.style.display = cartSection.style.display === 'block' ? 'none' : 'block';
});


checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert(`Order placed successfully! Total: PHP ${cartTotal.toFixed(2)}`);
    cart.length = 0; 
    updateCart();
});



