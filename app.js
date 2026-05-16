let activeGame = "all";
let cart = [];

/* 🔥 FULL DATASET (як у React, але вручну) */
const items = [
  // DOTA 2
  { id: 1, name: "Anti-Mage — Shadow Blade Skin", game: "dota2", price: 12 },
  { id: 2, name: "Pudge — Crimson Hook Edition", game: "dota2", price: 18 },
  { id: 3, name: "Invoker — Ethereal Arcana", game: "dota2", price: 45 },
  { id: 4, name: "Juggernaut — Golden Fury", game: "dota2", price: 20 },
  { id: 5, name: "Shadow Fiend — Dark Soul Set", game: "dota2", price: 25 },

  // CS2
  { id: 6, name: "AK-47 — Crimson Web Skin", game: "cs2", price: 30 },
  { id: 7, name: "AWP — Neon Hunter", game: "cs2", price: 60 },
  { id: 8, name: "M4A4 — Dragon Spirit", game: "cs2", price: 35 },
  { id: 9, name: "Desert Eagle — Gold Royal", game: "cs2", price: 22 },
  { id: 10, name: "USP-S — Silent Shadow", game: "cs2", price: 18 },

  // RUST
  { id: 11, name: "Rust Armor — Wasteland Set", game: "rust", price: 28 },
  { id: 12, name: "AK Rust — Survivor Skin", game: "rust", price: 32 },
  { id: 13, name: "Metal Door — Crimson Guard", game: "rust", price: 40 },
  { id: 14, name: "Thompson — Desert Storm", game: "rust", price: 26 },
  { id: 15, name: "Bolt Rifle — Night Hunter", game: "rust", price: 38 }
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

  container.innerHTML = filtered.map(item => `
    <div class="card">

      <div class="img-box">
        🎮 ITEM PREVIEW
      </div>

      <div class="card-content">
        <h3>${item.name}</h3>
        <p class="price">$${item.price}</p>

        <button onclick="addToCart(${item.id})">
          🛒 Add to inventory
        </button>
      </div>

    </div>
  `).join("");
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