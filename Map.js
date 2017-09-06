(function(w){

    function Map(op){
        this.map=w.document.createElement('div');
        console.log(this.map);
        this.xGrid=op.xg||30;
        this.yGrid=op.yg||20;
        this.gSize=op.gSize||25;
        this.bgColor=op.color||'pink';

        this.width=this.xGrid*this.gSize;
        this.height=this.yGrid*this.gSize;

        w.document.body.appendChild(this.map);

    }

    Map.prototype.render=function(){
        this.map.style.background=this.bgColor;
        this.map.style.position='relative';
        this.map.className='map';
        this.map.style.width=this.width+'px';
        this.map.style.height=this.height+'px';
    }
    
    w.Map=Map;
})(window);
