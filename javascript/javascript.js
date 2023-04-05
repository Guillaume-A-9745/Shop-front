import Article from "./Article.js";

//creation des articles
let s9 = new Article(1, "S9, Samsung", 250, "Smartphone");
let s10 = new Article(2, "S10", "Samsung", 350, "Smartphone");
let iphone = new Article(3, "Iphone 10", "Apple", 500, "Smartphone");
let f756u = new Article(4, "F756U", "Asus", 600, "PC");
let galaxyTab = new Article(5, "GalaxyTab S7", "Samsung", 250, "Tablet");
let ipad = new Article(6, "Ipad Pro", "Apple", 750, "Tablet");

//tableau des atricles
let articles = [s9, s10, iphone, f756u, galaxyTab, ipad];

// verification sur l'affichage en console
articles.forEach((element) => {
  if (element.category == "Tablet") {
    console.log(element);
  }
});

let smartphone = document.getElementById("smartphone");
let tablet = document.getElementById("tablet");
let pc = document.getElementById("pc");
smartphone.addEventListener("click", showSmartphone);
tablet.addEventListener("click", showTablet);
pc.addEventListener("click", showPc);

//affichage de tous dans le tableau
articles.forEach((element) => {
  let newTAbleRow = document.createElement("tr");
  let newTableColunm1 = document.createElement("th");
  let newTableColunm2 = document.createElement("th");
  let newTableColunm3 = document.createElement("th");
  let newTableColunm4 = document.createElement("th");
  let newTableColunm5 = document.createElement("th");
  newTableColunm5.setAttribute("class", "col-2");
  let newTableColunm6 = document.createElement("th");

  //input de quantité
  let newInput = document.createElement("input");
  newInput.setAttribute("type", "number");
  newInput.setAttribute("class", "form-control");
  newInput.style.fontSize = "12px";
  //bouton ajouter au panier
  let newbtn = document.createElement("button");
  newbtn.setAttribute("type", "button");
  newbtn.setAttribute("class", "btn btn-primary");
  newbtn.innerHTML = "Ajouter au panier";
  newbtn.style.fontSize = "12px";

  let tableBody = document.querySelector("#tBody");
  newTAbleRow.appendChild(newTableColunm1);
  newTAbleRow.appendChild(newTableColunm2);
  newTAbleRow.appendChild(newTableColunm3);
  newTAbleRow.appendChild(newTableColunm4);
  newTAbleRow.appendChild(newTableColunm5);
  newTAbleRow.appendChild(newTableColunm6);
  newTableColunm1.innerHTML = element.id;
  newTableColunm2.innerHTML = element.name;
  newTableColunm3.innerHTML = element.brand;
  newTableColunm4.innerHTML = element.price;
  newTableColunm5.appendChild(newInput);
  newTableColunm6.appendChild(newbtn);
  tableBody.appendChild(newTAbleRow);
});
//affichage des smartphones dans le tableau
function showSmartphone() {
    let tableBody = document.querySelector("#tBody");
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.lastChild);
    }
  articles.forEach((element) => {
    if (element.category == "Smartphone") {
      let newTAbleRow = document.createElement("tr");
      let newTableColunm1 = document.createElement("th");
      let newTableColunm2 = document.createElement("th");
      let newTableColunm3 = document.createElement("th");
      let newTableColunm4 = document.createElement("th");
      let newTableColunm5 = document.createElement("th");
      newTableColunm5.setAttribute("class", "col-2");
      let newTableColunm6 = document.createElement("th");

      //input de quantité
      let newInput = document.createElement("input");
      newInput.setAttribute("type", "number");
      newInput.setAttribute("class", "form-control");
      newInput.style.fontSize = "12px";
      //bouton ajouter au panier
      let newbtn = document.createElement("button");
      newbtn.setAttribute("type", "button");
      newbtn.setAttribute("class", "btn btn-primary");
      newbtn.innerHTML = "Ajouter au panier";
      newbtn.style.fontSize = "12px";

      newTAbleRow.appendChild(newTableColunm1);
      newTAbleRow.appendChild(newTableColunm2);
      newTAbleRow.appendChild(newTableColunm3);
      newTAbleRow.appendChild(newTableColunm4);
      newTAbleRow.appendChild(newTableColunm5);
      newTAbleRow.appendChild(newTableColunm6);
      newTableColunm1.innerHTML = element.id;
      newTableColunm2.innerHTML = element.name;
      newTableColunm3.innerHTML = element.brand;
      newTableColunm4.innerHTML = element.price;
      newTableColunm5.appendChild(newInput);
      newTableColunm6.appendChild(newbtn);
      tableBody.appendChild(newTAbleRow);
    }
  });
}
//affichage des tablets dans le tableau
function showTablet() {
    let tableBody = document.querySelector("#tBody");
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.lastChild);
    }
  articles.forEach((element) => {
    if (element.category == "Tablet") {
      let newTAbleRow = document.createElement("tr");
      let newTableColunm1 = document.createElement("th");
      let newTableColunm2 = document.createElement("th");
      let newTableColunm3 = document.createElement("th");
      let newTableColunm4 = document.createElement("th");
      let newTableColunm5 = document.createElement("th");
      newTableColunm5.setAttribute("class", "col-2");
      let newTableColunm6 = document.createElement("th");

      //input de quantité
      let newInput = document.createElement("input");
      newInput.setAttribute("type", "number");
      newInput.setAttribute("class", "form-control");
      newInput.style.fontSize = "12px";
      //bouton ajouter au panier
      let newbtn = document.createElement("button");
      newbtn.setAttribute("type", "button");
      newbtn.setAttribute("class", "btn btn-primary");
      newbtn.innerHTML = "Ajouter au panier";
      newbtn.style.fontSize = "12px";

      newTAbleRow.appendChild(newTableColunm1);
      newTAbleRow.appendChild(newTableColunm2);
      newTAbleRow.appendChild(newTableColunm3);
      newTAbleRow.appendChild(newTableColunm4);
      newTAbleRow.appendChild(newTableColunm5);
      newTAbleRow.appendChild(newTableColunm6);
      newTableColunm1.innerHTML = element.id;
      newTableColunm2.innerHTML = element.name;
      newTableColunm3.innerHTML = element.brand;
      newTableColunm4.innerHTML = element.price;
      newTableColunm5.appendChild(newInput);
      newTableColunm6.appendChild(newbtn);
      tableBody.appendChild(newTAbleRow);
    }
  });
}
//affichage des pc dans le tableau
function showPc() {
    let tableBody = document.querySelector("#tBody");
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.lastChild);
    }
  articles.forEach((element) => {
    if (element.category == "PC") {
      let newTAbleRow = document.createElement("tr");
      let newTableColunm1 = document.createElement("th");
      let newTableColunm2 = document.createElement("th");
      let newTableColunm3 = document.createElement("th");
      let newTableColunm4 = document.createElement("th");
      let newTableColunm5 = document.createElement("th");
      newTableColunm5.setAttribute("class", "col-2");
      let newTableColunm6 = document.createElement("th");

      //input de quantité
      let newInput = document.createElement("input");
      newInput.setAttribute("type", "number");
      newInput.setAttribute("class", "form-control");
      newInput.style.fontSize = "12px";
      //bouton ajouter au panier
      let newbtn = document.createElement("button");
      newbtn.setAttribute("type", "button");
      newbtn.setAttribute("class", "btn btn-primary");
      newbtn.innerHTML = "Ajouter au panier";
      newbtn.style.fontSize = "12px";

      newTAbleRow.appendChild(newTableColunm1);
      newTAbleRow.appendChild(newTableColunm2);
      newTAbleRow.appendChild(newTableColunm3);
      newTAbleRow.appendChild(newTableColunm4);
      newTAbleRow.appendChild(newTableColunm5);
      newTAbleRow.appendChild(newTableColunm6);
      newTableColunm1.innerHTML = element.id;
      newTableColunm2.innerHTML = element.name;
      newTableColunm3.innerHTML = element.brand;
      newTableColunm4.innerHTML = element.price;
      newTableColunm5.appendChild(newInput);
      newTableColunm6.appendChild(newbtn);
      tableBody.appendChild(newTAbleRow);
    }
  });
}
