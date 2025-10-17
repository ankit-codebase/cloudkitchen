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

  const orderBtn = document.createElement("a");
  orderBtn.href = dish.orderLink;
  orderBtn.textContent = "Add to cart";
  orderBtn.className =
    "bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300";

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
        <a href="${food.link}">Add to Cart</a>
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

const orderSection = document.getElementById("cart");
const orderHeading = document.createElement("h2");
orderHeading.textContent = "Your Order";
orderSection.appendChild(orderHeading);

//bill generate 

const bill = document.getElementById("order-items");

bill.innerHTML = `

`





