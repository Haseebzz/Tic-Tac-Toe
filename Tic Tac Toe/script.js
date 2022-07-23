let gameState = false;
let board;
let playerX = 'X';
let playerO = 'O';
let currentPlayer = playerX;


window.onload = function(){
    startGame();
}

function startGame(){
   board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
   ]
   for(let r = 0;r<3;r++){
    for(let c = 0;c<3;c++){
        let tile = document.createElement('div');//<div>
        tile.classList.add('tile');//<div class = tile
        tile.id = r.toString() + '-'+ c.toString();//<div class = tile id = 0-0
        document.getElementById('board').append(tile);
        tile.addEventListener('click', setTile);
    }
   }
}



function setTile(){
    
   if(gameState){
    return;
   }
   
   let tile = this.id;
   let coords = tile.split('-');
   let r = parseInt(coords[0]);
   let c = parseInt(coords[1]);
   if(board[r][c]!=' '){
    return;
   }
   
   board[r][c] = currentPlayer;
   
   this.innerText = currentPlayer;
   if(currentPlayer== playerO){
    currentPlayer = playerX;
   }
   else{
    currentPlayer = playerO;
   }
   getWinner();
}

function getWinner(){
    //row
    for(let r = 0;r<3;r++){
        if(board[r][0]==board[r][1] && board[r][1] == board[r][2] && board[r][0]!=' '){
            for(let i = 0;i<3;i++){
               
                let tile = document.getElementById(r.toString() + '-' + i.toString());
                tile.classList.add('winner');
            }
            gameState = true;
            return;
        }
    }
    //column
    for(let c = 0;c<3;c++){
        if(board[0][c]==board[1][c] && board[1][c] == board[2][c] && board[0][c]!=' '){
            for(let i = 0;i<3;i++){
                let tile = document.getElementById(i.toString()+ '-' + c.toString());
                tile.classList.add('winner');
            }
            gameState = true;
            return;
        }
    }
    //diagonal
    for(let i = 0;i<3;i++){
        if(board[2][0]==board[1][1] && board[1][1]==board[0][2] && board[2][0]!=' '){
            for(let i = 0;i<3;i++){
                let tile = document.getElementById('2-0');
                tile.classList.add('winner');

                tile = document.getElementById('1-1');
                tile.classList.add('winner');

                 tile = document.getElementById('0-2');
                tile.classList.add('winner');
            }
            gameState = true;
            return;
        }
    }
    //anti-diagonal
    for(let i = 0;i<3;i++){
        if(board[0][0]==board[1][1] && board[1][1]==board[2][2] && board[0][0]!=' '){
            for(let i = 0;i<3;i++){
                let tile = document.getElementById(i.toString() + '-' + i.toString());
                tile.classList.add('winner');
            }
            gameState = true;
            return;
        }
    }
}