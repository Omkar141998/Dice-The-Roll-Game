let playerNames = document.querySelectorAll("input");
let btns = document.getElementsByClassName("Diceroll");
let scores = document.getElementsByTagName("span");

//[b1,b2,b3,b4,b5,b6]
//Event AddEvent Listener

for(let i=0; i<= btns.length-1;i++){
  btns[i].addEventListener("click", ()=>{rollTheDice(btns[i].id)})
}
function rollTheDice(btn_id){
  btns[btn_id].disabled = true;

  let arr = ['1','2','3','4','5','6']
  //0 - 5

  // let randomIndex = Math.floor(Math.random() * 6)
    // o -5 Only Integers

  // let randomDice = arr[randomIndex];
  // //console.log(randomDice);

  // scores[btn_id].innerText = randomDice;
  let randomIndex = Math.floor(Math.random() * arr.length);// 0 - 6; only integers

  let randomDice = arr[randomIndex];
  // console.log(randomDice);
  scores[btn_id].innerText = randomDice;
  


}






