function playBoardStarter(){
    let playBoard = document.getElementById('playboard');
    //reset the playboard
    playBoard.innerHTML = ''; 
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
function verif(stringToverify)
{
    var buttonVerif = document.createElement("button");
   // var textContent = document.createTextNode('verification/reset'); // effacerait la ligne si joueur n'est pas sûr de sa combinaison ?
    buttonVerif.appendChild(textContent);
    stringToverify.appendChild(buttonVerif);
}
function button(){
    let buttonList = document.querySelectorAll('.pawnItem');
    buttonList.forEach(item => {
        item.addEventListener('click',function()
        {
            putColor(this.classList[1]);
        });
    });
}
function putColor(color){
    let pawnList = document.querySelectorAll('.playboard>*[class^="element"]');
    var BreakException = {};
    try{
        pawnList.forEach(item => {
            if(item.classList.length===1)
            {
                if (document.contains(document.getElementsByTagName("button")[0])){
                    document.getElementsByTagName("button")[0].remove();
                }
                item.classList.add(color);
                item.classList.add('round');
                if(item.classList[0]==='element4')
                {
                    verif(item.parentElement.parentElement);
                }
                throw BreakException;
            }
        });
    }
    catch(e)
    {
        if(e !== BreakException) throw e;
    }
}
let startButton = document.getElementById('play');
startButton.addEventListener('click',playBoardStarter);
button();

//fonction de vérification de la combianaison couleur/place de la ligne en cours


