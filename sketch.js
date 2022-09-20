var snake
var food
var size = 20

function setup() {
    createCanvas(400, 400);
    snake = new Snake(size)
    food = new Food(size)
    food.setRandomPosition()
    frameRate(10)
}
  
function draw() {
    background(51)
    snake.update(food)
    snake.show()
    food.update(snake)
    food.show()
}

function keyPressed(){
    snake.setDirection(keyCode)
}

function up(){
    snake.setDirection(snake.acceptedMoves.UP)
}
function down(){
    snake.setDirection(snake.acceptedMoves.DOWN)
}
function right(){
    snake.setDirection(snake.acceptedMoves.RIGHT)
}
function left(){
    snake.setDirection(snake.acceptedMoves.LEFT)
}

