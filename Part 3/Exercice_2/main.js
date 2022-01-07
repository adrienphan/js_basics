const texte = document.getElementById("text");

function Afficher(elementId){
    let target = document.getElementById(elementId);
    console.log(target)
    target.style.display = "block";
}
function Masquer(elementId){
    let target = document.getElementById(elementId);
    target.style.display = "none";
}