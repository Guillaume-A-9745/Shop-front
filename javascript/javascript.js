import Article from "./Article.js";

//creation des articles
let s9 = new Article(1, "S9", "Samsung", 250, "Smartphone");
let s10 = new Article(2, "S10", "Samsung", 350, "Smartphone");
let iphone = new Article(3, "Iphone 10", "Apple", 500, "Smartphone");
let f756u = new Article(4, "F756U", "Asus", 600, "PC");
let galaxyTab = new Article(5, "GalaxyTab S7", "Samsung", 250, "Tablet");
let ipad = new Article(6, "Ipad Pro", "Apple", 750, "Tablet");

//tableau des atricles
let articles = [s9, s10, iphone, f756u, galaxyTab, ipad];

/* --------------gestion du tableau d'articles------------------------------ */

//affichage de tous dans le tableau
function showProducts() {
  let tableItems = "";
  for (let i = 0; i < articles.length; i++) {
    tableItems += "<tr>";
    tableItems += "<td>" + articles[i].id + "</td>";
    tableItems += "<td>" + articles[i].name + "</td>";
    tableItems += "<td>" + articles[i].brand + "</td>";
    tableItems += "<td>" + articles[i].price + "</td>";
    tableItems += "<td>";
    tableItems +=
      '<input type="number" class="form-control quantity-input" value="1">';
    tableItems += "</td>";
    tableItems += "<td>";
    tableItems +=
      '<button class="btn btn-success add-to-cart" data-product="' +
      i +
      '">Add to Cart</button>';
    tableItems += "</td>";
    tableItems += "</tr>";
    document.querySelector("#products").innerHTML = tableItems;
  }
}
showProducts();

// Fonction pour afficher tous les produits des catégories
let AllCategories = document.getElementById("allCategories");
AllCategories.addEventListener("click", showProducts);

// Fonction pour afficher les produits triés par catégorie
let categories = document.getElementsByClassName("categories");
for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener("click", function () {
    let category = this.getAttribute("data-category");
    showProductsByCat(category);
  });
}

// Affichage des articles par catégories dans le tableau
function showProductsByCat(category) {
  let tableItems = "";
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].category === category) {
      tableItems += "<tr>";
      tableItems += "<td>" + articles[i].id + "</td>";
      tableItems += "<td>" + articles[i].name + "</td>";
      tableItems += "<td>" + articles[i].brand + "</td>";
      tableItems += "<td>" + articles[i].price + "</td>";
      tableItems += "<td>";
      tableItems +=
        '<input type="number" class="form-control quantity-input" value="1">';
      tableItems += "</td>";
      tableItems += "<td>";
      tableItems +=
        '<button class="btn btn-success add-to-cart" data-product="' +
        i +
        '">Add to Cart</button>';
      tableItems += "</td>";
      tableItems += "</tr>";
    }
  }
  document.querySelector("#products").innerHTML = tableItems;
}

/* --------------gestion du panier------------------------------ */

// Gestionnaire d'événement pour ajouter un produit au panier
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-to-cart")) {
    let index = parseInt(event.target.getAttribute("data-product"));
    let quantity = parseInt(
      event.target.parentNode.previousSibling.firstChild.value
    );
    addToCart(index, quantity);
  }
});

// Fonction pour ajouter un produit au panier
function addToCart(index, quantity) {
  let article = articles[index];
  let cartItems = document.querySelector("#productsCard");
  var cartItemIds = cartItems.querySelectorAll(".cart-item-id");
  var itemExists = false;

  // Vérifier si le produit est déjà dans le panier
  for (let i = 0; i < cartItemIds.length; i++) {
    if (cartItemIds[i].textContent == article.id) {
      let itemQuantity = parseInt(
        cartItems.querySelectorAll(".cart-item-quantity")[i].textContent
      );
      cartItems.querySelectorAll(".cart-item-quantity")[i].textContent =
        itemQuantity + quantity;
      itemExists = true;
      break;
    }
  }

  // Créer un nouvel élément de panier si le produit n'existe pas encore
  if (!itemExists) {
    let tableItems = "";
    tableItems += "<tr>";
    tableItems += "<td class='cart-item-id'>" + article.id + "</td>";
    tableItems += "<td class='cart-item-name'>" + article.name + "</td>";
    tableItems += "<td>" + article.brand + "</td>";
    tableItems += "<td class='cart-item-price'>" + article.price + "</td>";
    tableItems += "<td class='cart-item-quantity'>" + quantity + "</td>";
    tableItems += "</tr>";
    document
      .querySelector("#productsCard")
      .insertAdjacentHTML("beforeend", tableItems);
  }
  updateTotal();

  // gestion de la visibilité sur le panier
  let BasketSection = document.querySelector("#BasketSection");
  BasketSection.style.display = "inline";
}

// Fonction pour mettre à jour le total du panier
function updateTotal() {
  let total = 0;
  let cartItems = document.querySelectorAll("#productsCard tr");

  for (let i = 0; i < cartItems.length; i++) {
    let price = parseInt(cartItems[i].querySelectorAll("td")[3].textContent);
    var quantity = parseInt(cartItems[i].querySelectorAll("td")[4].textContent);
    total += price * quantity;
  }
  document.querySelector(".cart-total").textContent = total;
}

/* --------------gestion du fomulaire------------------------------ */

// gestion de la visibilité sur le formulaire
let formSection = document.querySelector("#formSection");
let btnValidateOrder = document.querySelector("#btnValidateOrder");
function displayForm() {
  formSection.style.display = "inline";
}
btnValidateOrder.addEventListener("click", displayForm);

//gestion interaction entre formulaire et modal
let btnPayOrder = document.querySelector('#btnPayOrder');


btnPayOrder.addEventListener("click", addToModal);
function addToModal() {
  let name = document.querySelector('#name').value;
  let firstname = document.querySelector('#firstname').value;
  let returnName = document.querySelector('#returnName');
  returnName.innerHTML = firstname + " " + name;
}