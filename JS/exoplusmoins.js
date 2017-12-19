
// creation du nombre aleatoire
console.log("debut du programme")
var plNbre='';
var gagne=0;
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

function saiSieU(){
  var userNbre = document.getElementById('ZoneS').value;
  console.log("nombre choisi par joueur:" + userNbre);
  cpt++;
  console.log(cpt);
  if (userNbre == nb){
    console.log("win");
    document.getElementById('info').innerHTML += 'YOU WIN!!!!!!';
    document.getElementById('info').style.backgroundColor ="red";
  }
  if(userNbre < nb){
    console.log("false");
    document.getElementById('info').innerHTML += '';
  }
  if(userNbre > nb){
    console.log("false");
    document.getElementById('info').innerHTML += '';
  }
  else if (isNaN(userNbre)){
    document.getElementById('info').innerHTML += ('Veuillez entre un nombre pas un charactere');
    console.log("ceci est n'est pas un nombre");
  }
}


/*
function compTetour(){
    var tour = 10;
      for (var i = 0; i < tour; i++) {
      i++;
        if (i = 5){
          alert("Test")
        }
      else if (i = 10) {
          alert("All your base are all belong to us")
        }
      }
    }
*/

/*
while (gagne == 0) {
  cpt++;
  var userNbre = saiSieU;
  console.log("nombre de tours:" + cpt);
  console.log("nombre choisi par joueur:" + plNbre);
  //si le nombre joueur est inferieur au nbre de l'ia
  if (userNbre<nb){
    alert("C'est Plus");

  }
  //si le nombre joueur est superieur au nbre de l'ia
  else if (userNbre>nb){
    alert("C'est Moins");
  }
  // creation d'un message d erreur si le character n'est pas un nombre
  else if (isNaN(plNbre)){
    alert('Veuillez entre un nombre pas un charactere');
    console.log("ceci est n'est pas un nombre")
  }
    else {
      gagne=1;
    }
}alert("C'est gagne");
  console.log("nombre de tours:" + cpt);
  console.log("fin du script");
  */
