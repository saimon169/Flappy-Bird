let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;
let birdImage;

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}

window.onload = function() {
    board = document.querySelector('#board');
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext('2d'); // used for drawing aon the board

    //draw bird
    // context.fillStyle = "green";
    // context.fillRect(bird.x,bird.y,bird.width,bird.height);

    //load bird Image
    birdImage = new Image();
    birdImage.src = './images/flappybird.png';
    birdImage.onload = function(){
        context.drawImage(birdImage,bird.x,bird.y,bird.width,bird.height);
    }
    requestAnimationFrame(update);
}

//helps to keep the frames move in  loop
function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, boardWidth, boardHeight);

    //bird
    context.drawImage(birdImage,bird.x,bird.y,bird.width,bird.height);
}