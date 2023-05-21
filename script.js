var lvl=1;
var lvlD=new Audio();
lvlD.src="audio/lvlDown.mp3";
var lvlU=new Audio();
lvlU.src="audio/lvlUp.mp3";
var rollSound= new Audio();
rollSound.src="audio/roll.mp3";

function increase() {
  document.getElementById('level').innerHTML = ++lvl;
  lvlU.play();
  lvlU.currentTime=0;
}

function decrease() {
  if(lvl>1){
    document.getElementById('level').innerHTML = --lvl;
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
