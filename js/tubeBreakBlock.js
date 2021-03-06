/**
 * Created by jordan.milner on 7/21/16.
 */
var game = {

    running: false,

    init : function(){

        this.canvas = document.querySelector('#tubeMogulBreakBlock');
        this.context = this.canvas ? this.canvas.getContext('2d') : null;

        if (!this.context)
        {
            console.log("Error getting context");
            return;
        }

        this.setupBlocks();
        this.update();
        return;
    },

    update : function(){

        game.clearContext();
        game.drawBlocks();
        ball.draw();
        ball.update();
        player.draw();
        requestAnimationFrame(game.update);
    },

    nextlevel : function(){
        this.setupBlocks();
        player.position.x = 350;
        ball.reset();
    },

    clearContext : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        return;
    },

    die : function(){
        player.lives -= 1;

        if (player.lives < 1) {
            // window.alert("You lose!\nScore: " + player.score);
            $(".loseAlert").text("You lose! Score: " + player.score);
            $(".lose-container").slideDown( "slow", function() {});
            this.reset();
        }
        player.position.x = 350;
        ball.reset();
    },

    drawBlocks : function(){

        this.blocks.forEach(function(block){ block.draw(); });

    },

    setupBlocks : function(){

        this.blocks = new Array();

        var i = 0;
        var blockTop = 80;
        var blockBackLeft = 0;


        switch (this.level) {
            case 3:
                for (i = 0; i < 10; i++) {
                    var block = new Block();
                    block.position.x = blockBackLeft + (i * block.size.width) + i;
                    block.position.y = blockTop;
                    block.health = 3;
                    this.blocks.push(block);
                }

                for (i = 0; i < 10; i++) {
                    var block = new Block();
                    block.position.x = blockBackLeft + (i * block.size.width) + i;
                    block.position.y = blockTop + block.size.height + 4;
                    block.health = 3;
                    this.blocks.push(block);
                }

                for (i = 0; i < 10; i++) {
                    var block = new Block();
                    block.position.x = blockBackLeft + (i * block.size.width) + i;
                    block.position.y = blockTop + (2 * block.size.height) + 8;
                    block.health = 3;
                    this.blocks.push(block);
                }

                for (i = 0; i < 10; i++) {
                    var block = new Block();
                    block.position.x = blockBackLeft + (i * block.size.width) + i;
                    block.position.y = blockTop + (3 * block.size.height) + 12;
                    block.health = 2;
                    this.blocks.push(block);
                }

                for (i = 0; i < 10; i++) {
                    var block = new Block();
                    block.position.x = blockBackLeft + (i * block.size.width) + i;
                    block.position.y = blockTop + (4 * block.size.height) + 16;
                    block.health = 2;
                    this.blocks.push(block);
                }

                for (i = 0; i < 10; i++) {
                    var block = new Block();
                    block.position.x = blockBackLeft + (i * block.size.width) + i;
                    block.position.y = blockTop + (5 * block.size.height) + 20;
                    block.health = 1;
                    this.blocks.push(block);
                }
                break;
            case 1:
                for (i = 0; i < 6; i++) {
                    var block = new Block();
                    block.position.x = 160 + (i * block.size.width) + i;
                    block.position.y = blockTop;
                    block.health = 3;
                    this.blocks.push(block);
                }

                for (i = 0; i < 4; i++) {
                    var block = new Block();
                    block.position.x = 160 + block.size.width + (i * block.size.width) + i;
                    block.position.y = blockTop + block.size.height + 4;
                    block.health = 2;
                    this.blocks.push(block);
                }

                for (i = 0; i < 2; i++) {
                    var block = new Block();
                    block.position.x = 160 + (block.size.width * 2) + (i * block.size.width) + i;
                    block.position.y = blockTop + block.size.height * 2 + 8;
                    block.health = 1;
                    this.blocks.push(block);
                }
                break;
            case 2:
                blockBackLeft = 40;

                for (i = 0; i < 7; i++)
                {
                    var block = new Block();
                    block.position.x = blockBackLeft + ((i + 1) * block.size.width) + i;
                    block.position.y = blockTop;
                    block.health = 3;
                    this.blocks.push(block);
                }
                for (i = 0; i < 8; i++)
                {
                    var block = new Block();
                    block.position.x = blockBackLeft + block.size.width;
                    block.position.y = blockTop + block.size.height * i + 4 * i;
                    block.health = 3;
                    this.blocks.push(block);
                }
                for (i = 0; i < 9; i++)
                {
                    var block = new Block();
                    block.position.x = blockBackLeft + block.size.width * 7 + 7;
                    block.position.y = blockTop + block.size.height * i + 4 * i;
                    block.health = 3;
                    this.blocks.push(block);
                }
                for (i = 0; i < 7; i++)
                {
                    var block = new Block();
                    block.position.x = blockBackLeft + ((i + 1) * block.size.width) + i;
                    block.position.y = blockTop + block.size.height * 8 + 4 * 8;
                    block.health = 3;
                    this.blocks.push(block);
                }
                for (i = 0; i < 5; i++)
                {
                    var block = new Block();
                    block.position.x = blockBackLeft + ((i + 2) * block.size.width) + i + 1;
                    block.position.y = blockTop + block.size.height * 7 + 4 * 7;
                    block.health = 2;
                    this.blocks.push(block);
                }
                for (i = 0; i < 5; i++)
                {
                    var block = new Block();
                    block.position.x = blockBackLeft + ((i + 2) * block.size.width) + i + 1;
                    block.position.y = blockTop + block.size.height * 1 + 4 * 1;
                    block.health = 2;
                    this.blocks.push(block);
                }
                break;

        }
    },

    reset : function(){
        this.level = 1;
        this.setupBlocks();
        player.reset();
        ball.reset();

    },

    blocks: [],
    level: 1,
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
    if(game.running == false) {
        if (evt.offsetX >= 275 && evt.offsetX <= 525) {
            if (evt.offsetY >= 375 && evt.offsetY <= 425) {
                game.running = true;
                game.clearContext();
            }
        }
    }
    $(".lose-container").slideUp( "slow", function() {});
    $(".win-container").slideUp( "slow", function() {});
}

$(document).click(clickEvent);
$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp)

var player = {

    // Defines initial position
    position: {
        x: 350,
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
        game.context.fillStyle = "rgb(147, 149, 152)";
        game.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);

        game.context.textAlign = "center";
        game.context.fillStyle = "rgba(0, 0, 0, .4)";

        game.context.font = "18px sans-serif";
        game.context.fillText("Lives", 60, 30);
        game.context.fillText("Score", 60, 110);

        game.context.font = "48px sans-serif";
        game.context.fillText(this.lives, 60, 75);
        game.context.fillText(this.score, 60, 155);
    },

    move: {
        left: false,
        right: false
    },


    reset: function(){
        game.running = false;
        this.lives = 3;
        this.score = 0;
        this.position.x = 350;
        this.position.y = 450;
        this.move.left = false;
        this.move.right = false;
    }

};

var Powerup = {

    position: {
        x: 0,
        y: 0
    },

    physics: {
        speed: 4
    },

    direction: {
        y: 1,
        x:0
    },
    
    radius: 3,
    
    spawn: function () {
        
    },
    
    draw: function () {
        
    },
    
    update: function () {
        
    }

}

var ball = {


    position: {
        x: 350,
        y: 375
    },

    size: {
        height: 50,
        width: 50
    },

    physics: {
        speed: 4,
        angle: 0
    },

    direction: {
        x: -1,
        y: -1
    },

    draw : function(){

        if(game.running == false){
            var mainMenu = new Image();
            mainMenu.src = 'img/BSU.png';
            game.context.drawImage(mainMenu, 0, 0);
        }

        if (game.running == true) {
            game.context.fillStyle = "rgb(147, 149, 152)";
            game.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
            var ball_image = new Image();
            ball_image.src = 'img/BallLogo.png';

            game.context.save();
            game.context.translate(this.position.x + 25, this.position.y + 25);
            game.context.rotate(this.physics.angle / 90);
            game.context.translate(-this.position.x - 25, -this.position.y - 25);
            game.context.drawImage(ball_image, this.position.x - 25, this.position.y - 25);
            game.context.restore();
        }


    },

    reset : function(){
        this.position.x = 350;
        this.position.y = 375;
        this.direction.x = -1;
        this.direction.y = -1;
        this.physics.angle = 0;
        this.physics.speed = 5;
    },

    update : function(){
        if(game.running == true) {
            if (this.position.x <= 0) //Left Bounds
                this.direction.x *= -1;
            if (this.position.x >= game.canvas.width - this.size.width) //Right Bounds
                this.direction.x *= -1;
            if (this.position.y <= 0) //Top Bounds
                this.direction.y *= -1;
            if (this.position.y >= game.canvas.height) //Bottom Bounds
                game.die();

            this.physics.angle += this.physics.speed;

            if (player.move.left == true && player.position.x >= 0) {
                player.position.x -= player.physics.speed;
            }
            if (player.move.right == true && player.position.x <= 800 - player.size.width) {
                player.position.x += player.physics.speed;
            }

            this.checkCollisionWithPlayer();
            this.checkCollisionWithBlocks();

            this.position.x += (this.physics.speed * this.direction.x);
            this.position.y += (this.physics.speed * this.direction.y);
        }
    },

    checkCollisionWithPlayer : function(){
        if (this.direction.y < 0){ // don't collide multiple times if it's already going up
            return;
        }

        if (this.position.y + this.size.height < player.position.y)
            return;
        if (this.position.y > player.position.y + player.size.height)
            return;
        if (this.position.x > player.position.x + player.size.width)
            return;
        if (this.position.x + this.size.width < player.position.x)
            return;

        this.direction.x = (((this.position.x + (this.size.width / 2)) - (player.position.x + (player.size.width / 2))) / player.size.width);

        if (this.position.y + this.size.height/2 > player.position.y) // side block collision
            this.direction.x = this.direction.x * 2


        this.direction.y = -1;

        this.physics.speed = ball.physics.speed + .05

    },

    checkCollisionWithBlocks : function(){

        var i = 0;
        for (i = 0; i < game.blocks.length; i++)
        {
            var block = game.blocks[i];

            if (this.position.y + this.size.height < block.position.y)
                continue;
            if (this.position.y > block.position.y + block.size.height)
                continue;
            if (this.position.x > block.position.x + block.size.width)
                continue;
            if (this.position.x + this.size.width < block.position.x)
                continue;

            /* If the loop makes it this far, we have a collision */
            block.health -= 1;
            this.physics.speed = ball.physics.speed + .05
            player.score += 20;

            if (player.score % 2000 == 0)
            {
                player.lives++;
            }

            if (block.health < 1)
                game.blocks.splice(i, 1);

            if (game.blocks.length == 0)
            {
                game.level++;
                if(game.level == 4) {
                    $(".winAlert").text("You win!");
                    $(".win-container").slideDown("slow", function () {});
                    game.reset();
                    return;
                } else {
                    game.nextlevel();
                    return;
                }
            }


            if (this.direction.x > 0 && this.direction.y > 0)
            {
                if (this.position.y > block.position.y)
                    this.direction.x *= -1;
                else
                    this.direction.y *= -1;
            }
            else if (this.direction.x < 0 && this.direction.y > 0)
            {
                if (this.position.y > block.position.y)
                    this.direction.x *= -1;
                else
                    this.direction.y *= -1;
            }
            else if (this.direction.x > 0 && this.direction.y < 0)
            {
                if (this.position.y < block.position.y)
                    this.direction.x *= -1;
                else
                    this.direction.y *= -1;
            }
            else if (this.direction.x < 0 && this.direction.y < 0)
            {
                if (this.position.y < block.position.y)
                    this.direction.x *= -1;
                else
                    this.direction.y *= -1;

            }
        }
    }

};

var Block = function(){

    this.health = 3;

    this.size = {
        height: 15,
        width: 80
    };

    this.position = {
        x: 0,
        y: 0
    };

};

Block.prototype.draw = function(){

    var grad1 = game.context.createLinearGradient(0,this.position.y, 0,this.position.y+this.size.height);
    switch (this.health) {
        case 3:
            grad1.addColorStop(0,"rgb(85, 197, 208)");
            grad1.addColorStop(1,"rgb(0, 136, 165)");
            //grad1.addColorStop(1, "rgb(85, 197, 208)");
            game.context.fillStyle = grad1; //Medium Blue
            break;
        case 2:
            grad1.addColorStop(0,"rgb(203, 212, 47)");
            grad1.addColorStop(1,"rgb(167, 190, 57)");
            //grad1.addColorStop(1, "rgb(203, 212, 47)");
            game.context.fillStyle = grad1; //Light Green
            break;
        case 1:
            grad1.addColorStop(0,"rgb(205, 0, 122)");
            grad1.addColorStop(1,"rgb(167, 0, 100)");
            //grad1.addColorStop(1, "rgb(205, 0, 122)");
            game.context.fillStyle = grad1; //Pink
            break;
    }

    if (this.health > 0)
        game.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
};

game.init();