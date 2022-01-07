const lastNameInput = document.getElementById("lastname");

lastNameInput.addEventListener("keyup", logValue);

function logValue(e){
    console.log(`valeur du champ : ${document.getElementById("lastname").value}`);
}