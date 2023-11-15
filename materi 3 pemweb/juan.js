let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

let menu = document.querySelector("#menu-btn");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

let searchForm = document.querySelector(".search-form");
let searchBox = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDafault();
};

let search = document.querySelector("#search-btn");

document.addEventListener("click", function (e) {
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

let profile = document.querySelector(".profile");

document.querySelector("#user-btn").onclick = () => {
  profile.classList.toggle("active");
};

let user = document.querySelector("#user-btn");

document.addEventListener("click", function (e) {
  if (!user.contains(e.target) && !profile.contains(e.target)) {
    profile.classList.remove("active");
  }
});

let shoping = document.querySelector(".shoping");

document.querySelector("#cart-btn").onclick = () => {
  shoping.classList.toggle("active");
};
let cart = document.querySelector("#cart-btn");

document.addEventListener("click", function (e) {
  if (!cart.contains(e.target) && !shoping.contains(e.target)) {
    shoping.classList.remove("active");
  }
});

let namaItems = ["Mie", "Bakso", "Nasgor", "Kopi", "Tea", "Susu", "IceCream"];
let hargaItems = [10000, 10000, 15000, 5000, 5000, 5000, 6000];

let itemNamaList = document.getElementById("item nama");

for (let i = 0; i < namaItems.length; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = namaItems[i];
  itemNamaList.appendChild(listItem);
}

let itemHargaList = document.getElementById("item harga");

for (let i = 0; i < hargaItems.length; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = "Rp." + hargaItems[i];
  itemHargaList.appendChild(listItem);
}
