/**
 * Created by jordan.milner on 7/21/16.
 */
var app = {

    running: false,

    init : function(){

        this.canvas = document.querySelector('#tubeMogulBreakBlock');
        this.context = this.canvas ? this.canvas.getContext('2d') : null;

        if (!this.context)
        {
            console.log("Error getting application context");
            return; //TODO: notify user
        }


        this.setupBricks();
        this.update();

        return;

    },

    update : function(){

        app.clearContext();

        app.drawBricks();
        ball.draw();
        ball.update();
        player.draw();

        requestAnimationFrame(app.update);
    },

    clearContext : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        return;
    },

    die : function(){
        //TODO: better death!
        player.lives -= 1;

        if (player.lives < 1) {
            window.alert("You lose!\nScore: " + player.score);
            this.reset();
        }
        ball.reset();
    },

    drawBricks : function(){

        this.bricks.forEach(function(brick){ brick.draw(); });

    },

    //TODO: this will change per level
    setupBricks : function(){

        this.bricks = new Array();

        var i = 0;
        var brickTop = 50;
        var brickBackLeft = 0;

        for (i = 0; i < 10; i++)
        {
            var brick = new Brick();
            brick.position.x = brickBackLeft + (i * brick.size.width) + i;
            brick.position.y = brickTop;
            brick.health = 3;
            this.bricks.push(brick);
        }

        for (i = 0; i < 10; i++)
        {
            var brick = new Brick();
            brick.position.x = brickBackLeft + (i * brick.size.width) + i;
            brick.position.y = brickTop + brick.size.height + 4;
            brick.health = 3;
            this.bricks.push(brick);
        }

        for (i = 0; i < 10; i++)
        {
            var brick = new Brick();
            brick.position.x = brickBackLeft + (i * brick.size.width) + i;
            brick.position.y = brickTop + (2 * brick.size.height) + 8;
            brick.health = 3;
            this.bricks.push(brick);
        }

        for (i = 0; i < 10; i++)
        {
            var brick = new Brick();
            brick.position.x = brickBackLeft + (i * brick.size.width) + i;
            brick.position.y = brickTop + (3 * brick.size.height) + 12;
            brick.health = 2;
            this.bricks.push(brick);
        }

        for (i = 0; i < 10; i++)
        {
            var brick = new Brick();
            brick.position.x = brickBackLeft + (i * brick.size.width) + i;
            brick.position.y = brickTop + (4 * brick.size.height) + 16;
            brick.health = 2;
            this.bricks.push(brick);
        }

        for (i = 0; i < 10; i++)
        {
            var brick = new Brick();
            brick.position.x = brickBackLeft + (i * brick.size.width) + i;
            brick.position.y = brickTop + (5 * brick.size.height) + 20;
            brick.health = 1;
            this.bricks.push(brick);
        }

    },

    reset : function(){
        this.setupBricks();
        player.reset();
        ball.reset();
    },

    bricks: [],

    canvas: null,
    context : null,
    timeout: 33

};

function onKeyUp(evt) {
    if (evt.keyCode == 39) player.move.right = false;
    else if (evt.keyCode == 37) player.move.left = false;
}

function onKeyDown(evt) {
    if (evt.keyCode == 39) player.move.right = true;
    else if (evt.keyCode == 37) player.move.left = true;
}

function clickEvent(evt) {
    if(app.running == false) {
        if (evt.offsetX >= 275 && evt.offsetX <= 525) {
            if (evt.offsetY >= 375 && evt.offsetY <= 425) {
                app.running = true;
                app.clearContext();
            }
        }
    }
}

$(document).click(clickEvent);
$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp)

var player = {

    // Defines initial position
    position: {
        x: 375,
        y: 450
    },

    score: 0,

    lives: 3,

    physics: {
        speed: 15
    },

    size: {
        height: 10,
        width: 100
    },

    draw : function(){
        app.context.fillStyle = "rgb(147, 149, 152)";
        app.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);

        app.context.textAlign = "center";
        app.context.fillStyle = "rgba(0, 0, 0, .4)";

        app.context.font = "18px sans-serif";
        app.context.fillText("Lives", 50, 20);
        app.context.fillText("Score", 50, 120);

        app.context.font = "48px sans-serif";
        app.context.fillText(this.lives, 50, 75);
        app.context.fillText(this.score, 50, 175);
    },

    move: {
        left: false,
        right: false
    },


    reset: function(){
        this.lives = 3;
        this.score = 0;
        this.position.x = 375;
        this.position.y = 450;
        this.move.left = false;
        this.move.right = false;
    }

};

var ball = {


    position: {
        x: 300,
        y: 300
    },

    size: {
        height: 50,
        width: 50
    },

    physics: {
        speed: 5,
        angle: 0
    },

    direction: {
        x: 1, //Moving right
        y: 1 //Moving down
    },

    draw : function(){

        if(app.running == false){
            var mainMenu = new Image();
            mainMenu.src = 'img/BSU.png';
            app.context.drawImage(mainMenu, 0, 0);
        }

        if (app.running == true) {
            app.context.fillStyle = "rgb(147, 149, 152)";
            app.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
            var ball_image = new Image();
            ball_image.src = 'img/BallLogo.png';

            app.context.save();
            app.context.translate(this.position.x + 25, this.position.y + 25);
            app.context.rotate(this.physics.angle * this.physics.speed / 180);
            app.context.translate(-this.position.x - 25, -this.position.y - 25);
            app.context.drawImage(ball_image, this.position.x - 25, this.position.y - 25);
            app.context.restore();
        }


    },

    reset : function(){
        this.position.x = 300;
        this.position.y = 300;
        this.direction.x = 1;
        this.direction.y = 1;
        this.physics.angle = 0;
        this.physics.speed = 5;
    },

    update : function(){
        if(app.running == true) {
            if (this.position.x <= 0) //Left Bounds
                this.direction.x = 1;
            if (this.position.x >= app.canvas.width) //Right Bounds
                this.direction.x = -1;
            if (this.position.y <= 0) //Top Bounds
                this.direction.y = 1;
            if (this.position.y >= app.canvas.height) //Bottom Bounds
                app.die(); //TODO: die

            this.physics.angle++;

            if (player.move.left == true) {
                player.position.x -= player.physics.speed;
            }
            if (player.move.right == true) {
                player.position.x += player.physics.speed;
            }

            this.checkCollisionWithPlayer();
            this.checkCollisionWithBricks();

            this.position.x += (this.physics.speed * this.direction.x);
            this.position.y += (this.physics.speed * this.direction.y);
        }
    },

    checkCollisionWithPlayer : function(){

        if (this.position.y + this.size.height < player.position.y)
            return;
        if (this.position.y > player.position.y + player.size.height)
            return;
        if (this.position.x > player.position.x + player.size.width)
            return;
        if (this.position.x + this.size.width < player.position.x)
            return;

        this.direction.x = ((this.position.x - player.position.x) / player.size.width) - .5;

        this.direction.y = -1;
        this.physics.speed = ball.physics.speed + .1

    },

    checkCollisionWithBricks : function(){

        var i = 0;
        for (i = 0; i < app.bricks.length; i++)
        {
            var brick = app.bricks[i];

            if (this.position.y + this.size.height < brick.position.y)
                continue;
            if (this.position.y > brick.position.y + brick.size.height)
                continue;
            if (this.position.x > brick.position.x + brick.size.width)
                continue;
            if (this.position.x + this.size.width < brick.position.x)
                continue;

            /* If the loop makes it this far, we have a collision */
            brick.health -= 1;
            this.physics.speed = ball.physics.speed + .05
            player.score += 20;

            if (brick.health < 1)
                app.bricks.splice(i, 1);

            if (app.bricks.length == 0){
                window.alert("You win!");
                app.reset();
            }

            //Update direction based on where we hit the brick

            //Moving towards lower right
            if (this.direction.x > 0
                && this.direction.y == 1)
            {
                if (this.position.y > brick.position.y)
                    this.direction.x = -1;
                else
                    this.direction.y = -1;
            }
            //Moving towards lower left
            else if (this.direction.x < 0
                && this.direction.y == 1)
            {
                if (this.position.y > brick.position.y)
                    this.direction.x = 1;
                else
                    this.direction.y = -1;
            }
            //Moving towards upper right
            else if (this.direction.x > 0
                && this.direction.y < 0)
            {
                if (this.position.y > brick.position.y)
                    this.direction.x = -1;
                else
                    this.direction.y = 1;
            }
            //Moving towards upper-left
            else if (this.direction.x < 0
                && this.direction.y < 0)
            {
                if (this.position.y > brick.position.y)
                    this.direction.x = 1;
                else
                    this.direction.y = 1;

            }
        }
    }

};

var Brick = function(){

    this.health = 3;

    this.size = {
        height: 15,
        width: 80
    };

    //Will be determined on setup
    this.position = {
        x: 0,
        y: 0
    };

};

Brick.prototype.draw = function(){

    switch (this.health) {
        case 3:
            app.context.fillStyle = "rgb(85, 197, 208)"; //Medium Blue
            break;
        case 2:
            app.context.fillStyle = "rgb(203, 212, 47)"; //Light Green
            break;
        case 1:
            app.context.fillStyle = "rgb(205, 0, 122)"; //Pink
            break;
    }

    if (this.health > 0)
        app.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
};

app.init();