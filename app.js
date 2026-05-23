let activeGame = "all";
let cart = [];

const items = [

  // DOTA 2
  {
    id: 1,
    name: "Anti-Mage — Shadow Blade Skin",
    game: "dota2",
    price: 12,
    image: "images/antimage.jpg"
  },

  {
    id: 2,
    name: "Pudge — Crimson Hook Edition",
    game: "dota2",
    price: 18,
    image: "images/pudge.jpg"
  },

  {
    id: 3,
    name: "Invoker — Ethereal Arcana",
    game: "dota2",
    price: 45,
    image: "images/invoker.jpg"
  },

  {
    id: 4,
    name: "Juggernaut — Golden Fury",
    game: "dota2",
    price: 20,
    image: "images/juggernaut.jpg"
  },

  {
    id: 5,
    name: "Shadow Fiend — Dark Soul Set",
    game: "dota2",
    price: 25,
    image: "images/shadowfiend.jpg"
  },

  // CS2
  {
    id: 6,
    name: "AK-47 — Crimson Web Skin",
    game: "cs2",
    price: 30,
    image: "images/ak47.jpg"
  },

  {
    id: 7,
    name: "AWP — Neon Hunter",
    game: "cs2",
    price: 60,
    image: "images/awp.jpg"
  },

  {
    id: 8,
    name: "M4A4 — Dragon Spirit",
    game: "cs2",
    price: 35,
    image: "images/m4a4.jpg"
  },

  {
    id: 9,
    name: "Desert Eagle — Gold Royal",
    game: "cs2",
    price: 22,
    image: "images/deagle.jpg"
  },

  {
    id: 10,
    name: "USP-S — Silent Shadow",
    game: "cs2",
    price: 18,
    image: "images/usps.jpg"
  },

  // RUST
  {
    id: 11,
    name: "Rust Armor — Wasteland Set",
    game: "rust",
    price: 28,
    image: "images/rustarmor.jpg"
  },

  {
    id: 12,
    name: "AK Rust — Survivor Skin",
    game: "rust",
    price: 32,
    image: "images/rustak.jpg"
  },

  {
    id: 13,
    name: "Metal Door — Crimson Guard",
    game: "rust",
    price: 40,
    image: "images/metaldoor.jpg"
  },

  {
    id: 14,
    name: "Thompson — Desert Storm",
    game: "rust",
    price: 26,
    image: "images/thompson.jpg"
  },

  {
    id: 15,
    name: "Bolt Rifle — Night Hunter",
    game: "rust",
    price: 38,
    image: "images/boltrifle.jpg"
  }

];

function setGame(game) {
  activeGame = game;
  renderItems();
}

function renderItems() {
  const search = document.getElementById("search").value.toLowerCase();
  const container = document.getElementById("items");

  const filtered = items.filter(i =>
    (activeGame === "all" || i.game === activeGame) &&
    i.name.toLowerCase().includes(search)
  );

  container.innerHTML = filtered.map(item => {

    let img = "";

    if (item.id === 1) img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Zo2Nx1T0Ts-Ubc3n5X7FuCeBMT2yWBZMtQ&s";
    if (item.id === 2) img = "https://dota2.ru/img/uploads/18/04/1049466.jpg";
    if (item.id === 3) img = "https://cdn.steamstatic.com/apps/dota2/videos/international2019/acolyteofthelostarts/kid_invoker_model.jpg";
    if (item.id === 4) img = "https://cdn.sanity.io/images/6znhzi10/production/066f484b65e652b7a433e72b7834eefed939d666-800x417.png?w=768&auto=format";
    if (item.id === 5) img = "https://w0.peakpx.com/wallpaper/490/410/HD-wallpaper-shadow-fiend-shadow-fiend-dota-2.jpg";

    if (item.id === 6) img = "https://cslabez.com/wp-content/uploads/2023/10/AK47-Weapon-CS2.jpg";
    if (item.id === 7) img = "https://skinflow.gg/_nuxt/atheris.DjyUY76q.webp";
    if (item.id === 8) img = "https://images.squarespace-cdn.com/content/v1/61d864177f3a131e371d0db1/1722587400080-785A70WSICGRUZO7KOAP/20240801144145_1.jpg ";
    if (item.id === 9) img = "https://cdn.esportfire-services.com/web/assets/images/article_images/01032026_Best_Cheap_Desert_Eagle_Skins_in_CS2_2026_pic2.jpg";
    if (item.id === 10) img = "https://bitskins.com/blog/content/images/2023/12/1--3-.jpg";

    if (item.id === 11) img = "https://tradeit.gg/blog/wp-content/uploads/2025/11/Best-Full-Metal-Kit-in-Rust-Snow-1024x576.webp";
    if (item.id === 12) img = "https://app.skin.land/blogfiles/v4xaol3IGNgR89vb2O4T7uORoHbVkjIxxD2K0G3j.png ";
    if (item.id === 13) img = "https://i.redd.it/a-new-rust-metal-door-skin-would-you-like-to-see-this-in-v0-yjsntfvbvdag1.jpg?width=2560&format=pjpg&auto=webp&s=605131c7de32595a6bb6b0364b3847723f764a19";
    if (item.id === 14) img = "https://cdn.esportfire-services.com/web/assets/images/article_images/25112023_best_cheap_Thompson_pics_9-min.jpg";
    if (item.id === 15) img = "https://cdn.esportfire-services.com/web/assets/images/article_images/15112023_Best_Cheap_Rust_Skins_pic11-min.jpg";

    return `
      <div class="card">

        <div class="img-box">
          <img src="${img}">
        </div>

        <div class="card-content">
          <h3>${item.name}</h3>
          <p class="price">$${item.price}</p>

          <button onclick="addToCart(${item.id})">
            🛒 Add to inventory
          </button>
        </div>

      </div>
    `;
  }).join("");
}

function addToCart(id) {
  const item = items.find(i => i.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;

  document.getElementById("cartItems").innerHTML =
    cart.map(i => `<p>⚡ ${i.name} — $${i.price}</p>`).join("");

  const total = cart.reduce((s, i) => s + i.price, 0);
  document.getElementById("total").innerText = "💰 Total power: $" + total;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

document.getElementById("cartBtn").onclick = toggleCart;

function checkout() {
  alert("🔥 Purchase completed! Welcome to the Game Universe!");
  cart = [];
  updateCart();
  toggleCart();
}

renderItems();
