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
  orderBtn.textContent = "Order Now";
  orderBtn.className =
    "bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300";

  orderPrice.append(price, orderBtn);
  infoDiv.append(title, desc, orderPrice);
  dishDiv.append(imgDiv, infoDiv);
  flexDishes.appendChild(dishDiv);
});

// Append to the page
document.getElementById("todayspecial").appendChild(specialCon);





