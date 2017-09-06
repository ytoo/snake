/**
 * Created by cc on 2017/8/11.
 */
(function(W){
    function Game(op){   
        this.map=null;
        this.snake=null;
        this.food=null;
        this.tt=null;
    }

    Game.prototype={
        constructro:Game,
        gameStart:function(){
            this.loadSource();
            this.map.render();
            this.render();
            
        },
        render:function(){
            var that=this;
             this.tt=setInterval(function(){         
                that.map.map.innerHTML='';

                that.food.render();
                that.snake.move();
                that.snake.render();      
                
                that.isEat(that.snake,that.food);
                
                //判断游戏结束
                that.gameOver(that.snake,that.map);
                that.userControl(that.snake);
            },200);    
        },
        //加载需要的游戏对象
        loadSource:function(){
            this.map=new Map({
               // color:'green'
               color:'#06f'
            });
            this.snake=new Snake({
                map:this.map.map
            });
            this.food=new Food({
                map:this.map.map,
                color:'yellow'
            });   
        },
        gameOver:function(snake,map){
            if(snake.body[0].x<0
            ||snake.body[0].y<0
            ||snake.body[0].x>map.xGrid
            ||snake.body[0].y>map.yGrid){
                alert('gameover !');
                clearInterval(this.tt);
            }
            console.log(snake.body[0].x);
            console.log(map.xGrid);   
        },
        isEat:function(snake,food){
            //碰撞检测
            if(snake.body[0].x==food.x&&snake.body[0].y==food.y){
                snake.eat();
                food.setPos();
                food.render();
            }
        },
        userControl:function(snake){
              window.onkeydown=function(e){
            //左 37 上 38   右 39  下 40
//            alert(e.keyCode);

            switch (e.keyCode){
                case 37:
                    snake.direction='left';
                    break;
                case 38:
                    snake.direction='up';
                    break;
                case 39:
                    snake.direction='right';
                    break;
                case 40:
                    snake.direction='down';
                    break;
            }
        }   
        }
    }
    W.Game=Game;
})(window);