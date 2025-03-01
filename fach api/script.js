let container = document.getElementById("container");
let cart = document.getElementById("cart-count");

// Get the number of carts from localStorage or set to 0 if not found
let count = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;

// get cart items from localStorage or initialize an empty array
let cartitems = localStorage.getItem("cartitems")
    ? JSON.parse(localStorage.getItem("cartitems")) : [];

// Update cart count display
cart.innerText = count;

// Fetch product data from FakeStoreAPI
fetch("https://fakestoreapi.com/products")
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
        // Loop through each product and add it to the container
        data.forEach(product => {
            container.innerHTML += `
            <div class="product">
                <div class="image-container">
                    <img src="${product.image}" alt="Product Image">
                </div>
                <div class="details">
                    <span class="rate">Rating: ${product.rating.rate} (${product.rating.count} reviews)</span>
                    <span class="price">$${product.price}</span>
                    <h3 class="heading">${product.title}</h3>
                    <h5 class="category">Category: ${product.category}</h5>
                    <p class="description">${product.description}</p>
                    <button class="add-to-cart" data-id="${product.id}" data-title="${product.title}"
                        data-price="${product.price}"
                        data-image="${product.image}">Add to Cart</button>
                </div>
            </div>`;
        });

        // Add event listeners to all 'Add to Cart' buttons
        let btn = document.querySelectorAll(".add-to-cart");
        btn.forEach(button => {
            button.addEventListener("click", (event) => {
                count++; // Increase cart count
                cart.innerText = count; // Update cart display
                localStorage.setItem("cartCount", count); // Save updated count to localStorage

                // Create new cart item object
                let item = {
                    id: event.target.dataset.id,
                    title: event.target.dataset.title,
                    price: event.target.dataset.price,
                    image: event.target.dataset.image,
                    quantity: 1
                };

                // Check if item already exists in cart
                let existingItem = cartitems.find(i => i.id === item.id);
                if (existingItem) {
                    existingItem.quantity++; // Increase quantity if item exists
                } else {
                    cartitems.push(item); // Add new item if not in cart
                }

                // Save updated cart to localStorage
                localStorage.setItem("cartitems", JSON.stringify(cartitems));
                updateCart(); // Refresh cart display
            });
        });
    })
    .catch(error => console.log('Error:', error)); // Log errors if API call fails

// Select cart and cart box elements
let cartCont = document.querySelector(".cart");
let cartBox = document.querySelector(".cart-box");

// Toggle cart visibility on click
cartCont.addEventListener("click", () => {
    cartBox.classList.toggle("cart-box2");
    updateCart(); // Refresh cart display
});

// Function to update cart display
function updateCart() {
    let cartBox = document.querySelector(".cart-box");
    cartBox.innerHTML = ""; // Clear existing cart content
    let totalQuantity = 0; // Initialize total quantity

    // Loop through cart items and display them
    cartitems.forEach((item, index) => {
        totalQuantity += item.quantity;
        cartBox.innerHTML += `
        <div id="add-product">
            <img class="add-img" src="${item.image}" alt="error">
            <h3 class="add-heading">${item.title}</h3>
            <span class="add-price">$${(item.price * item.quantity).toFixed(2)}</span>
            <div class="add-item">
                <i class="fa-solid fa-chevron-left decrease" data-index="${index}"></i>
                <span>${item.quantity}</span>
                <i class="fa-solid fa-chevron-right increase" data-index="${index}"></i>
            </div>
        </div>`;
    });

    // Update cart count in UI and localStorage
    cart.innerText = totalQuantity;
    localStorage.setItem("cartCount", totalQuantity);
    localStorage.setItem("cartitems", JSON.stringify(cartitems));

    // Increase quantity event listener
    document.querySelectorAll(".increase").forEach(btn => {
        btn.addEventListener("click", (e) => {
            let index = e.target.dataset.index;
            cartitems[index].quantity++; // Increase item quantity
            count++; // Update total count
            updateCart(); // Refresh cart display
        });
    });

    // Decrease quantity event listener
    document.querySelectorAll(".decrease").forEach(btn => {
        btn.addEventListener("click", (e) => {
            let index = e.target.dataset.index;
            if (cartitems[index].quantity > 1) {
                cartitems[index].quantity--; // Decrease quantity if more than 1
                count--;
            } else {
                count -= cartitems[index].quantity; // Deduct full quantity before removing
                cartitems.splice(index, 1); // Remove item if quantity is 1
            }
            updateCart(); // Refresh cart display
        });
    });
}
