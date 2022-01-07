const text = document.getElementById("text");
const buttons = document.querySelectorAll(".color");
for (const color of buttons) {
    color.addEventListener("click", (e)=>{
        text.style.color = color.classList[1];
    });
}