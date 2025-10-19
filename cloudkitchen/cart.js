const cartItemsContainer = document.getElementById("cart-items");
const totalPriceContainer = document.getElementById("total-price-container");
const totalPriceEl = document.getElementById("total-price");
const emptyCartMessage = document.getElementById("empty-cart-message");
const whatsappOrderBtn = document.getElementById("whatsapp-order");

//customer details

const customerName = document.getElementById("customer-name");
const customerPhone = document.getElementById("customer-phone");
const customerAddress = document.getElementById("customer-address");

let cart = [];

//function to update the cart display
function updateCart(){
  cartItemsContainer.innerHTML = "";

  if(cart.length === 0){
    emptyCartMessage.style.display = "block";
    totalPriceContainer.style.display = "none";
    return;
  }
  emptyCartMessage.style.display = "none";
  totalPriceContainer.style.display ="block";

  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button class="remove-btn" data-index="${index}">❌</button>
    `;
    total += item.price;
    cartItemsContainer.appendChild(li);
  });

  totalPriceEl.textContent = `₹${total}`;

}

// Add to cart button event (works for all "Add to Cart" buttons)
document.body.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && e.target.textContent === "Add to Cart") {
    const card = e.target.closest(".food-card") || e.target.closest("#dishes");
    //
 // Add a visual confirmation
                    e.target.textContent = 'Added!';
                    setTimeout(() => {
                        e.target.textContent = 'Add to Cart';
                    }, 1000);

    //

    const name = card.querySelector("h3").textContent;
    const priceText = card.querySelector(".order-price span")?.textContent || e.target.previousElementSibling.textContent;
    const price = parseInt(priceText.replace("₹", "").trim());

    cart.push({ name, price });
    updateCart();
  }

  // Remove item button
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    cart.splice(index, 1);
    updateCart();
  }
});

// WhatsApp Order Button
whatsappOrderBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const name = customerName.value.trim();
  const phone = customerPhone.value.trim();
  const address = customerAddress.value.trim();

  if (!name || !phone || !address) {
    alert("Please fill out all your details before ordering!");
    return;
  }

  let orderText = `*New Food Order*%0A%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A🏠 Address: ${address}%0A%0A🧾 *Order Details:*%0A`;

  let total = 0;
  cart.forEach(item => {
    orderText += `• ${item.name} - ₹${item.price}%0A`;
    total += item.price;
  });

  orderText += `%0A💰 *Total:* ₹${total}%0A%0AThank you for ordering from *Ankit's Kitchen!* 🍽️`;

  const whatsappNumber = "917619766445"; // Replace with your business number
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${orderText}`;

  window.open(whatsappURL, "_blank");
});
