const image = document.getElementById('image1');

image.addEventListener("mouseenter", function(e){
    e.target.style.border = "3px solid red";
});
image.addEventListener("mouseleave", function(e){
    e.target.style.border = "none";
})