    // 滚轮与鼠标点击
const Sb_down=(objp,objc)=>{ //球触发   父级元素,子元素
    return (ev) => {
        let obj=ev.currentTarget;
        let downY=ev.clientY-GetLandR(obj).T;
        document.onmousemove=(e)=>{
            e.preventDefault()
            let to=e.clientY-downY-GetLandR(obj.parentNode).T;
            to<0?(to=0):to;
            to>obj.parentNode.offsetHeight-obj.offsetHeight?(to=obj.parentNode.offsetHeight-obj.offsetHeight):to;
            obj.style.top=to+"px";
            let percent=obj.offsetTop/(obj.parentNode.offsetHeight-obj.offsetHeight)
            objc.style.top=(objp.offsetHeight-objc.offsetHeight)*percent+"px"
        }
        document.onmouseup=function(){
            this.onmousemove=null;
            this.onmouseup=null;
        }   
    }       
}
const ScrollGo=(objp,objc,ballp,ballc)=>{
    let go=0;           
    return (ev) => {
        ev.preventDefault()
        try{
            ev.wheelDelta>0?(go=ballc.offsetTop+5):(go=ballc.offsetTop-5);
            go<=0?(go=0):go;
            go>=ballp.offsetHeight-ballc.offsetHeight?(go=ballp.offsetHeight-ballc.offsetHeight):go;
            ballc.style.top=go+"px"
            var percent=ballc.offsetTop/(ballp.offsetHeight-ballc.offsetHeight)
            objc.style.top=(objp.offsetHeight-objc.offsetHeight)*percent+"px"
        }catch(x){
            ev.detail>0?(go=ballc.offsetTop-5):(go=ballc.offsetTop+5);
            go<=0?(go=0):go;
            go>=ballp.offsetHeight-ballc.offsetHeight?(go=ballp.offsetHeight-ballc.offsetHeight):go;
            ballc.style.top=go+"px"
            var percent=ballc.offsetTop/(ballp.offsetHeight-ballc.offsetHeight)
            objc.style.top=(objp.offsetHeight-objc.offsetHeight)*percent+"px"
        }
    }
}
const AddEvent=(obj,ev,fn)=>{
    return "addEventListener" in window?obj.addEventListener(ev,fn,false):obj.attachEvent("on"+ev,fn)
}
const GetLandR=(obj)=>{
    var left=0,top=0
     while(obj){
        left+=obj.offsetLeft;
        top+=obj.offsetTop;
        obj=obj.offsetParent;
        obj!=null?(left+=obj.clientLeft,top+=obj.clientTop):""
    }
    return {L:left,T:top}
}
const RemoveEvent=(obj,ev,fn)=>{
    if(obj.removeEventListener){
        alert(2)
        return obj.removeEventListener(ev,fn,false)
    }else{
        return obj.detachEvent("on"+ev,fn)
    }
}


export  { Sb_down , ScrollGo , AddEvent , RemoveEvent }