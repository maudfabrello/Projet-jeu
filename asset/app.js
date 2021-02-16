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
    deleteColor();
}
function deleteColor()
{
    let pawnList = document.querySelectorAll('.playboard>*[class^="element"]');
    pawnList.forEach(item => {
        item.addEventListener('click',function()
        {
            this.className=this.classList[0];
        })
    })
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
    var textContent = document.createTextNode('Ok'); // effacerait la ligne si joueur n'est pas sûr de sa combinaison ?
    buttonVerif.appendChild(textContent);
    stringToverify.appendChild(buttonVerif);
    buttonVerif.addEventListener('click',function(){
        button(true)
        buttonVerif.remove();
    })
}
function button(active){
    let buttonList = document.querySelectorAll('.pawnItem');
    buttonList.forEach(item => {
        if(active===true)
        {
            item.addEventListener('click',putColor);
        }
        else if(active===false)
        {
            item.removeEventListener("click",putColor);
        }  
    });
}
function putColor(){
    let pawnList = document.querySelectorAll('.playboard>*[class^="element"]');
    var BreakException = {};
    try{
        pawnList.forEach(item => {
            if(item.classList.length===1)
            {
                item.classList.add(this.classList[1]);
                item.classList.add('round');
                if(item.classList[0]==='element4')
                {
                    verif(item.parentElement.parentElement);
                    button(false);
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
button(true);

//TO DO : fonction de vérification de la combianaison couleur/position de la ligne en cours
// function compare () {
//     var isMatch = true;
//     var codeCopy = code.slice(0);

// // pion de bonne couleur ET bien placé
//     for (var i = 0; i < code.length; i++) {
//       if (guess[i] === code[i]) {
//         //insertPawn('hit');
//         codeCopy[i] = 0;
//         guess[i] = -1;
//       } else
//         isMatch = false;
//     }

// // pion de bonne couleur MAIS mal placé
//     for (var j = 0; j < code.length; j++) {
//       if (codeCopy.indexOf(guess[j]) !== -1) {
//         //insertPawn('almost');
//         codeCopy[codeCopy.indexOf(guess[j])] = 0;
//       }
//     }
// }