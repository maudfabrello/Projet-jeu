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
<<<<<<< HEAD
            let buttonVerifHide= document.getElementsByTagName('button') [0];
            if(this.parentElement.parentElement.classList[1]==string)
            {
            this.className=this.classList[0];
            if (document.contains(buttonVerifHide)){
                buttonVerifHide.remove();
            }
        }
=======
            let buttonVerifHide= document.getElementsByTagName('button')[0];
            if(this.parentElement.parentElement.classList[1]==string)
            {
               this.className=this.classList[0];
               if (document.contains(buttonVerifHide)){
                    buttonVerifHide.remove();
                }      
            }
>>>>>>> 80bcbbe0d92dc661fcc03671d7b705d82f9f1207
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
    var textContent = document.createTextNode('Ok'); // validerait la ligne quand joueur est sûr de sa combinaison
    buttonVerif.appendChild(textContent);
    stringToverify.appendChild(buttonVerif);
    buttonVerif.addEventListener('click',function(){
        button(true)
        buttonVerif.remove();
<<<<<<< HEAD
        verifString(string);
        string = string+1;
=======
        string = string+1;
        verifString(string);
>>>>>>> 80bcbbe0d92dc661fcc03671d7b705d82f9f1207
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
<<<<<<< HEAD
                for(let i = 1; i <= arrayNotClear.length;i++){
=======
                for(let i = 1;i <= arrayNotClear.length;i++){
>>>>>>> 80bcbbe0d92dc661fcc03671d7b705d82f9f1207
                    if(arrayNotClear[i-1].classList[1]!=undefined)
                    {
                        showButton=true
                    }
                    else{
                        showButton=false
                    }
                }
<<<<<<< HEAD
                if (showButton) {
=======
                if(showButton){
>>>>>>> 80bcbbe0d92dc661fcc03671d7b705d82f9f1207
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
    let result=[0,0,0,0];
    let colorplay= [0,0,0,0]
    for(let i = 0; i<stringColorPlayer.length;i++){
        if(colorRandom[i]==stringColorPlayer[i])
        {
            result[i]=2;
            colorplay[i]=1;
    }
}
    for(let i=0; i<result.length;i++)
    {
    let colortarget = stringColorPlayer[i];
    for(let o=O; o<result.length;o++)
    {
        if(colortarget==colorRandom [o])
        {
            if(colorplay[i]===0)
            {
                result[i]=1;
                break;
            }
        }
    }
}
let showResult = document.querySelectorAll('.string');
showResult.forEach(item=> {
    if(item.classList[1]==string)
    {
        showResult=item.children[0];
    }
})
for(let i =0;i<showResult.children.length;i++)
{
    if(result[i]===2)
    {
        showResult.children[i].children[0].className='gold';
    }else if(result[i]===1)
    {
        showResult.children[1].children[0].className='silver';
    }
}
win(result);
loss(result,string);
}
<<<<<<< HEAD
function win(resulter)
{
    let win=true;
    resulter.forEach(element => {
        if(element!==2)
        {
            win=false
        }
    });
    if(win)
    {
        bandeauResult.innerText='you win !';
        bandeauResult.style='display:block';
    }
}
function loss(resulter,string)
{
    let looser=false;
    if(string==10)
    {
        resulter.forEach(element => {
            if(element!==2)
            {
                looser=true
            }
        });
        if(looser)
        {
            bandeauResult.innerText='you loose !';
            bandeauResult.style='display:block';
        }
    }

}
let string = 1;
let colorRandom = shufflePawns();
let startButton = document.getElementById('play');
startButton.addEventListener('click',playBoardStarter);
button(true);
let bandeauResult = document.getElementById('result');
bandeauResult.addEventListener('click',function()
{
    this.style='display:none';
    colorRandom = shufflePawns();
    playBoardStarter();
});
=======
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
>>>>>>> 80bcbbe0d92dc661fcc03671d7b705d82f9f1207
