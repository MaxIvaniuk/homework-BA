"use strict";

// 1. Создать страницу, которая выводит нумерованный список песен:
var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];

function list() {
  var div = document.querySelector('#list');
  var ol = document.createElement('ol');
  ol.innerHTML = '';

  for (var _i = 0, _playList = playList; _i < _playList.length; _i++) {
    var item = _playList[_i];
    var li = document.createElement('li');
    var author = document.createElement("p");
    author.innerHTML = item.author;
    var song = document.createElement("p");
    song.innerHTML = item.song;
    li.append(author);
    li.append(song);
    ol.append(li);
  }

  div.append(ol);
}

;
list(); // 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть".
//  Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

function modalWindow() {
  var div = document.querySelector('#modal');
  var openBtn = document.createElement('button');
  var window = document.createElement('div');
  var closeBtn = document.createElement('button');
  openBtn.innerHTML = 'Open';
  window.innerHTML = 'MODAL WINDOW';
  closeBtn.innerHTML = 'Close';
  window.style.display = 'none';
  div.append(openBtn);
  div.append(window);
  window.append(closeBtn);

  openBtn.onclick = function () {
    return window.style.display = 'block';
  };

  closeBtn.onclick = function () {
    return window.style.display = 'none';
  };
}

;
modalWindow(); // 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

function changeLights() {
  var div = document.querySelector("#traffic-light");
  var colors = ['red', 'yellow', 'green'];
  var traficLight = [];
  var i = 0;

  while (i < 3) {
    traficLight.push(document.createElement('div'));
    traficLight[i].style.cssText = "\n      background-color: ".concat(colors[i], ";\n      border-radius: 50%;\n      width: 70px;\n      height: 70px;\n      margin-bottom: 10px;\n      opacity: 0.1;\n    ");

    if (i == 0) {
      traficLight[i].style.opacity = 1; // console.log(traficLight);
    }

    div.append(traficLight[i]);
    i++;
  }

  var button = document.createElement('button');
  button.innerHTML = 'Change Lights';
  div.append(button);
  var toggle;

  button.onclick = function () {
    var current = traficLight.filter(function (item) {
      return item.style.opacity == 1;
    }); // console.log(current);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = traficLight[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (item == current[0]) {
          item.style.opacity = 0.1;
          var index = traficLight.indexOf(item);

          if (item.style.backgroundColor == 'red') {
            toggle = 'red';
            traficLight[index + 1].style.opacity = 1;
          } else if (item.style.backgroundColor == 'green') {
            toggle = 'green';
            traficLight[index - 1].style.opacity = 1;
          } else {
            if (toggle == 'red') {
              traficLight[index + 1].style.opacity = 1;
            } else {
              traficLight[index - 1].style.opacity = 1;
            }
          }
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
  };
}

changeLights();