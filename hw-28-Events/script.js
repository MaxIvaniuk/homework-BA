// Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.
let firstTask = document.getElementById("first-task");

(function() {
    let div = document.createElement("div");
    div.classList.add("text-area");
    let textarea = document.createElement("textarea");
    textarea.classList.add("text-area");

    div.innerHTML = "Just click ' CTRL + E ' and change this  text"

    textarea.style.display = "none"

    firstTask.append(div, textarea);

    function changeText(event) {
        if (event.ctrlKey && (event.code == "KeyE")) {
            event.preventDefault();

            
            div.style.display = "none";
            textarea.value = div.innerHTML;
            textarea.style.display = "block";
            this.select();
        }

        if (event.ctrlKey && (event.code == "NumpadAdd")) {
            event.preventDefault();

            textarea.style.display = "none";
            div.innerHTML = textarea.value;
            div.style.display = "block";
        }
    }

    document.addEventListener("keydown", changeText)
})();



// Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.

let secondTask = document.getElementById("second-task");
(function() {
    let carlist = [
        {
            car: "BMW",
            price: 20000
        },
        {
            car: "Ford",
            price: 12000
        },
        {
            car: "Opel",
            price: 5000
        },
        {
            car: "Mercedes",
            price: 50000
        },
        {
            car: "Nissan",
            price: 17000
        },
        {
            car: "Lada",
            price: 1000
        },
        {
            car: "Fiat",
            price: 11000
        },
        {
            car: "Porsche",
            price: 150000
        },
    ]

    let table = document.createElement("table");
    table.classList.add("table");
    let thead = document.createElement("thead");
    thead.classList.add("table_header")
    let tbody = document.createElement("tbody");
    tbody.classList.add("table_body")
    let headTr = document.createElement("tr");
    let car = document.createElement("th");
    let price = document.createElement("th");

    for (let item of carlist) {
        let tr = document.createElement("tr");
        tr.classList.add("table_item")
        let tdCar = document.createElement("td");
        let tdPrice = document.createElement("td");

        tdCar.innerHTML = item.car;
        tdPrice.innerHTML = item.price;

        tr.append(tdCar, tdPrice)

        tbody.append(tr);
    }

    car.innerHTML = "Car brand";
    price.innerHTML = "Price";

    headTr.append(car, price);
    thead.append(headTr);
    table.append(thead, tbody);
    secondTask.append(table);

    function sort(cell) {
        let rows = [...tbody.rows];
        
        switch (cell) {
            case "Car brand":
                rows.sort((a, b) => (a.cells[0].innerHTML).localeCompare(b.cells[0].innerHTML));
                break;
            case "Price":
                rows.sort((a, b) => (+a.cells[1].innerHTML - +b.cells[1].innerHTML));
                break;
        }

        tbody.append(...rows)
    }

    thead.addEventListener("click", (event) => sort(event.target.innerHTML))
})();