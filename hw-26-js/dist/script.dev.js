"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
//     поле, хранящее радиус окружности;
var Circle =
/*#__PURE__*/
function () {
  function Circle(radius) {
    _classCallCheck(this, Circle);

    this.radius = radius;
  } //     get-свойство, возвращающее радиус окружности;


  _createClass(Circle, [{
    key: "circleSquare",
    //     метод, вычисляющий площадь окружности;
    value: function circleSquare() {
      console.log("Square of circle: ".concat(Math.PI + Math.pow(this.radius, 2)));
    } //     метод, вычисляющий длину окружности.

  }, {
    key: "circleLength",
    value: function circleLength() {
      console.log("Length of circle: ".concat(2 * Math.PI + this.radius));
    }
  }, {
    key: "getRadius",
    get: function get() {
      console.log("Radius of circle: ".concat(this.radius));
    } //     set-свойство, устанавливающее радиус окружности;

  }, {
    key: "setRadius",
    set: function set(radiusNew) {
      this.radius = radiusNew;
    } //     get-свойство, возвращающее диаметр окружности;

  }, {
    key: "getDiameter",
    get: function get() {
      console.log("Diameter of circle: ".concat(this.radius / 2));
    }
  }]);

  return Circle;
}(); // Продемонстрировать работу свойств и методов. 


var circle = new Circle(10);
circle.getRadius;
circle.setRadius = 3;
circle.getDiameter;
circle.circleSquare;
console.log(circle.circleSquare());
console.log(circle.circleLength()); // 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);

var Marker =
/*#__PURE__*/
function () {
  function Marker(color, ink) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.ink = parseFloat(ink);
  } // метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).


  _createClass(Marker, [{
    key: "print",
    value: function print(string) {
      var index;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = string[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var symbol = _step.value;
          index = string.indexOf(symbol); // if(symbol != ' '){
          //   this.ink -= 0.5;
          //   console.log(this.ink)
          // } else break;

          if (symbol != ' ') {
            if (this.ink) {
              this.ink -= 0.5;
              console.log(this.ink);
            } else break;
          }
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

      var printedText = string.substr(0, index + 1);
      document.write("<p style=\"color: ".concat(this.color, "\">").concat(printedText, "</p>"));
    }
  }]);

  return Marker;
}(); // Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.


var LoadingMarker =
/*#__PURE__*/
function (_Marker) {
  _inherits(LoadingMarker, _Marker);

  function LoadingMarker() {
    _classCallCheck(this, LoadingMarker);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadingMarker).apply(this, arguments));
  }

  _createClass(LoadingMarker, [{
    key: "loadMarker",
    value: function loadMarker(percent) {
      if (percent >= 0) {
        var inks = this.ink + percent;
        this.ink = inks > 100 ? 100 : inks;
      } else console.log("ERROR");
    }
  }]);

  return LoadingMarker;
}(Marker);

var marker = new LoadingMarker("red", 15);
marker.print("Hello world");
marker.loadMarker(10);
console.log(marker.ink); //3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

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
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.table[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var empl = _step2.value;
          document.write("\n        <tr>\n          <td>".concat(empl.name, "</td>\n          <td>").concat(empl.position, "</td>\n        </tr>"));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
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