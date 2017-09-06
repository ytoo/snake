
(function(w){
    function Food(op){
        this.food=w.document.createElement('div');
        this.x=0;
        this.y=0;

        this.width=op.width||25;
        this.height=op.height||25;
        this.color=op.color||'green';        
        this.map=op.map;
        this.xGrid=op.xGrid||30;
        this.yGrid=op.yGrid||20;
        this.setPos();
        this.position=null;
    }

    Food.prototype.render=function(){
        this.map.appendChild(this.food);
        this.food.style.background=this.color;
        this.food.style.position='absolute';
        this.food.style.left=this.x*this.width+'px';
        this.food.style.top=this.y*this.width+'px';
        this.food.style.width=this.width+'px';
        this.food.style.height=this.height+'px';
    }

    Food.prototype.setPos=function(){
        this.x=parseInt(Math.random()*this.xGrid-1);
        this.y=parseInt(Math.random()*this.yGrid-1);

    }



    w.Food=Food;


})(window);