function init()
{
    cell_size=66;
    buffer=2;
    canvas= document.getElementById("mycanvas");
    W=H=canvas.width=canvas.height=1000;
    pen= canvas.getContext("2d");
    snake=
    {
        length:5,
        color:"blue",
        cells:[],
        dir:"right",

        create_snake: function()
                {
                    console.log(pen)
                    for(let i=this.length;i>0;i--)
                    {
                        this.cells.push({x:i,y:0})
                    }
                },
        draw_snake: function()
        {
            
            for(let i=0;i<this.cells.length;i++)
            {
                pen.fillStyle=this.color;
                pen.fillRect(this.cells[i].x*cell_size,this.cells[i].y*cell_size,cell_size-buffer,cell_size-buffer);
            }
        },
    
        moveSnake: function()
        {
            
            var headCurrent= this.cells[0];
            if(headCurrent.x*cell_size>W || headCurrent.x<0 || headCurrent.y*cell_size>H || headCurrent.y<0)
            {
                //window.alert("gameover!");
                
            }
            var tail= this.cells.pop();
            var newHead={x:-1,y:-1};
            if(this.dir=="right")
            {
                console.log("snake.dir",this.dir)
                newHead.x= headCurrent.x+1;
                newHead.y= headCurrent.y;
                this.cells.unshift(newHead);
                console.log("R")
                
                
            }
            else if(this.dir=="down")
            {
                console.log("snake.dir",this.dir)
                
                newHead.x=headCurrent.x;
                newHead.y=headCurrent.y+1;
                this.cells.unshift(newHead);
                console.log("D");
               
               
                
            }
            else if(this.dir=="up")
            {
                console.log("snake.dir",this.dir)
                newHead.x=headCurrent.x;
                newHead.y=headCurrent.y - 1;
                this.cells.unshift(newHead);
                console.log("U");
                 
            }

            else if (this.dir="left")
            {
                console.log("snake.dir",this.dir)
                newHead.x=headCurrent.x-1;
                newHead.y=headCurrent.y;
                this.cells.unshift(newHead);
                console.log("L");
                
                
            }


            
            this.draw_snake();
            pen.clearRect(tail.x*cell_size,tail.y*cell_size,cell_size,cell_size);

            
        }
   
    }

    console.log(pen)
    snake.create_snake();

}



function draw(){
    snake.draw_snake()

}

function update(){
        snake.moveSnake()
}

function gameloop(){
    
    draw();
    update();

}

function myfunction(btn)
{
   game_buttons=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"]
   if(game_buttons.includes(btn.key))
    {
        btn.preventDefault();
    } 
    
    if(btn.key=="ArrowUp" )
    {
        snake.dir="up";
    }
    if(btn.key=="ArrowDown")
    {
        snake.dir="down";
    }
    if(btn.key=="ArrowLeft")
    {
        snake.dir="left";
    }
    if(btn.key=="ArrowRight")
    {
        snake.dir="right"
    }
}
document.addEventListener("keydown",myfunction);


init();
setInterval(gameloop,100);