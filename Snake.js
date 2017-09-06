(function(w){

    function Snake(op){
        this.body=[
            {x:15,y:3},
            {x:16,y:3},
            {x:17,y:3}
        ];
        this.map=op.map;
        this.direction='left';
        this.gSize=op.gSize||25;
              
        
    }
    
    Snake.prototype.render=function(){
        for(var i=0;i<this.body.length;i++){
            var x=this.body[i].x;
            var y=this.body[i].y;
            var color='#eee';
            var z=0;
          
            var s=w.document.createElement('div');

              if(i==0){
                color='red';
                z=1;              
                s.style.background='url(h.png)';
                s.style.backgroundSize="100%";
                
            }

            if(i>0){
                 s.style.background=color;
                  s.style.border='1px solid #333'
            s.style.borderRadius='50%';
            }
           
            s.style.width=this.gSize+'px';
            s.style.height=this.gSize+'px';
            s.style.zIndex=z;
            // console.log(this.gSize + 'px');
            s.style.position='absolute';
            s.style.left=x*this.gSize+'px';
            s.style.top=y*this.gSize+'px';
           
       
            // console.log(y * this.gSize + 'px');
            this.map.appendChild(s);
        }
    }

    Snake.prototype.move=function(){
        //移动后面蛇
        for(var i=this.body.length-1;i>0;i--){
            this.body[i].x=this.body[i-1].x; //注意点
            this.body[i].y=this.body[i-1].y; //值类型赋值
        }

        // console.log(this.body);

        switch (this.direction){
            case 'left':
                this.body[0].x-=1;
                break;
            case 'right':
                this.body[0].x+=1;
                break;
            case 'up':
                this.body[0].y-=1;
                break;
            case 'down':
                this.body[0].y+=1;
                break;
        }

    }

    Snake.prototype.eat=function(){
        var last=this.body[this.body.length-1];

        var s={
            x:last.x,
            y:last.y
        }
        this.body.push(s);

    }


    w.Snake=Snake;
})(window);
