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
    category: "saleds",
    img: "ankit.com",
    name: "Green Saleds",
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
