//EXERCICEs 4-5
const images = document.querySelectorAll("img");
console.log(images);

for (const image of images) {
    //évenement lié à l'exercice 4
    image.addEventListener("mouseenter", ChangeSource);
    //évenement lié à l'exercice 5
    image.addEventListener("mouseleave", ChangeBackSource);
}
//change la source de l'image en ajoutant _2 entre le nom de l'image et le ".jpg"
function ChangeSource(e){
    e.target.src = e.target.src.replace(e.target.id + ".jpg", e.target.id + "_2.jpg");
}
//exercice 5: supprime le _2 du nom de la source
function ChangeBackSource(e){
    e.target.src = e.target.src.replace("_2", "");
}