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

//variables for pipe
let pipeArray=[];
let pipeWidth=64;
let pipeHeight=512;
let pipeX=boardWidth;
let pipeY=0;

let topPipeImg;
let bottomPipeImg;

//physics 
let velocityX=-2; //pipes moving left speed 


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

    topPipeImg=new Image();
    topPipeImg.src='./images/toppipe.png';

    bottomPipeImg=new Image();
    bottomPipeImg.src='./images/bottompipe.png';

    requestAnimationFrame(update);
    setInterval(placepipes, 1500); // 1.5 secs

}

//helps to keep the frames move in  loop
function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    //bird
    context.drawImage(birdImage,bird.x,bird.y,bird.width,bird.height);

    //pipes
    for (let i=0;i<pipeArray.length;i++){
        console.log(pipeArray);
        let pipe=pipeArray[i];
        pipe.x +=velocityX;         //move left 2px
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
        
    }
    
}

//every 1.5 sec yo function call 
function placepipes(){

    //(0-1) * pipeHeight/2.
    // 0 -> -128(pipeheight/4)
    // 1 -> -128 -256(pipeheight/4 - pipeheight/2) 


    let randomPipeY= pipeY-pipeHeight/4-Math.random()*(pipeHeight/2);   // 1/4*h to 3/4*h
    let openingSpace= board.height/4;

    let topPipe={
        img : topPipeImg,
        x: pipeX,
        y: randomPipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }

    pipeArray.push(topPipe);    //add new pipe to array

    let bottompipe={
        img : bottomPipeImg,
        x: pipeX,
        y: randomPipeY +pipeHeight+ openingSpace,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }

    pipeArray.push(bottompipe); 
}
