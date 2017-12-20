
// creation du nombre aleatoire
console.log("debut du programme")
var cpt = 0;
var min = 1;
var max = 100;
var nb = Math.floor(Math.random()*(max-min+1))+1;

console.log("nombre choisi par ordinnateur:" + nb);

function iA(){
  var min = 1;
  var max = 100;
  var nb = Math.floor(Math.random()*(max-min+1))+1;
}


function clear(){
  setTimeout(function () {
      document.getElementById('info').innerHTML = "";
  }, 5000);
}


function saiSieU(){
  var userNbre = document.getElementById('ZoneS').value;
  console.log("nombre choisi par joueur:" + userNbre);
  cpt++;
  console.log(cpt);

  //

  if (userNbre == nb){
    console.log("win");
    document.getElementById('info').innerHTML = "YOU WIN!!!!!!";
  }

    //

  if(userNbre < nb){
    document.getElementById('info').innerHTML = "it's more";
    document.getElementById('histo').innerHTML += " " + userNbre;
  }

    //

  if(userNbre > nb){
    document.getElementById('info').innerHTML = "it's less";
    document.getElementById('histo').innerHTML += " " + userNbre;
  }

  //
  if (cpt == 5){
    {
      if (nb >=0 && nb<=10){
      document.getElementById('info').innerHTML = "it's between 0 and 10";
    }
      if (nb >=11 && nb<=20){
      document.getElementById('info').innerHTML = "it's between 11 and 20";
    }
      if (nb >=21 && nb<=30){
      document.getElementById('info').innerHTML = "it's between 21 and 30";
    }
      if (nb >=31 && nb<=40){
      document.getElementById('info').innerHTML = "it's between 31 and 40";
    }
      if (nb >=41 && nb<=50){
      document.getElementById('info').innerHTML = "it's between 41 and 50";
    }
      if (nb >=51 && nb<=60){
      document.getElementById('info').innerHTML = "it's between 51 and 60";
    }
      if (nb >=61 && nb<=70){
      document.getElementById('info').innerHTML = "it's between 61 and 70";
    }
      if (nb >=71 && nb<=80){
      document.getElementById('info').innerHTML = "it's between 71 and 80";
    }
      if (nb >=81 && nb<=90){
      document.getElementById('info').innerHTML = "it's between 81 and 90";
    }
      if (nb >=91 && nb<=100){
      document.getElementById('info').innerHTML = "it's between 91 and 100";
        }
      }
  }

  //
  else if (cpt == 10) {
    document.getElementById('info').innerHTML = "YOU LOSE ";
    window.location.reload(true);
  }

  //

  else if (isNaN(userNbre)){
    document.getElementById('info').innerHTML = "Please enter a number";
    console.log("this is not a number");
    clear();
  }
}
