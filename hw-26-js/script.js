// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

//     поле, хранящее радиус окружности;
class Circle {
  constructor(radius){
    this.radius = radius;
  }
  //     get-свойство, возвращающее радиус окружности;
  get getRadius(){
    console.log(`Radius of circle: ${this.radius}`);
  }
  //     set-свойство, устанавливающее радиус окружности;
  set setRadius(radiusNew){
    this.radius = radiusNew;
  }
  //     get-свойство, возвращающее диаметр окружности;
  get getDiameter(){
    console.log(`Diameter of circle: ${this.radius / 2}`);
  }
  //     метод, вычисляющий площадь окружности;
  circleSquare(){
    console.log(`Square of circle: ${Math.PI + this.radius ** 2}`)
  }
  //     метод, вычисляющий длину окружности.
  circleLength(){
    console.log(`Length of circle: ${2 * Math.PI + this.radius}`)
  }
}


// Продемонстрировать работу свойств и методов. 
let circle = new Circle(10);

circle.getRadius;
circle.setRadius = 3;
circle.getDiameter;
circle.circleSquare;
console.log(circle.circleSquare());
console.log(circle.circleLength());



// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
    // поле, которое хранит цвет маркера;
    // поле, которое хранит количество чернил в маркере (в процентах);

class Marker {
  constructor(color, ink){
    this.color = color;
    this.ink = parseFloat(ink);
  }

    // метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
  print(string){
    let index;
    
    for(let symbol of string){
      index = string.indexOf(symbol);
      
      // if(symbol != ' '){
      //   this.ink -= 0.5;
      //   console.log(this.ink)
      // } else break;

      if(symbol != ' '){
        if(this.ink){
          this.ink -= 0.5;
          console.log(this.ink) 
        } else break;
      } 
    }
    
    let printedText = string.substr(0, index + 1);
    document.write(`<p style="color: ${this.color}">${printedText}</p>`);
  }
}

// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
class LoadingMarker extends Marker {
    loadMarker(percent) {
        if (percent >= 0) {
            let inks = this.ink + percent;
            this.ink = inks > 100 ? 100 : inks;
        } else console.log("ERROR");
    }
}

let marker = new LoadingMarker("red", 15);
marker.print("Hello world");
marker.loadMarker(10);
console.log(marker.ink);



//3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
class Employee {
  constructor(name, position){
    this.name = name;
    this.position = position;
  }
}

let bankEmployees = [
  new Employee(`Peter Parker`, `director`),
  new Employee(`Allie Law`, `accountant`),
  new Employee(`Lisa Baker`, `financier`),
];

console.log(bankEmployees);

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
class EmpTable {
  constructor(table = bankEmployees){
    this.table = [...table];
  }
  
  getHtml(){
    document.write("<table border='1px' cellpadding='5px' cellspacing='0' align='center'>");
      for(let empl of this.table){
        document.write(`
        <tr>
          <td>${empl.name}</td>
          <td>${empl.position}</td>
        </tr>`)
      }
    document.write("</table>");
  }
}

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
let emplTable = new EmpTable;
emplTable.getHtml();