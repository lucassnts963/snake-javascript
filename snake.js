function Snake(size){
    this.x = 0 //Position X
    this.y = 0 //Position Y
    this.size = size // Snake's Width
    this.speed = [1 , 0] // Refere to velocity x (position 0) and y (position 1)
    this.acceleration = 20
    this.acceptedMoves = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    }
    this.total = 0
    this.body = []
    
    //This function change the position of the snake
    this.update = function(food){
        this.x = this.x + this.speed[0] * this.acceleration
        this.y = this.y + this.speed[1] * this.acceleration
        this.getCollision(this.x, this.y)
        this.eat(food)
        this.drawBody()
    }

    //This function show the new position of the snake
    this.show = function(){
        fill(255)
        rect(this.x, this.y, this.size, this.size)
    }
    
    //This function check if was a collision
    this.getCollision = function(){
        let collisionTail = false

        //Condition to stop running if colide with tail
        for(let i = 0; i < this.total; i++){
            if(this.x === this.body[i][0] && this.y === this.body[i][1]) collisionTail = true
        }

        //Condition to stop running if colide with a wall
        if(this.x === width || this.x < 0 || this.y === height || this.y < 0 || collisionTail) this.restart() 
    }

    this.restart = function(){
        this.x = 0
        this.y = 0
        this.speed = [1, 0]
        this.total = 0
        this.body = []
    }

    this.eat = function(food){
        var score = document.getElementById('score')
        if(food.x === this.x && food.y === this.y){
            this.total++
            this.body.push([this.x, this.y])
        }
        score.innerText = `Score: ${this.total}`
    }

    this.drawBody = function(){
        let b = this.body
        let tail = [this.x, this.y]

        for(let i = 0; i < this.total; i++){
            let pos = b[i]
            b[i] = tail
            tail = pos
        }
        b.map(pos => {
            let c = color(255, 204, 0)
            fill(c)
            rect(pos[0], pos[1], this.size, this.size)
        })
    }

    //This function set a new direction to the snake
    this.setDirection = function(code){
        switch(code){
            case this.acceptedMoves.UP:
                if(this.speed[1] === 1) {
                    this.speed = [0, 1]
                }else{
                    this.speed = [0, -1]
                }
                break
            case this.acceptedMoves.DOWN:
                if(this.speed[1] === -1) {
                    this.speed = [0, -1]
                }else{
                    this.speed = [0, 1]
                }
                break
            case this.acceptedMoves.RIGHT:
                if(this.speed[0] === -1) {
                    this.speed = [-1, 0]
                }else{
                    this.speed = [1, 0]
                }
                break
            case this.acceptedMoves.LEFT:
                if(this.speed[0] === 1) {
                    this.speed = [1, 0]
                }else{
                    this.speed = [-1, 0]
                }
                break
        }
    }
}