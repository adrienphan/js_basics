let image1 = document.getElementById("image1");

image1.addEventListener("mouseenter", function(e){
    console.log(e.target);
    console.log(e.target.id);
    e.target.src= "./assets/images/image1_2.jpg";
});
image1.addEventListener("mouseleave", function(e){
    e.target.src= "./assets/images/image1.jpg";
});
