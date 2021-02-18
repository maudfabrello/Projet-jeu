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
    string=1;
    deleteColor();
    button(true);
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
        verifString(string);
        string = string+1;
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
    let stringColorPlayer=[];
    try{
        itemToVerif.forEach(item => {
            if(item.classList[1]==string)
            {
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
    let result=[0,0,0,0];
    let colorplay= [0,0,0,0]
    for(let i = 0;i<stringColorPlayer.length;i++){
        if(colorRamdon[i]==stringColorPlayer[i])
        {
            result[i]=2;
            colorplay[i]=1;
        }
    }
    for(let i=0; i<result.length;i++)
    {    
        if(result[i]<1)
        {
            for(let o =0;o<result.length;o++)
            {
                if(stringColorPlayer[i]===colorRamdon[o])
                {
                    if(colorplay[o]==0)
                    {
                        colorplay[o]=1;
                        result[i]=1;
                    }
                }
            }
        }
    }
    let showResult = document.querySelectorAll('.string');
    showResult.forEach(item=>{
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
            showResult.children[i].children[0].className='silver';
        }
    }
    win(result);
    loss(result,string);
}
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
let colorRamdon = shufflePawns();
let startButton = document.getElementById('play');
startButton.addEventListener('click',playBoardStarter);
let bandeauResult = document.getElementById('result');
bandeauResult.addEventListener('click',function()
{
    this.style='display:none';
    colorRamdon = shufflePawns();
    playBoardStarter();
});