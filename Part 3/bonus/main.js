// utilisation de e-target :
document.addEventListener('click',(event)=>{

    console.log(event.target); // l'element
    console.log(event.target.id); // son id 
    console.log(event.target.className); // sa classe 
    console.log(event.target.dataset.invente); // une data 
    console.log(event.target.textContent); // son contenu ( peut utiliser innerHTML si on a besoin des balises )

    // recupere un element sans le connaitre a l'avance 
    if(event.target.matches("#testDiv")){
        alert("vous avez bien cliqué sur la div");
    }

})