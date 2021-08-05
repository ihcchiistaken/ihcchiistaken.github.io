function rickRoll(){
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley")    
}
function gotGnomed(){
    for(let i=0; i<5; i++){
        window.open("https://www.youtube.com/watch?v=1FFBsX5C61Q&ab_channel=SaucySpaghetti")
    
        }

}

function Franko(){
    let frank = new Audio("Sounds/oonaniani.mp3");
    frank.play();    

}

function fontColor(){
    let colors=["red","blue","green","yellow","purple","orange"]
    let boto = document.getElementById("name");
    let rand=randomNumber(colors.length-1)
    boto.style.color = colors[rand];
}
function randomNumber(max){
    return Math.floor(Math.random()*max)
}

function duckQuack(){
    let quack = new Audio("Sounds/Quack.mp3");
    quack.play();

    
}
function bruh(){
    let bruh = new Audio("Sounds/bruh.mp3");
    bruh.play();
}
function hahaLaugh(){
    let laugh = new Audio("Sounds/laugh.mp3");
    laugh.play();   
}