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
                pen.fillRect(this.cells[i].x*cell_size,this.cells[i].y,cell_size-buffer,cell_size);
            }
        },
    
        moveSnake: function()
        {
            
            pen.fillStyle=this.color;
            console.log("moving snake");
            tail= this.cells.pop();
            pen.clearRect(tail.x,tail.y,cell_size,cell_size);
            head= this.cells[0];
            this.cells.unshift({x: head.x+cell_size,y:head.y});
            head=this.cells[0];
            pen.fillRect(head.x,head.y,cell_size-buffer,cell_size);
            




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
    console.log("ingameloop");
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
    console.log(btn)
}
document.addEventListener("keydown",myfunction);
init();
setInterval(gameloop,3000);