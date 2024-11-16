// Event listener for Add to Cart buttons

// For each 'add-to-cart' button on the page, we add an event listener to detect click events.
document.querySelectorAll('.add-to-cart').forEach(button => {
 
  // When the button is clicked, the function is executed.
  button.addEventListener('click', function() {
      // Get product details from data attributes

// Retrieve the product ID from the data attribute 'data-product-id' of the clicked button.
      const productId = this.getAttribute('data-product-id');

// Retrieve the product name from the data attribute 'data-product-name' of the clicked button.      
      const productName = this.getAttribute('data-product-name');

// Retrieve the product price, convert it to a floating point number using parseFloat.
      const productPrice = parseFloat(this.getAttribute('data-product-price'));

// Retrieve the product image URL from the data attribute 'data-product-image' of the clicked button.
      const productImage = this.getAttribute('data-product-image');
  
      // Create product object

// Create a product object with the retrieved details. Initialize quantity as 1.      
      const product = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
      };
  

      // Get existing cart from localStorage, or create an empty array if no cart exists
// Retrieve the cart from localStorage, parse the JSON string into an array, or create an empty array if no cart exists.      
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
      // Check if the product is already in the cart
// Use findIndex to check if the product already exists in the cart by matching the product ID.      
      const existingProductIndex = cart.findIndex(item => item.id === productId);
  
      if (existingProductIndex > -1) {
        // If the product already exists, increase its quantity
        cart[existingProductIndex].quantity += 1;
      } else {
        // Otherwise, add the product to the cart
        // If the product is not found in the cart
        // Add the new product to the cart.
        cart.push(product);
      }
  
      // Save the updated cart back to localStorage
      // Save the updated cart array back to localStorage as a JSON string.
      localStorage.setItem('cart', JSON.stringify(cart));
  
      // alert the user that the item was added to the cart
       // Show an alert message confirming that the product has been added to the cart.
      alert(`${productName} has been added to your cart!`);
    });
  });
  