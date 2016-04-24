var x = 0;
var y = 0;
var width = 20;
var height = 20;
var canvas;

var grid = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		    [0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0],
		    [0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0],
		    [0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0],
		    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		    [0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0],
		    [0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0],
		    [0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0],
		    [0,0,0,0,1,0,1,1,1,3,1,1,1,0,1,0,0,0,0],
		    [1,1,1,1,1,1,1,1,3,3,3,1,1,1,1,1,1,1,1],
		    [0,0,0,0,1,0,1,1,1,3,1,1,1,0,1,0,0,0,0],
		    [0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0],
		    [0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0],
		    [0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0],
		    [0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0],
		    [0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0],
		    [0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0],
		    [0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0],
		    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]];

function startGame() {
	drawMaze();
   	gameArea.start();
}

var gameArea = {
	canvas : canvas = document.createElement("canvas"),
	start : function() {
	        this.context = this.canvas.getContext('2d');
	        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	        //this.context.drawImage("ghost.jpg", 30, 30);
	        //this.interval = setInterval(updateGameArea, 20);
	        //drawRect(x, y, width, height);
        }
}

function updateGameArea() {
	cx = gameArea.context;
	cx.clearRect(0, 0, 750, 500);
	++x;
	++y;
	drawRect(x, y, width, height);

}

function drawRect(x, y, width, height, style) {
	var cx = canvas.getContext('2d');
    cx.beginPath();
    cx.rect(x, y, width, height);
    cx.closePath();
    cx.fillStyle = style;
    cx.fill();
}

function drawMaze() {
	var cx = gameArea.canvas.getContext('2d');
	var scalex = 15;
	var scaley = 8;
	for(var i = 0 ; i < grid.length ; ++i)
		for(var j = 0 ; j < grid[i].length ; ++j)
			if(grid[i][j] == 1) {
				console.log('here');
				drawRect(i*scalex, j*scaley, grid[i][j]*scalex, grid[i][j]*scaley, 'blue');
			}

}