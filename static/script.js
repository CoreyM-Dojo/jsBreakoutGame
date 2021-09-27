console.log("Connecting to js file")

const GAME = [
    "xxxxxx",
    " xxxx ", 
    "  x   ",
    "  o   ",
    "  P   ",
]
const BOARD = document.getElementById("gameBoard");
console.log(BOARD.getBoundingClientRect())
document.addEventListener("keydown", function(e) {
    console.log(e)
    movePlayer(e);
})

const createGame = async (game) => {

    for (let i = 0; i < game.length; i++) {
        const row = document.createElement("div")
        row.setAttribute("class", "row")
        for (let j= 0; j < game[i].length; j++) {
            if (game[i][j] == "x") {
                const block = document.createElement("div")
                block.setAttribute("class", "block")
                row.appendChild(block)
            }
            else if (game[i][j] == "o") {
                const ball = document.createElement("div")
                ball.setAttribute("id", "ball")
                row.appendChild(ball);
            }
            else if (game[i][j] == "P") {
                const player = document.createElement("div")
                player.setAttribute("id", "player");
                row.appendChild(player);
            }
        }
        BOARD.appendChild(row);
    }
    
}


createGame(GAME);
let yPosition = document.getElementById("ball").style.top = ball.getBoundingClientRect().top
let xPosition = document.getElementById("ball").style.left = ball.getBoundingClientRect().left;
var vertical = 0;
var horizontal = 0

const moveBall = () => {
    const ball = document.getElementById("ball");

    if (vertical == 0) {
        var moveDown = yPosition + 20
    }
    if (horizontal == 0) {
        var moveLeft = xPosition + 10;
    }

    // console.log(yPosition)
    // let moveLeft = xPosition + 20;
    // console.log({moveLeft})
    // console.log(yPosition)
    
    // ball.style.left = moveLeft + "px";
    
    if (vertical == 1) {
        moveDown = yPosition - 20;
        
    }  
    if (horizontal == 1) {
        moveLeft = xPosition - 10;
    }
    
    if (parseInt(ball.style.top) > 750 ){
        vertical = 1
    }
    if (parseInt(ball.style.top) < 320) {
        vertical = 0;
    }

    if (parseInt(ball.style.left) > 810 ){
        horizontal = 1
    }
    if (parseInt(ball.style.left) < 270) {
        horizontal = 0;
    }
    xPosition = moveLeft
    yPosition = moveDown;
    ball.style.left = moveLeft + "px";
    ball.style.top = moveDown + "px";
    // console.log(ball.style.left)
}
const player = document.getElementById("player")
console.log(player)
playerPos = document.getElementById("player").getBoundingClientRect().left
const movePlayer = (e) => {
    if (e.key === "ArrowLeft") {
        // const player = document.getElementById("player")
        // console.log(document.getElementById("ball").getBoundingClientRect)
        console.log(player.style.left)
        playerPos = (parseInt(playerPos) - 30) + "px";
        player.style.left = playerPos;
        console.log("Move left")
    }
    else if (e.key == "ArrowRight") { 
        playerPos = (parseInt(playerPos) + 30) + "px"
        player.style.left = playerPos;
        console.log("Move right");
    }

}

const getDistance = (x1, x2, y1, y2) => {
    let xDistance = Math.abs(x1 - x2)
    let yDistance = Math.abs(y1 - y2)
    let distance = Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance,2));
    return distance;
}

// console.log(allBlocks);
function checkCollision() {
    let allBlocks = document.getElementsByClassName('block')
    
    for (let i = 0; i < allBlocks.length; i++) {
        ball = document.getElementById("ball");
    
        let x1 = allBlocks[i].getBoundingClientRect().x;
        let y1 = allBlocks[i].getBoundingClientRect().y;
        let x2 = ball.getBoundingClientRect().x;
        let y2 = ball.getBoundingClientRect().y;
        let overlap = allBlocks[i].getBoundingClientRect().height/2
        if (getDistance(x1,x2,y1,y2) - overlap <= 0) {
            console.log("HIT!")
            console.log(getDistance(x1,x2,y1,y2));
            allBlocks[i].parentNode.removeChild(allBlocks[i]);
            vertical = 0
            horizontal = 0
        }
        else {
            console.log("No hit")
        }
    }
}
// setInterval(movePlayer, 100);
setInterval(moveBall, 75);
setInterval(checkCollision, 75);