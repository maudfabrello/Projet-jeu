function playBoardStarter(){
    let playBoard = document.getElementById('playBoard');
    //reset the playboard
    playBoard.innerHTML = ''; // déclare une variable vide
    let render =''
    for(let i=1;i<=10;i++) // i=1/10 colonnes = limite/i++ : incrémentation de 1 à 1
    {
        render+="<div class=\"string "+i+"\">";
        render+= "<div class=\"verif flexor\"><div class=\"element1\"></div><div class=\"element2\"></div><div class=\"element3\"></div><div class=\"element4\"></div></div>";
        render+= "<div class=\"playboard flexor\"><div class=\"element1\"></div><div class=\"element2\"></div><div class=\"element3\"></div><div class=\"element4\"></div></div>";
        render+= "</div>"
    }
    playBoard.innerHTML= rest;
}
let startButton = document.getElementById('play');
startButton.addEventListener('click',playBoardStarter);
// playBoardStarter();


//function 1 : start the game

function Mastermind(numbers, nblignes, nbcouleurs, nomvariable) {
    //D�claration des attributs d'objets
    this.nbcolonnes = nbcolonnes;
    this.nblignes = nblignes;
    this.nbcouleurs = nbcouleurs;
    this.nomvariable = nomvariable;
    this.proposition = new Array();
    this.solution = new Array();