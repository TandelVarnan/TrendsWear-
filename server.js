const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 


const products = [
  { id: 1, name: "Denim Jacket", price: 49.99, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Summer Dress", price: 39.99, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Casual Shirt", price: 29.99, image: "https://via.placeholder.com/200" }
];


app.get("/api/products", (req, res) => {
  res.json(products);
});


app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact Form Submitted:", { name, email, message });
  res.json({ status: "success", message: "Thank you for contacting us!" });
});


app.post("/api/add-to-cart", (req, res) => {
  const { productId } = req.body;
  console.log("Product added to cart:", productId);
  res.json({ status: "success", message: "Product added to cart!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
  const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
  const message = contactForm.querySelector('textarea').value;

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  const data = await res.json();
  alert(data.message);
  contactForm.reset();
});
