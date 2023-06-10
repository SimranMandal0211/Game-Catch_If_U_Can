let ball = document.querySelector('.box');
let main = document.getElementsByTagName("main")[0];


ball.addEventListener("mouseover", function(){
    console.log("main.offsetWidth " + main.offsetWidth);
    console.log("main.offsetHeight "+ main.offsetHeight);

    let randomWidth = `${Math.floor(Math.random() * (main.offsetWidth -100))}px`;
    let randomHeight = `${Math.floor(Math.random() * (main.offsetHeight -100))}px`;
    ball.style.left = `${randomWidth}`;
    ball.style.top = `${randomHeight}`;

    console.log(randomHeight);
    console.log(randomWidth);
});