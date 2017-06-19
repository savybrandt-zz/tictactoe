var prompt = require('prompt');

var TicTacToe = function() {
	this.board = [
	['-', '-', '-'],
	['-', '-', '-'],
	['-', '-', '-']
	];

	this.printBoard = function() {
		console.log( 
		   this.board[0] + '/n'
		 + this.board[1] + '/n' 
		 + this.board[2])
	}

	this.startGame = function() {
		console.log("Let's play tic-Tac-Toe!");
		prompt.start();
		prompt.get(['player1', 'player2'], function(err, result) {
			var players = {
				player1: {name: result.player1, piece: 'X'},
				player2: {name: result.player2, piece: 'O'}
				}
			console.log('Player 1: ', result.player1);
			console.log('Player 2: ', result.player2);
		})
		while(!gameOver()) {
			this.playerTurn(players.player1);
			this.playerTurn(players.player2)
		}
	}

	this.playerTurn = function(player) {
		console.log(player, "'s turn");
		prompt.get(['column', 'row'], function(err, response) {
			if(this.board[response.column][response.row] !== '-') {
				console.log('That space is already taken! Try again!')
				this.playerTurn(player);
			} else {
				this.board[response.column][response.row] = player.piece;
				this.printBoard()
				if(this.gameOver()){
					console.log('Game Over! /n'+ player +' wins!');
				}
			}
		})
	}	

	this.gameOver = function() {
		return (
			this.board[0][0] === this.board[0][1] === this.board[0][2] ||
			this.board[1][0] === this.board[1][1] === this.board[1][2] ||
			this.board[2][0] === this.board[2][1] === this.board[2][2] ||
			this.board[0][0] === this.board[1][0] === this.board[2][0] ||
			this.board[0][1] === this.board[1][1] === this.board[2][1] ||
			this.board[0][2] === this.board[1][2] === this.board[2][2] ||
			this.board[0][0] === this.board[1][1] === this.board[2][2] ||
			this.board[0][2] === this.board[1][1] === this.board[2][0] ||
		)	
	}

}