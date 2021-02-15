"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.
var firstTask = document.getElementById("first-task");

(function () {
  var div = document.createElement("div");
  div.classList.add("text-area");
  var textarea = document.createElement("textarea");
  textarea.classList.add("text-area");
  div.innerHTML = "Just click ' CTRL + E ' and change this  text";
  textarea.style.display = "none";
  firstTask.append(div, textarea);

  function changeText(event) {
    if (event.ctrlKey && event.code == "KeyE") {
      event.preventDefault();
      div.style.display = "none";
      textarea.value = div.innerHTML;
      textarea.style.display = "block";
      this.select();
    }

    if (event.ctrlKey && event.code == "NumpadAdd") {
      event.preventDefault();
      textarea.style.display = "none";
      div.innerHTML = textarea.value;
      div.style.display = "block";
    }
  }

  document.addEventListener("keydown", changeText);
})(); // Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.


var secondTask = document.getElementById("second-task");

(function () {
  var carlist = [{
    car: "BMW",
    price: 20000
  }, {
    car: "Ford",
    price: 12000
  }, {
    car: "Opel",
    price: 5000
  }, {
    car: "Mercedes",
    price: 50000
  }, {
    car: "Nissan",
    price: 17000
  }, {
    car: "Lada",
    price: 1000
  }, {
    car: "Fiat",
    price: 11000
  }, {
    car: "Porsche",
    price: 150000
  }];
  var table = document.createElement("table");
  table.classList.add("table");
  var thead = document.createElement("thead");
  thead.classList.add("table_header");
  var tbody = document.createElement("tbody");
  tbody.classList.add("table_body");
  var headTr = document.createElement("tr");
  var car = document.createElement("th");
  var price = document.createElement("th");

  for (var _i = 0, _carlist = carlist; _i < _carlist.length; _i++) {
    var item = _carlist[_i];
    var tr = document.createElement("tr");
    tr.classList.add("table_item");
    var tdCar = document.createElement("td");
    var tdPrice = document.createElement("td");
    tdCar.innerHTML = item.car;
    tdPrice.innerHTML = item.price;
    tr.append(tdCar, tdPrice);
    tbody.append(tr);
  }

  car.innerHTML = "Car brand";
  price.innerHTML = "Price";
  headTr.append(car, price);
  thead.append(headTr);
  table.append(thead, tbody);
  secondTask.append(table);

  function sort(cell) {
    var rows = _toConsumableArray(tbody.rows);

    switch (cell) {
      case "Car brand":
        rows.sort(function (a, b) {
          return a.cells[0].innerHTML.localeCompare(b.cells[0].innerHTML);
        });
        break;

      case "Price":
        rows.sort(function (a, b) {
          return +a.cells[1].innerHTML - +b.cells[1].innerHTML;
        });
        break;
    }

    tbody.append.apply(tbody, _toConsumableArray(rows));
  }

  thead.addEventListener("click", function (event) {
    return sort(event.target.innerHTML);
  });
})();