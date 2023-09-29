document.getElementById("cheat").addEventListener("click",cheat);
function cheat () {
  win();
}
//bible: https://stackoverflow.com/questions/28284754/dragging-shapes-using-mouse-after-creating-them-with-html5-canvas
//script online: https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@3.0/dist/svg.min.js

let nbrfigures = 0;
function Figure(
  couleur = "white",
  taille = [0, 0, 50, 0, 50, 50, 0, 50],
  offsetX = 0,
  offsetY = 0
) {
  this.id = nbrfigures++;
  this.couleur = couleur;
  this.taille = taille;
  this.offsetX = offsetX;
  this.offsetY = offsetY;
}
let lastfiguresclicked;
let clickmousedownX = 0;
let clickmousedownY = 0;

var draw = SVG().addTo("article").size(900, 600);
let mesFigures = [];

let niveaux = [];
let level = 1;
let maxlevel = 4;
document.getElementById("displaymaxlevel").innerHTML = maxlevel;
let nonsuccededlevels = [];
for (let i=0;i<maxlevel;i++){
  nonsuccededlevels.push(i+1);
}
document.getElementById("level1").style.backgroundColor = "#0088ff";
document.getElementById("level1").style.borderColor = "#00ddff";
let listwhitedots = [];

generatelevel(level);
document.body.addEventListener("click", click);
document.body.addEventListener("mousedown", mousedown);
document.body.addEventListener("mouseup", mouseup);
document.body.addEventListener("mousemove", mousemove);



document.getElementById("conteneurlevels").addEventListener("click", clicklevel);
function clicklevel(event){
  let levelclicked = event.target.id.replace("level","");
  let flag = 0;
  for (let i=0;i<nonsuccededlevels.length;i++){
    if (levelclicked == nonsuccededlevels[i]){
      flag=1;
      break;
    }
  }
  if (flag == 1){
    document.getElementById("level" + level).style.backgroundColor = "#0000ff";
    document.getElementById("level" + level).style.borderColor = "#00bbff";
    document.getElementById("level" + levelclicked).style.backgroundColor = "#0088ff";
    document.getElementById("level" + levelclicked).style.borderColor = "#00ddff";
    flag = 0;
    for (let i=0;i<nonsuccededlevels.length;i++){
      if (level == nonsuccededlevels[i]){
        flag=1;
        break;
      }
    }
    if (flag==0){
      document.getElementById("level" + level).style.backgroundColor = "green";
      document.getElementById("level" + level).style.borderColor = "#004800";
    }
    generatelevel(levelclicked);
    level=levelclicked;
  } else  {
    if (levelclicked <1000) {
      document.getElementById("level" + level).style.backgroundColor = "#0000ff";
      document.getElementById("level" + level).style.borderColor = "#00bbff";
      flag = 0;
      for (let i=0;i<nonsuccededlevels.length;i++){
        if (level == nonsuccededlevels[i]){
          flag=1;
          break;
        }
      }
      if (flag==0){
        document.getElementById("level" + level).style.backgroundColor = "green";
        document.getElementById("level" + level).style.borderColor = "#004800";
      }
      document.getElementById("level" + levelclicked).style.backgroundColor = "#004800";
      document.getElementById("level" + levelclicked).style.borderColor = "#003200";
      generatelevel(levelclicked);
      level=levelclicked;
    }
  }
}
function win() {
  let flag = 0;
  for (let i = 0; i < nonsuccededlevels.length; i++) {
    if (nonsuccededlevels[i] == level) {
      flag = 1;
      break;
    }
  }
  document.getElementById("level" + level).style.backgroundColor = "green";
  document.getElementById("level" + level).style.borderColor = "#004800";
  if (flag == 1) {
    nonsuccededlevels.splice(nonsuccededlevels.indexOf(level*1), 1);
  }
  for (let i=0;i<nonsuccededlevels.length;i++){
    if (nonsuccededlevels[i] > level){
      level = nonsuccededlevels[i];
      document.getElementById("level" + level).style.backgroundColor = "#0088ff";
      document.getElementById("level" + level).style.borderColor = "#00ddff";
      break;
    }
  }
  if (nonsuccededlevels.length==0){
    console.log("you win");
    window.stop();
  }
  if (nonsuccededlevels[nonsuccededlevels.length-1] < level){
    //levelmax
    /*document.getElementById("level" + maxlevel).style.backgroundColor = "green";
    document.getElementById("level" + maxlevel).style.borderColor = "#004800";*/
    level = nonsuccededlevels[0];
    document.getElementById("level" + nonsuccededlevels[0]).style.backgroundColor = "#0088ff";
    document.getElementById("level" + nonsuccededlevels[0]).style.borderColor = "#00ddff";
  }

  generatelevel(level);
}




function generatelevel(lvl) {
  document.getElementById("displaylevelactual").innerHTML = lvl;
  niveaux = [];
  listwhitedots = [];
  mesFigures = [];
  nbrfigures = 0;
  draw.rect(1000, 1000).fill("black");
  if (lvl == 1) {
    mesFigures.push(new Figure("blue", [0, 0, 40, 0, 40, 40, 0, 40]));
    mesFigures.push(
      new Figure("purple", [0, 0, 40, 0, 40, 40, 0, 40], 30, 100)
    );
    mesFigures.push(
      new Figure(
        "blueviolet",
        [0, 25, 0, 90, 50, 90, 90, 50, 90, 0, 25, 0],
        10,
        200
      )
    );
    mesFigures.push(
      new Figure(
        "darkblue",
        [
          25, 25, 25, 50, 50, 50, 50, 0, 75, 25, 75, 50, 50, 75, 25, 75, 0, 75,
          0, 50, 50, 0,
        ],
        60,
        30
      )
    );
    listwhitedots = [
      150, 150, 250, 150, 150, 250, 250, 250, 200, 250, 100, 100, 150, 100, 250,
      200,
    ];
  }
  if (lvl == 2) {
    mesFigures.push(new Figure("blue", [0, 0, 140, 0, 140, 40, 0, 40]));
    mesFigures.push(
      new Figure("purple", [0, 0, 40, 0, 40, 90, 0, 90], 30, 100)
    );
    mesFigures.push(
      new Figure("blueviolet", [0, 0, 90, 0, 90, 90, 0, 90], 10, 200)
    );
    mesFigures.push(
      new Figure(
        "darkblue",
        [0, 0, 80, 0, 80, 120, 0, 120, 0, 80, 40, 80, 40, 40, 0, 40],
        60,
        30
      )
    );
    listwhitedots = [
      150, 150, 150, 200, 150, 250, 200, 150, 200, 200, 200, 250, 250, 150, 250,
      200, 250, 250, 100, 200, 200, 100, 100, 100,
    ];
  }
  if (lvl == 3) {
    mesFigures.push(new Figure("blue", [0, 0, 140, 0, 140, 40, 0, 40]));
    mesFigures.push(
      new Figure("purple", [0, 0, 40, 0, 40, 90, 0, 90], 30, 100)
    );
    mesFigures.push(
      new Figure("blueviolet", [0, 0, 90, 0, 90, 90, 0, 90], 10, 200)
    );
    mesFigures.push(
      new Figure("skyblue", [0, 0, 40, 0, 40, 140, 0, 140], 120, 100)
    );
    mesFigures.push(
      new Figure(
        "darkblue",
        [0, 0, 0, 80, 120, 80, 120, 40, 80, 40, 40, 40, 40, 0],
        60,
        30
      )
    );
    listwhitedots = [
      50, 50, 50, 100, 100, 50, 100, 100, 100, 150, 100, 200, 100, 250, 150,
      250, 200, 250, 250, 250, 250, 200, 250, 150, 200, 150, 200, 100, 150, 100,
    ];
  }
  if (lvl == 4) {
    mesFigures.push(new Figure("deepskyblue", [0, 0, 40, 0, 40, 40, 0, 40], 100, 200));
    mesFigures.push(new Figure("cornflowerblue", [0, 0, 80, 0, 80, 40, 0, 40], 100, 300));
    mesFigures.push(new Figure("dodgerblue", [0, 0, 130, 0, 130, 40, 0, 40], 100, 400));
    mesFigures.push(new Figure("blue", [0, 0, 230, 0, 230, 40, 0, 40]));
    mesFigures.push(
      new Figure("blueviolet", [0, 0, 130, 0, 130, 45, 90, 45, 90, 90, 0, 90], 10, 300)
    );
    mesFigures.push(
      new Figure("skyblue", [40, 0, 80, 0, 80, 80, 120, 80, 120, 120, 160, 120, 40, 120, 40, 80, 0, 80, 0, 40, 40, 40], 120, 100)
    );
    mesFigures.push(
      new Figure(
        "violet",
        [0, 0, 0, 80, 80, 80, 80, 120, 120, 120, 120, 80, 120, 40, 80, 40, 40, 40, 40, 0],
        60,
        30
      )
    );
    mesFigures.push(
      new Figure(
        "darkblue",
        [0, 70, 50, 90, 70, 140, 90, 90, 140, 70, 90, 50, 70, 0, 50, 50],
        160,
        130
      )
    );
    mesFigures.push(
      new Figure(
        "darkslateblue",
        [0, 0, 0, 180, 40, 180, 40, 80, 80, 80, 80, 40, 40, 40, 40, 0],
        160,
        130
      )
    );





    squarewhitedot(listwhitedots, 600, 900, 50, 300, 600, 50);
  }
  afficherallFigure();
}

function squarewhitedot(array, minX, maxX, gapX, minY, maxY, gapY){
  for (let i=minX; i<maxX; i=i+gapX){
    for (let j=minY;j<maxY; j=j+gapY){
      array.push(i);
      array.push(j);
    }
  }
}

function afficherallFigure() {
  draw.rect(1000, 1000).fill("black");
  for (let i = 0; i < mesFigures.length; i++) {
    afficherFigure(i);
  }
  afficherwhitedot();
}

function afficherwhitedot() {
  for (let i = 0; i < listwhitedots.length / 2; i++) {
    if (ispointinside(listwhitedots[i * 2], listwhitedots[i * 2 + 1]) == "") {
      draw
        .circle(16)
        .fill("red")
        .move(listwhitedots[i * 2] - 8, listwhitedots[i * 2 + 1] - 8);
      draw
        .circle(4)
        .fill("darkred")
        .move(listwhitedots[i * 2] - 2, listwhitedots[i * 2 + 1] - 2);
    } else {
      draw
        .circle(14)
        .fill("green")
        .move(listwhitedots[i * 2] - 7, listwhitedots[i * 2 + 1] - 7);
    }
  }
}

function checkwhitedot() {
  let returnvar = 1;
  for (let i = 0; i < listwhitedots.length / 2; i++) {
    if (ispointinside(listwhitedots[i * 2], listwhitedots[i * 2 + 1]) == "") {
      returnvar = 0;
      break;
    }
  }
  if (returnvar == 1) {
    win();
  }
}
function afficherFigure(id) {
  draw
    .polygon(mesFigures[id].taille)
    .move(mesFigures[id].offsetX, mesFigures[id].offsetY)
    .fill(mesFigures[id].couleur);
}

function mouseup(event) {
  ismousedown = 0;
  mouseupevent(event.clientX, event.clientY, clickmousedownX, clickmousedownY);
  checkwhitedot();
}
function mouseupevent(cx, cy, initialX, initialY) {
  if (lastfiguresclicked != "") {
      mesFigures[lastfiguresclicked[0].id].offsetX = cx - initialX - document.getElementsByClassName("bigarticle")[0].getBoundingClientRect().x;
      mesFigures[lastfiguresclicked[0].id].offsetY = cy - initialY - document.getElementsByClassName("bigarticle")[0].getBoundingClientRect().y;
    }
  afficherallFigure();
}

let ismousedown = 0;
function mousedown(event) {
  ismousedown = 1;
  let x = document.getElementsByClassName("bigarticle")[0].getBoundingClientRect().x;
  let y = document.getElementsByClassName("bigarticle")[0].getBoundingClientRect().y;
  lastfiguresclicked = ispointinside(event.clientX - x, event.clientY - y);
  clickmousedownX = event.clientX - x - mesFigures[lastfiguresclicked[0].id].offsetX;
  clickmousedownY = event.clientY - y - mesFigures[lastfiguresclicked[0].id].offsetY;
}
let mousemoveon = 0;
let eventstacked;
function mousemove(event) {
  eventstacked = event;
  mousemoveon = 1;
}
setInterval (timer, 150) ;
function timer(){
  if (ismousedown == 1 && mousemoveon == 1) {
    mouseupevent(eventstacked.clientX, eventstacked.clientY, clickmousedownX, clickmousedownY);
    mousemoveon = 0;
  }
}

function click() {
  //console.log("click");
}






function ispointinside(a, b) {
  //lastfiguresclicked = [];
  //raycasting algorythm: after a click, tell how many times you pass by a side of a polygon if you goes only full right
  //Follow the picture 'variables.jpg' for understanding the variables:
  //I strongly advise you to skip that part (until 'end of raycasting algorythm')
  let idPolygoneClique = [];
  for (let i = 0; i < mesFigures.length; i++) {
    let nbrCotesPolygoneADroiteDuClick = 0;
    let cx = a;
    let cy = b;
    let element = mesFigures[i];
    let ox = element.offsetX;
    let oy = element.offsetY;
    //console.log("=======", i, "======");
    for (let j = 0; j < element.taille.length / 2; j++) {
      let cpX, cpY; //currentPointX, currentPointY
      let npX, npY; //nextPointX, nextPointY
      let move;
      if (j == element.taille.length / 2 - 1) {
        cpX = element.taille[element.taille.length - 2];
        cpY = element.taille[element.taille.length - 1];
        npX = element.taille[0];
        npY = element.taille[1];
        move = direction(cpX, cpY, npX, npY);
      } else {
        cpX = element.taille[j * 2];
        cpY = element.taille[j * 2 + 1];
        npX = element.taille[j * 2 + 2];
        npY = element.taille[j * 2 + 3];
        move = direction(cpX, cpY, npX, npY);
      }
      let positionX = positioX(move, cx, ox, cpX, npX);
      let positionY = positioY(move, cy, oy, cpY, npY);
      let countside = countsid(positionX, positionY);

      if (countside == "unknown") {
        //console.log("u", countside, "|", i, "|", j, "|", move, "|", positionX, "-", positionY);
        countside = "yes";
        //the click was done in a ↘↙↖↗
        let rX, rY; //rapportX, rapportY
        rX = (cx - ox - cpX) / (npX - cpX);
        rY = (cy - oy - cpY) / (npY - cpY);
        if (
          move == "↘" &&
          (cy - oy - cpY) / (npY - cpY) < (cx - ox - cpX) / (npX - cpX)
        ) {
          countside = "no";
        }
        if (
          move == "↙" &&
          (cy - oy - cpY) / (npY - cpY) + (cx - ox - npX) / (cpX - npX) > 1
        ) {
          countside = "no";
        }
        if (
          move == "↖" &&
          (cy - oy - npY) / (cpY - npY) < (cx - ox - npX) / (cpX - npX)
        ) {
          countside = "no";
        }
        if (
          move == "↗" &&
          (cy - oy - npY) / (cpY - npY) + (cx - ox - cpX) / (npX - cpX) > 1
        ) {
          countside = "no";
        }
      }
      if (countside == "yes") {
        //console.log(countside, "|", i, "|", j, "|", move, "|", positionX, "-", positionY);
        nbrCotesPolygoneADroiteDuClick++;
      }
    }
    if (nbrCotesPolygoneADroiteDuClick % 2 != 0) {
      idPolygoneClique.push(mesFigures[i]);
    }
  }
  return idPolygoneClique;
}
function direction(x1, y1, x2, y2) {
  //tell which direction the side is going: →↘↓↙←↖↑↗
  if (x1 > x2) {
    if (y1 > y2) {
      return "↖";
    } else {
      if (y1 < y2) {
        return "↙";
      } else {
        return "←";
      }
    }
  } else {
    if (x1 < x2) {
      if (y1 > y2) {
        return "↗";
      } else {
        if (y1 < y2) {
          return "↘";
        } else {
          return "→";
        }
      }
    } else {
      if (y1 > y2) {
        return "↑";
      } else {
        if (y1 < y2) {
          return "↓";
        } else {
          return ".";
        }
      }
    }
  }
  console.error("code unreachable");
}
function positioX(move, cx, ox, cpX, npX) {
  //tell the hortogonal direction is the click (compared to the side) was done: →←.
  if (move == "→" || move == "↘" || move == "↗") {
    if (cx < ox + cpX) {
      return "←";
    }
    if (cx > ox + npX) {
      return "→";
    }
    if (cx > ox + cpX && cx < ox + npX) {
      return ".";
    }
  } else {
    if (cx < ox + npX) {
      return "←";
    }
    if (cx > ox + cpX) {
      return "→";
    }
    if (cx > ox + npX && cx < ox + cpX) {
      return ".";
    }
  }
  return ".";
}
function positioY(move, cy, oy, cpY, npY) {
  //tell the vertical direction is the click (compared to the side) was done: ↓↑.
  if (move == "↘" || move == "↓" || move == "↙") {
    if (cy < oy + cpY) {
      return "↑";
    }
    if (cy > oy + npY) {
      return "↓";
    }
    if (cy > oy + cpY && cy < oy + npY) {
      return ".";
    }
  } else {
    if (cy < oy + npY) {
      return "↑";
    }
    if (cy > oy + cpY) {
      return "↓";
    }
    if (cy > oy + npY && cy < oy + cpY) {
      return ".";
    }
  }
  return ".";
}
function countsid(positionX, positionY) {
  if (positionX == "→" || positionY == "↑" || positionY == "↓") {
    return "no";
  }
  if (positionX == "←") {
    return "yes";
  }
  return "unknown";
}
//end of raycasting algorythm
