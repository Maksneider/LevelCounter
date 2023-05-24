let lvl=1;
let allHeroBonus=1;
let itemBonus=0;
let monsterBonus=1;
let bookBonus=0;
let bookFlag=true;

var lvlD=new Audio();
lvlD.src="audio/lvlDown.mp3";
var lvlU=new Audio();
lvlU.src="audio/lvlUp.mp3";
var rollSound= new Audio();
rollSound.src="audio/roll.mp3";
var fightFlag=false;
var fightSound= new Audio();
fightSound.src="audio/walka.mp3";

function increase() {
  document.getElementById('level').innerHTML = ++lvl;
  document.getElementById('fight-level').innerHTML = lvl;
  updateAllHeroBonus();
  lvlU.play();
  lvlU.currentTime=0;
}

function decrease() {
  if(lvl>1){
    document.getElementById('level').innerHTML = --lvl;
    document.getElementById('fight-level').innerHTML = lvl;
    updateAllHeroBonus();
    lvlD.play();
    lvlD.currentTime=0;
  }
}

function getRandomINT(min, max){
  min= Math.ceil(min);
  max= Math.floor(max);
  return Math.floor(Math.random() * (max - min +1) +min);
}

function roll(){
  rollSound.play()
  rollSound.currentTime=0;
  let rolled = getRandomINT(1,6);
  document.getElementById("roll-number").innerHTML = rolled;
}

function setBonus() {
  itemBonus = prompt("What's your bonus?");
  if (itemBonus === 'chuj'){
    alert("Sam jesteś chuj");
  }else if(parseInt(itemBonus) === parseInt(itemBonus, 10)){
    if(parseInt(itemBonus) > 999 || parseInt(itemBonus) < 0){
    document.getElementById("fight-bonus").innerHTML= 0;
    itemBonus = 0;
    updateAllHeroBonus();
    }else{
    document.getElementById("fight-bonus").innerHTML= parseInt(itemBonus);
    itemBonus=parseInt(itemBonus);
    updateAllHeroBonus();
    }
  }
}

function setMonster() {
  monsterBonus = prompt("Set monster's level");
  if (monsterBonus === 'chuj'){
    alert("Sam jesteś chuj");
  }else if(parseInt(monsterBonus) === parseInt(monsterBonus, 10)){
    if(parseInt(monsterBonus) > 999 || parseInt(monsterBonus) < 0){
     document.getElementById("monster-level").innerHTML= 0;
     document.getElementById("allMonsterBonus").innerHTML= 0;
     monsterBonus=0;
     updateAllHeroBonus();
    }else{
     document.getElementById("monster-level").innerHTML= parseInt(monsterBonus);
     document.getElementById("allMonsterBonus").innerHTML= parseInt(monsterBonus);
     monsterBonus=parseInt(monsterBonus);
     updateAllHeroBonus();
    }
  }
}

function fight() {
  hidingController();
}



function hidingController(){
  let top = document.getElementById("level-text");
  let mid = document.getElementById("bezi");
  let botBTN = document.getElementById("decreaseBTN");
  let botBTN2 = document.getElementById("increaseBTN");
  if(!fightFlag){
    top.style.display="none";
    mid.style.display="none";
    botBTN.style.display="none";
    botBTN2.style.display="none";
    document.getElementById("fight-text").innerHTML="Back";
    document.getElementById("fight-menu").style.display="initial";
    fightFlag=true;
    fightSound.play();
    fightSound.currentTime=0;
  }else{
    top.style.display="initial";
    mid.style.display="initial";
    botBTN.style.display="initial";
    botBTN2.style.display="initial";
    document.getElementById("fight-text").innerHTML="Fight";
    document.getElementById("fight-menu").style.display="none";
    fightFlag=false;
  }
}

function addBook(){
  if(bookFlag){
    bookBonus=5;
    updateAllHeroBonus();
    bookFlag=false;
  }else{
    bookBonus=0;
    updateAllHeroBonus();
    bookFlag=true;
  }
}

function updateAllHeroBonus() {
  allHeroBonus=lvl+ parseInt(itemBonus) +bookBonus;
  document.getElementById("allHeroBonus").innerHTML=allHeroBonus;
  var progress = document.getElementById("progress-bar");
  if(allHeroBonus>parseInt(monsterBonus)){
    RPGUI.set_value(progress, 1.0);
  }else if (allHeroBonus == parseInt(monsterBonus)){
    RPGUI.set_value(progress, 0.5);
  }else{
    let status=(allHeroBonus/parseInt(monsterBonus));
    RPGUI.set_value(progress, status);
  } 
}