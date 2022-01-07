//pour lancer le script depuis header, mais apres chargement complet
document.addEventListener("DOMContentLoaded", function(e){
    const lastname = document.getElementById('lastname');

    lastname.addEventListener("focusout", function(toto){
        alert("merci de votre participation");
    });
});