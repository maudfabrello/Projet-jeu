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
            button(true);
            let buttonVerifHide= document.getElementsByTagName('button')[0];
            if(this.parentElement.parentElement.classList[1]==string)
            {
               this.className=this.classList[0];
               if (document.contains(buttonVerifHide)){
                    buttonVerifHide.remove();
                }      
            }
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
        string = string+1;
        verifString(string);
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
                let showButton = false
                let arrayNotClear = item.parentElement.children;
                for(let i = 1;i <= arrayNotClear.length;i++){
                    if(arrayNotClear[i-1].classList[1]!=undefined)
                    {
                        showButton=true
                    }
                    else{
                        showButton=false
                    }
                }
                if(showButton){
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
function verifString(string)
{
    let itemToVerif = document.querySelectorAll('.string');
    var BreakException = {};
    try{
        itemToVerif.forEach(item => {
            if(item.classList[1]==string-1)
            {
                let stringColorPlayer=[];
                let stringColorArray = item.children[1].children;
                for(let i =1;i<=stringColorArray.length;i++){
                   stringColorPlayer.push(stringColorArray[i-1].classList[1]);
                };
                throw BreakException;
            } 
        });
    }
    catch(e)
    {
        if(e !== BreakException) throw e;
    }
}
let string = 1;
let colorRamdon = shufflePawns();
let startButton = document.getElementById('play');
startButton.addEventListener('click',playBoardStarter);
button(true);
let robo = ['bleu','rouge','jaune','vert'];
let moi = ['jaune','rouge','bleu','jaune'];
let result=[0,0,0,0];
for(let i = 0;i<robo.length;i++){
    if(robo[i]===moi[i])
    {
        result[i]=2;
    }
};
console.log(result)
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
// couleur ET bien placé
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
/* FONCTION YOU WIN ! ou Damnit, you lose ! = faire un DOM 

     function testNum(a) {
  let result;
  if (a > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
}
 = faire une variable positive et une variable négative pour faire
 un set attribute createdocument
= comment le faire apparaître sur le playboard ? innerHTML */