let firstNbr = prompt("donnez deux nombres à virgule. Le premier : ");
while(!isFloat(firstNbr)){
    firstNbr = prompt("entrée invalide ! veuillez retenter");
}
let secondNbr = prompt("le deuxieme : ");
while(!isFloat(secondNbr)){
    secondNbr = prompt("entrée invalide ! veuillez retenter");
}
firstNbr = Math.floor(firstNbr);
let result = firstNbr * secondNbr;
alert(`${firstNbr} x ${secondNbr} = ${result}`);

function isFloat(nbr){
    return !isNaN(nbr) && nbr % 1 !==0;
}