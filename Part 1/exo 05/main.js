let rdmNbr = Math.floor(Math.random()*50);
let answer;
console.log("cheatcode : " + rdmNbr);
answer = prompt("trouvez mon nombre entre 0 et 50 :");
while(answer != rdmNbr){
    if (answer > rdmNbr){
        answer = prompt("trop grand, réessayez");
    } else if (answer < rdmNbr) {
        answer = prompt("trop petit, réessayez");
    } else if (isNaN(answer)) {
        answer = prompt("ce n'est pas un nombre, réessayez");
    }
    console.log("cheatcode : " + rdmNbr);
}
alert("Bravo ! le nombre etait bien" + rdmNbr);
