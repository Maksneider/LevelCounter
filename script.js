
var lvl=1;
var lvlD=new Audio();
lvlD.src="audio/lvlDown.mp3";
var lvlU=new Audio();
lvlU.src="audio/lvlUp.mp3";
var rollSound= new Audio();
rollSound.src="audio/roll.mp3";
var fightFlag=false;

function increase() {
  document.getElementById('level').innerHTML = ++lvl;
  document.getElementById('fight-level').innerHTML = lvl;
  lvlU.play();
  lvlU.currentTime=0;
}

function decrease() {
  if(lvl>1){
    document.getElementById('level').innerHTML = --lvl;
    document.getElementById('fight-level').innerHTML = lvl;
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
  var bonus = prompt("What's your bonus?");
  if (bonus === 'chuj'){
    alert("Sam jesteś chuj");
  }else if(parseInt(bonus) === parseInt(bonus, 10)){
    if(parseInt(bonus) > 999 || parseInt(bonus) < 0){
    document.getElementById("fight-bonus").innerHTML= 0;
    }else{
    document.getElementById("fight-bonus").innerHTML= parseInt(bonus);
    }
  }
}

function setMonster() {
  var bonus = prompt("Set monster's level");
  if (bonus === 'chuj'){
    alert("Sam jesteś chuj");
  }else if(parseInt(bonus) === parseInt(bonus, 10)){
    if(parseInt(bonus) > 999 || parseInt(bonus) < 0){
    document.getElementById("monster-level").innerHTML= 0;
    }else{
    document.getElementById("monster-level").innerHTML= parseInt(bonus);
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
