// 1. Создать страницу, которая выводит нумерованный список песен:
let playList = [
  {
   author: "LED ZEPPELIN",
   song:"STAIRWAY TO HEAVEN"
  },
  {
   author: "QUEEN",
   song:"BOHEMIAN RHAPSODY"
  },
  {
   author: "LYNYRD SKYNYRD",
   song:"FREE BIRD"
  },
  {
   author: "DEEP PURPLE",
   song:"SMOKE ON THE WATER"
  },
  {
   author: "JIMI HENDRIX",
   song:"ALL ALONG THE WATCHTOWER"
  },
  {
   author: "AC/DC",
   song:"BACK IN BLACK"
  },
  {
   author: "QUEEN",
   song:"WE WILL ROCK YOU"
  },
  {
   author: "METALLICA",
   song:"ENTER SANDMAN"
  }
  ];  
  
function list(){
  let div = document.querySelector('#list')
  let ol = document.createElement('ol');
  ol.innerHTML = '';
  for(let item of playList){
    let li = document.createElement('li');
    let author = document.createElement("p");
    author.innerHTML = item.author;

    let song = document.createElement("p");
    song.innerHTML = item.song;

    li.append(author);
    li.append(song);
    ol.append(li)
  }
  div.append(ol);
};

list();

// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть".
//  Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

function modalWindow(){
  let div = document.querySelector('#modal');
  
  let openBtn = document.createElement('button');
  let window = document.createElement('div');
  let closeBtn = document.createElement('button');
  
  openBtn.innerHTML = 'Open';
  window.innerHTML = 'MODAL WINDOW';
  closeBtn.innerHTML = 'Close';
  window.style.display = 'none';
  
  div.append(openBtn);
  div.append(window);
  window.append(closeBtn);
  
  openBtn.onclick = () => window.style.display = 'block';
  closeBtn.onclick = ()=> window.style.display = 'none';
};

modalWindow();

// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

function changeLights(){
  let div = document.querySelector("#traffic-light");
  let colors = ['red', 'yellow', 'green'];
  let traficLight = [];
  
  let i = 0;
  while (i < 3){
    traficLight.push(document.createElement('div'))
    traficLight[i].style.cssText = `
      background-color: ${colors[i]};
      border-radius: 50%;
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
      opacity: 0.1;
    `
    if(i == 0){
      traficLight[i].style.opacity = 1;
      // console.log(traficLight);
    }
    
    div.append(traficLight[i]);
    
    i++;
  }
  
  let button = document.createElement('button');
  button.innerHTML = 'Change Lights';
  div.append(button);
  
  let toggle;
  button.onclick = () => {
    let current = traficLight.filter((item) => item.style.opacity == 1);
    // console.log(current);
    
    for(let item of traficLight){
      if(item == current[0]){
        item.style.opacity = 0.1;
        let index = traficLight.indexOf(item);

        if(item.style.backgroundColor == 'red'){
          toggle = 'red';
          traficLight[index + 1].style.opacity = 1;

        } else if(item.style.backgroundColor == 'green'){
          toggle = 'green';
          traficLight[index - 1].style.opacity = 1;

        } else {
          if(toggle == 'red'){
            traficLight[index + 1].style.opacity = 1;
          } else {
            traficLight[index - 1].style.opacity = 1;
          }
        }
      }
    }
  }
}

changeLights();