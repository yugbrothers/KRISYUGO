// Utility function to retrieve data from localStorage
function getProductDataFromStorage() {
  return JSON.parse(localStorage.getItem('productData'));
}

// Utility function to save data to localStorage
function saveProductDataToStorage(data) {
  localStorage.setItem('productData', JSON.stringify(data));
}

// Handles the redirection from checkout.html to signin.html
function handleCheckoutToSignin() {
  const product = {
    name: new URLSearchParams(window.location.search).get('product'),
    price: new URLSearchParams(window.location.search).get('price'),
    image: new URLSearchParams(window.location.search).get('image'),
  };
  // Store product data in localStorage
  saveProductDataToStorage(product);
}

// Display product details on the signin page (signin.html)
function displayProductDetailsOnSignin() {
  const product = getProductDataFromStorage();
  if (product) {
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-price').innerText = `₹${product.price}`;
    document.getElementById('product-image').src = product.image;
  }
}

// Collects customer details and stores them along with product info in localStorage
function collectCustomerDetails() {
  const customerDetails = {
    name: document.getElementById('customer-name').value,
    email: document.getElementById('customer-email').value,
    phone: document.getElementById('customer-phone').value,
  };

  const product = getProductDataFromStorage();
  const orderDetails = {
    ...customerDetails,
    product,
  };

  // Save order details in localStorage
  saveProductDataToStorage(orderDetails);
}

// Display order review before confirmation on pay.html
function displayOrderReviewOnPay() {
  const order = getProductDataFromStorage();
  if (order) {
    document.getElementById('order-name').innerText = order.product.name;
    document.getElementById('order-price').innerText = `₹${order.product.price}`;
    document.getElementById('order-image').src = order.product.image;
    document.getElementById('customer-name').innerText = order.name;
    document.getElementById('customer-email').innerText = order.email;
    document.getElementById('customer-phone').innerText = order.phone;
  }
}

// Handle form submission on pay.html (Place Order)
function handlePlaceOrder() {
  const order = getProductDataFromStorage();
  if (order) {
    alert('Your order has been placed successfully!');
    // Clear localStorage after order is placed
    localStorage.removeItem('productData');
  }
}

// Function to handle button click and redirect to checkout.html
function goToCheckout(name, price, image) {
  localStorage.setItem("productName", name);
  localStorage.setItem("productPrice", price);
  localStorage.setItem("productImage", image);
  window.location.href = "/checkout.html";
}

// Event listener for checkout redirection to signin
if (window.location.pathname === '/checkout.html') {
  window.addEventListener('load', handleCheckoutToSignin);
}

// Event listener to display product details on signin page
if (window.location.pathname === '/signin.html') {
  window.addEventListener('load', displayProductDetailsOnSignin);
}

// Event listener to collect customer details
if (window.location.pathname === '/signin.html') {
  document.getElementById('signin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    collectCustomerDetails();
    window.location.href = '/pay.html';
  });
}

// Event listener to display order review on pay page
if (window.location.pathname === '/pay.html') {
  window.addEventListener('load', displayOrderReviewOnPay);

  // Event listener for place order button
  document.getElementById('place-order').addEventListener('click', handlePlaceOrder);
}
document.addEventListener("DOMContentLoaded", () => {
  // Check if we're on the sign-in page
  if (window.location.pathname.includes("signin.html")) {
    const form = document.getElementById("signin-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission (page refresh)

      // Optionally: you could collect user details here and store in localStorage
      // const firstName = document.getElementById("customer-firstname").value;

      // Redirect back to checkout page
      window.location.href = "/checkout.html";
    });
  }
});
