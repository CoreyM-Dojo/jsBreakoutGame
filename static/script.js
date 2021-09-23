console.log("Connecting to js file")

const GAME = [
    "xxxxxx",
    " xxxx ", 
    "  x   ",
    "  o   ",
    "  P   ",
]
const BOARD = document.getElementById("gameBoard");

const createGame = (game) => {

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
