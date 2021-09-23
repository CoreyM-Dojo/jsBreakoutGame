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
var count = 0;

const moveBall = () => {
    const ball = document.getElementById("ball");

    if (count == 0) {
        var moveDown = yPosition + 20
    }

    // console.log(yPosition)
    // let moveLeft = xPosition + 20;
    // xPosition = moveLeft
    // console.log({moveLeft})
    // console.log(yPosition)
    
    // ball.style.left = moveLeft + "px";
    
    if (count == 1) {
        moveDown = yPosition - 20;
        
    }  
    
    if (parseInt(ball.style.top) > 750 ){
        count = 1
    }
    if (parseInt(ball.style.top) < 320) {
        count = 0;
    }
    yPosition = moveDown;
    ball.style.top = moveDown + "px";
    console.log(ball.style.top)
}
setInterval(moveBall, 75);