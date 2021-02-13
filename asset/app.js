function plateauStarter(){
    let plateau = document.getElementById('plateau');
    //reset the plateau
    plateau.innerHTML = '';
    let rendu =''
    for(let i=1;i<=10;i++)
    {
        rendu+="<div class=\"ligne "+i+"\">";
        rendu+= "<div class=\"verif\"><div class=\"element1\"></div><div class=\"element2\"></div><div class=\"element3\"></div><div class=\"element4\"></div></div>";
        rendu+= "<div class=\"jeux\"><div class=\"element1\"></div><div class=\"element2\"></div><div class=\"element3\"></div><div class=\"element4\"></div></div>";
        rendu+= "</div>"
    }
    plateau.innerHTML= rendu;
}
plateauStarter();