const password = document.getElementById('password');
const confirmPassword = document.getElementById("confirmPassword");
const inputs = [password, confirmPassword]

for (const input of inputs) {
    input.addEventListener("keyup", function(e){
        console.log(password.value);
        if (password.value != confirmPassword.value && confirmPassword.value != ""){
            password.style.border = "2px solid red";
            confirmPassword.style.border  = "2px solid red";
        } else {
            password.style.border = "";
            confirmPassword.style.border  = "";
        }
        
    });
}

