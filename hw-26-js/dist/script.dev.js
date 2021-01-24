"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// // 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// //     поле, хранящее радиус окружности;
// class Circle {
//   constructor(radius){
//     this.radius = radius;
//   }
//   //     get-свойство, возвращающее радиус окружности;
//   get getRadius(){
//     console.log(`Radius of circle: ${this.radius}`);
//   }
//   //     set-свойство, устанавливающее радиус окружности;
//   set setRadius(radiusNew){
//     this.radius = radiusNew;
//   }
//   //     get-свойство, возвращающее диаметр окружности;
//   get getDiameter(){
//     console.log(`Diameter of circle: ${this.radius / 2}`);
//   }
//   //     метод, вычисляющий площадь окружности;
//   circleSquare(){
//     console.log(`Square of circle: ${Math.PI + this.radius ** 2}`)
//   }
//   //     метод, вычисляющий длину окружности.
//   circleLength(){
//     console.log(`Length of circle: ${2 * Math.PI + this.radius}`)
//   }
// }
// // Продемонстрировать работу свойств и методов. 
// let circle = new Circle(10);
// circle.getRadius;
// circle.setRadius = 3;
// circle.getDiameter;
// circle.circleSquare;
// console.log(circle.circleSquare());
// console.log(circle.circleLength());
// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
//     поле, которое хранит цвет маркера;
//     поле, которое хранит количество чернил в маркере (в процентах);
//     метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// class Marker {
//   constructor(color, ink){
//     this.color = color;
//     this.ink = parseFloat(ink);
//   }
//   print(string){
//     let index;
//     for(let symbol of string){
//       index = string.indexOf(symbol);
//       // if(symbol != ' '){
//       //   this.ink -= 0.5;
//       //   console.log(this.ink)
//       // } else break;
//       if(symbol != ' '){
//         if(this.ink){
//           this.ink -= 0.5;
//           console.log(this.ink) 
//         } else break;
//       } 
//     }
//     let printedText = string.substr(0, index + 1);
//     document.write(`<p style="color: ${this.color}">${printedText}</p>`);
//   }
// }
// // Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
// class LoadingMarker extends Marker {
//     loadMarker(percent) {
//         if (percent >= 0) {
//             let inks = this.ink + percent;
//             this.ink = inks > 100 ? 100 : inks;
//         } else console.log("ERROR");
//     }
// }
// let marker = new LoadingMarker("red", 15);
// marker.print("Hello world");
// marker.loadMarker(10);
// console.log(marker.ink);
//3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
var Employee = function Employee(name, position) {
  _classCallCheck(this, Employee);

  this.name = name;
  this.position = position;
};

var bankEmployees = [new Employee("Peter Parker", "director"), new Employee("Allie Law", "accountant"), new Employee("Lisa Baker", "financier")];
console.log(bankEmployees); // Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

var EmpTable =
/*#__PURE__*/
function () {
  function EmpTable() {
    var table = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : bankEmployees;

    _classCallCheck(this, EmpTable);

    this.table = _toConsumableArray(table);
  }

  _createClass(EmpTable, [{
    key: "getHtml",
    value: function getHtml() {
      document.write("<table border='1px' cellpadding='5px' cellspacing='0' align='center'>");
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.table[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var empl = _step.value;
          document.write("\n        <tr>\n          <td>".concat(empl.name, "</td>\n          <td>").concat(empl.position, "</td>\n        </tr>"));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      document.write("</table>");
    }
  }]);

  return EmpTable;
}(); // Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().


var emplTable = new EmpTable();
emplTable.getHtml();