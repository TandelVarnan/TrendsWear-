document.addEventListener("DOMContentLoaded", () => {
  const cartCount = localStorage.getItem("cartCount") || 0;
  document.getElementById("cart-count").textContent = cartCount;
});
