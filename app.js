
const { products, categories } = window;
console.log({ products, categories }, "Store Data");
var nav_menu = document.querySelector("#menu")
var cat_title = document.querySelector("#selected-category")

var body = document.getElementsByTagName("body")[0];
var tab = document.createElement("table");
tab.setAttribute("id", "table_id");
var tab_body = document.createElement("tbody");
tab_body.setAttribute("id", "table_body_id");
let row;
var selected_index;
let len = products.length;
let selected_cat_id;
let selected_cat_name;

window.addEventListener("load", function () {
  for (var i = 0; i < categories.length; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = categories[i].name;
    btn.setAttribute("id", categories[i].id);
    btn.setAttribute("class", "c_button");
    nav_menu.appendChild(btn);
  }

  for (var i = 0; i < len; i++) {
    row = document.createElement("tr");
    if (window.products[i].categories == "c1") {
      selected_index = i;
      row.insertCell().textContent = window.products[selected_index].title;
      row.insertCell().textContent = window.products[selected_index].description;
      row.insertCell().textContent = window.products[selected_index].price;
      tab_body.appendChild(row);
    }
  }
  tab.appendChild(tab_body);
  body.appendChild(tab);

  document.querySelectorAll('.c_button').forEach(item => {
    item.addEventListener('click', event => {
      selected_cat_id = event.target.id;
      selected_cat_name = event.target.name;

      pop_products();

    })
  })


});

function pop_products() {
  var tab_body = document.querySelector('#table_body_id');
  tab_body.innerHTML = "";


  for (var i = 0; i < len; i++) {
    let row = document.createElement("tr");
    if (window.products[i].categories == selected_cat_id) {

      row.insertCell().textContent = this.products[i].title;
      row.insertCell().textContent = this.products[i].description;
      row.insertCell().textContent = this.products[i].price;
      tab_body.appendChild(row);

    }

    tab.appendChild(tab_body);
    body.appendChild(tab);

  }
}

