function changePair(pair,name){

  document.getElementById("chartFrame").src =
  `https://s.tradingview.com/widgetembed/?symbol=FX:${pair}&interval=1&theme=dark`;

  document.getElementById("currentPair").innerText =
  name;

}

/* TIMER */

let time = 45;

setInterval(() => {

  let minutes =
  String(Math.floor(time / 60)).padStart(2,'0');

  let seconds =
  String(time % 60).padStart(2,'0');

  document.getElementById("countdown").innerText =
  `${minutes}:${seconds}`;

  if(time <= 0){
    time = 45;
  }else{
    time--;
  }

},1000);

