function Food(size){
    this.x = 0
    this.y = 0
    this.size = size

    this.show = function(){
        let c = color(255, 0, 0)
        fill(c)
        rect(this.x, this.y, this.size, this.size)
    }

    this.update = function(snake){
        if(snake.x === this.x && snake.y === this.y) this.setRandomPosition()
    }

    this.setRandomPosition = function(){
        this.x = floor(random(floor(width/size))) * size
        this.y = floor(random(floor(height/size))) * size
    }
}