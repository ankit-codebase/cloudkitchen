const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50; // adjust for header height
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});



// Create main container
const specialCon = document.createElement("div");
specialCon.id = "special-con";

// Heading
const heading = document.createElement("h2");
heading.textContent = "Today's Specials";
specialCon.appendChild(heading);

// Flex container
const flexDishes = document.createElement("div");
flexDishes.id = "flex-dishes";
specialCon.appendChild(flexDishes);

// Dish Data
const dishesData = [
  {
    id:"7",
    img: "ankit.com",
    alt: "Paneer Thali",
    name: "Special Paneer Thali",
    desc: "A wholesome meal with paneer curry, dal, rice, and roti.",
    price: "₹180",
    orderLink: "https://wa.me/911234567890?text=Hi!%20I%20want%20to%20order%20the%20Special%20Paneer%20Thali."
  },
  {
    img: "ankit.com",
    alt: "Aloo Thali",
    name: "Aloo Thali",
    desc: "Delicious thali with spiced potato curry, rice, dal, and soft rotis.",
    price: "₹150",
    orderLink: "https://wa.me/911234567890?text=Hi!%20I%20want%20to%20order%20the%20Aloo%20Thali."
  },
  {
    img: "ankit.com",
    alt: "Salad Bowl",
    name: "Healthy Salad Bowl",
    desc: "A refreshing mix of vegetables with tangy dressing.",
    price: "₹120",
    orderLink: "https://wa.me/911234567890?text=Hi!%20I%20want%20to%20order%20the%20Healthy%20Salad%20Bowl."
  }
];

// Generate dish cards
dishesData.forEach(dish => {
  const dishDiv = document.createElement("div");
  dishDiv.id = "dishes";

  const imgDiv = document.createElement("div");
  imgDiv.id = "dish-img";
  const img = document.createElement("img");
  img.src = dish.img;
  img.alt = dish.alt;
  imgDiv.appendChild(img);

  const infoDiv = document.createElement("div");
  infoDiv.id = "dish-info";

  const title = document.createElement("h3");
  title.textContent = dish.name;
  title.style.fontSize = "20px";
  title.style.padding = "10px";
  title.style.fontWeight = "700";

  const desc = document.createElement("p");
  desc.textContent = dish.desc;
  desc.style.padding = "10px";

  const orderPrice = document.createElement("div");
  orderPrice.id = "order-price";

  const price = document.createElement("span");
  price.textContent = dish.price;

  const orderBtn = document.createElement("button"); //change from a tag to button
  
  orderBtn.textContent = "Add to Cart";
  orderBtn.className ="bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300";

  orderPrice.append(price, orderBtn);
  infoDiv.append(title, desc, orderPrice);
  dishDiv.append(imgDiv, infoDiv);
  flexDishes.appendChild(dishDiv);
});

// Append to the page
document.getElementById("todayspecial").appendChild(specialCon);




// menu section

// Select the container
const foodList = document.getElementById("food-list");

// Food items data
const foods = [
  {
    id:"1",
    category: "veg",
    img: "ankit.com",
    name: "Dal Makhani",
    desc: "Creamy lentils, a timeless classic.",
    price: 180,
    link: "dal-makhani"
  },
  {
    id:"2",
    category: "sweets",
    img: "ankit.com",
    name: "Gulab Jamun",
    desc: "Soft, sweet, and soaked in syrup.",
    price: 120,
    link: "gulab-jamun"
  },
  {
    id:"3",
    category: "veg",
    img: "ankit.com",
    name: "Veg Pulao",
    desc: "Fragrant rice with mixed vegetables.",
    price: 140,
    link: "veg-pulao"
  },
  {
    id:"4",
    category: "salads",
    img: "ankit.com",
    name: "Green Salads",
    desc: "Green salads with mix fruit.",
    price: 180,
    link: "green-salads"
  },
  {
    id:"5",
    category: "combo",
    img: "ankit.com",
    name: "Executive Thali",
    desc: "Paneer, Dal, Mix Veg, Rice, Roti, Salad.",
    price: 240,
    link: "executive-thali"
  },
  {
    id:"6",
    category: "sweets",
    img: "ankit.com",
    name: "Pastry",
    desc: "Fresh cream, chocolate pastry.",
    price: 100,
    link: "pastry"
  }
];

// Function to display all cards dynamically
function displayFoods(items) {
  foodList.innerHTML = ""; // clear old items

  items.forEach(food => {
    const card = document.createElement("div");
    card.classList.add("food-card");
    card.setAttribute("data-category", food.category);

    card.innerHTML = `
      <img src="${food.img}" alt="${food.name}">
      <h3>${food.name}</h3>
      <p>${food.desc}</p>
      <div class="order-price">
        <span>₹${food.price}</span>
        <button>Add to Cart</button>
      </div>
    `;

    foodList.appendChild(card);
  });
}

// Show all foods initially
displayFoods(foods);

// Filtering Logic
const buttons = document.querySelectorAll(".menus-button");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // remove active class from all buttons
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    if (category === "all") {
      displayFoods(foods);
    } else {
      const filtered = foods.filter(f => f.category === category);
      displayFoods(filtered);
    }
  });
});


//Order Section (Cart)

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

  const whatsappNumber = "917033433399"; // Replace with your business number
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${orderText}`;

  window.open(whatsappURL, "_blank");
});




