var canvas;
var canvasContext;
var posx = 0
var posy = 0
window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	document.addEventListener('keydown', (event) => {
		var keyName = event.keyCode
		if(keyName === 39) {
			player.pos.x += 10
		} else if (keyName === 37) {
			player.pos.x -= 10
		}
	})
	update()
	
}

var levels = [2, 5, 10, 15]

var bounceCounter = 0

function incSpeed() {
	for(var i = 0; i<levels.length;i++) {
		if (bounceCounter === levels[i]) {
			debugger
		ball.yspeed *= 1,5
	}
	}
}
function draw() {
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0,0,canvas.width,canvas.height);
	puck(ball.pos.x, ball.pos.y)
	ball.pos.y += ball.yspeed
	ball.pos.x += ball.xspeed
	collision()
	incSpeed()
	bouncer(player.pos.x, player.pos.y)
}

var player = {
	pos: {x: 350, y: 570}
}
var ball = {
	pos: {x:390, y:290},
	yspeed: 5,
	xspeed: Math.floor(Math.random() * 10) - 5
}
/* function bounce() {
	if (ball.xspeed < 0) {
		ball.xspeed = -Math.abs(centerBall)
	}
} */
function collision() {
	if (ball.pos.y < 0) {
		ball.yspeed *= -1
	}
	if (ball. pos.x < 0 || ball. pos.x > canvas.width -20) {
		ball.xspeed *= -1
	}
	if (ball.pos.y +20 === player.pos.y && (ball.pos.x < player.pos.x +100 && ball.pos.x +20 > player.pos.x)) {
		ball.yspeed *= -1
		var centerBall = (player.pos.x + 50) - (ball.pos.x +10)
		centerBall /= 10
		console.log(ball.xspeed)
		ball.xspeed = -centerBall
		console.log(ball.xspeed)
		bounceCounter++
	}
}

function puck(x, y) {
	canvasContext.fillStyle = 'lime';
	canvasContext.fillRect(x, y, 20, 20)
}
function bouncer(x, y) {
	canvasContext.fillStyle = 'red';
	canvasContext.fillRect(x, y, 100, 20)
}
function update() {
	draw()
	requestAnimationFrame(update)
}
