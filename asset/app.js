function playBoardStarter(){
    let playBoard = document.getElementById('playboard');
    //reset the playboard
    playBoard.innerHTML = ''; // déclare une variable vide
    let render =''
    for(let i=1;i<=10;i++) // i=1/10 colonnes = limite/i++ : incrémentation de 1 à 1
    {
        render+="<div class=\"string "+i+"\">";
        render+= "<div class=\"verif flexor\"><div class=\"element1\"><span></span></div><div class=\"element2\"><span></span></div><div class=\"element3\"><span></span></div><div class=\"element4\"><span></span></div></div>";
        render+= "<div class=\"playboard flexor\"><div class=\"element1\"></div><div class=\"element2\"></div><div class=\"element3\"></div><div class=\"element4\"></div></div>";
        render+= "</div>"
    }
    playBoard.innerHTML= render;
}
function shufflePawns()
{
    var fourPawns=["yellow","red","green","blue"];
    var fourRandomPawns=[];
    let n = 0;
    while (n<4){
        fourRandomPawns.push(fourPawns[Math.floor(Math.random() * Math.floor(4))]);
        n++;
    }
    return fourRandomPawns;
}
let startButton = document.getElementById('play');
startButton.addEventListener('click',playBoardStarter);
// playBoardStarter();


//function 1 : start the game

// function Mastermind(numbers, nblignes, nbcouleurs, nomvariable) {
//     //D�claration des attributs d'objets
//     this.nbcolonnes = nbcolonnes;
//     this.nblignes = nblignes;
//     this.nbcouleurs = nbcouleurs;
//     this.nomvariable = nomvariable;
//     this.proposition = new Array();
//     this.solution = new Array();
// }