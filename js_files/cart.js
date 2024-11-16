// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get cart data from localStorage
// Retrieve the cart data from localStorage and parse it. If no cart exists, initialize an empty array.    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Get reference to the table body where items will be displayed
 // Get the reference to the HTML element with ID 'cart-items', where cart rows will be added.    
    const cartItemsContainer = document.getElementById('cart-items');
  
     // Check if the cart is empty
    if (cart.length === 0) {
// If the cart is empty, display a message in the table indicating that the cart is empty.
      cartItemsContainer.innerHTML = '<tr><td colspan="5" class="text-center">Your cart is empty.</td></tr>';
    } else { // If the cart has items
      // Loop through each item in the cart and create the table rows
      cart.forEach(item => {
        // For each cart item, create a new table row ('tr') element.
        const row = document.createElement('tr');
        // Add classes to the row for styling purposes (responsive display).
        row.classList.add('d-block', 'd-sm-table-row');
  
        row.innerHTML = `
          <td class="py-3 ps-0">
            <div class="d-flex align-items-center">
              <img src="${item.image}" width="110" alt="${item.name}" />
              <div class="w-100 min-w-0 ps-2">
                <h5 class="d-flex animate-underline mb-2">${item.name}</h5>
                <p class="fs-xs mb-0">Color: White</p>
                <p class="fs-xs mb-0">Model: model</p>
              </div>
            </div>
          </td>
          <td class="h6 py-3">$${item.price.toFixed(2)}</td>
          <td class="py-3">
            <div class="count-input">
              <button type="button" class="btn btn-icon" onclick="updateQuantity(${item.id}, 'decrement')"><i class="ci-minus"></i></button>
              <input type="number" class="form-control" value="${item.quantity}" readonly />
              <button type="button" class="btn btn-icon" onclick="updateQuantity(${item.id}, 'increment')"><i class="ci-plus"></i></button>
            </div>
          </td>
          <td class="h6 py-3">$${(item.price * item.quantity).toFixed(2)}</td>
          <td class="text-end py-3 px-0">
            <button type="button" class="btn-close fs-sm" onclick="removeFromCart(${item.id})"></button>
          </td>
        `;
        // Insert the newly created row into the cart items table body.
        cartItemsContainer.appendChild(row);
      });
    }

    // Add event listener for the clear cart button
// Add a click event listener on the button with ID 'clear-cart' to clear the cart when clicked.    
    document.getElementById('clear-cart').addEventListener('click', clearCart);
});
  
// Update quantity in cart
function updateQuantity(productId, action) {
// Retrieve and parse the cart from localStorage. If no cart exists, initialize an empty array.  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
// Find the index of the product in the cart based on productId.    
    const productIndex = cart.findIndex(item => item.id === productId);
    
     // If the product exists in the cart
    if (productIndex > -1) {      
      if (action === 'increment') {
// If action is 'increment', increase the quantity of the product by 1.        
        cart[productIndex].quantity += 1;
      } else if (action === 'decrement' && cart[productIndex].quantity > 1) {
// If action is 'decrement', decrease the quantity by 1 (only if quantity > 1).        
        cart[productIndex].quantity -= 1;
      }
      
      // Save updated cart to localStorage
      // Save the updated cart back to localStorage as a JSON string.
      localStorage.setItem('cart', JSON.stringify(cart));
  
      // Reload the page to show updated cart
      // Save the updated cart back to localStorage as a JSON string.
      location.reload();
    }
}
  
// Remove item from cart
function removeFromCart(productId) {

// Retrieve and parse the cart from localStorage. If no cart exists, initialize an empty array.
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Filter out the item with the given productId from the cart    
    cart = cart.filter(item => item.id !== productId);
    
    // Save updated cart to localStorage
    // Save the updated cart back to localStorage.
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Reload the page to show updated cart
    // Reload the page to reflect the item removal from the cart.
    location.reload();
}

// Clear all items from cart
// Clear the cart from localStorage
function clearCart() {
    // Clear the cart from localStorage
    // Remove the cart from localStorage.
    localStorage.removeItem('cart');
  
    // Reload the page to show an empty cart
    // Reload the page to display an empty cart.
    location.reload();
}
