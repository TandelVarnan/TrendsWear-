let cartCount = localStorage.getItem("cartCount") || 0;

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    localStorage.setItem("cartCount", cartCount);
    alert("Item added to cart!");
  });
});
