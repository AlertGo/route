import React from "react"
import {
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom'
import '../../Css/inside6.css'
// 滚条导入
import { Sb_down , ScrollGo , AddEvent } from '../scroll'

class inside6 extends React.Component{
	constructor ({match}){
		super()
		this.state={
			data:""
		}
	}
	componentDidMount(){
		this.fetchFn("http://localhost:8006/img/inside6")
	}
	render (){
		return (
			<div id="insidebox">
				 <div id="foots">
					人力资源 Human Resources
				</div>
				{/*接口*/}
				 <div id="inside0con">
				 	<div className="inside6">
				 		<div className="inside6_left">
				 		{/*左侧元素start*/}
                   			 <div className="Resources_box" dangerouslySetInnerHTML={{__html: this.state.data}} />
				 		</div>					
				 		{/*右侧元素start*/}
				 		<This_right />
				 	</div>			
				 </div>
			</div>
		)
	}
	fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
 			console.log(data)
 			this.setState({
 				data:data[0]['cons']
 			})
        })
        .catch((x)=>{
            console.log(x)
        })
    }
}
class This_right extends React.Component{
	constructor (){
		super()
		this.state={
			data:[]
		};
		this.index=-1;
		this.index2=0;
		this.timer=null;
		this.timers=null;
		this.speed=0;
	}
	componentWillMount (){
		this.fetchFn("http://localhost:8006/img/inside6s")
	}
	componentDidUpdate (){
	
	}
	fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
 			console.log(data)
 			this.setState({
 				data:data
  			})
        })
        .catch((x)=>{
            console.log(x)
        })
    }
    sollger (obj,num,speed,timers){
        clearInterval(timers);
        timers=setInterval(function () {
            speed=(num-obj.offsetTop)/20;
            if(speed<0){
                speed=Math.floor(speed)
            }else{
                speed=Math.ceil(speed)
            }
            console.log(obj.offsetTop,num)
            if(obj.offsetTop==num){
                clearInterval(timers);
                return
            }
            obj.style.top=obj.offsetTop+speed+"px"
        },10)
    }
    li_toggle (x){
    	return (ev) => {
    		clearInterval(this.timer)
	    	let currli=ev.currentTarget.parentNode;
	    	let childrenH=currli.children[1].offsetHeight+20;
	  		let currbox=currli.parentNode.parentNode;
	  		let currul=currli.parentNode;	
    		currul.style.top=-x*20+"px"
    		let timers=null

    		if(this.index==-1){		    		
			   	currli.style.height=childrenH+"px";
		    	this.index=x;
    		}else{
				if(this.index==x){
					if(currli.offsetHeight==20){
						currli.style.height=childrenH+"px"
					}else{
						currli.style.height="20px"
    					currul.style.top=0+"px"
					}
				}else{
					currul.children[this.index].style.height="20px"
					currli.style.height=childrenH+"px"
					this.index=x
				}
    		}
    		this.timer=setTimeout(()=>{
    			console.log(currul.offsetTop)
				if(currul.offsetHeight>currbox.offsetHeight){
    				console.log(currbox.offsetHeight,currul.offsetHeight)
    				var aaa=currul.offsetTop/(currbox.offsetHeight-currul.offsetHeight);				
	    			this.refs.Ball_inside6.parentNode.style.opacity="1";
	    			let to=Math.floor((this.refs.Ball_inside6.parentNode.offsetHeight-this.refs.Ball_inside6.offsetHeight)*aaa)
	    			this.sollger(this.refs.Ball_inside6,to,this.speed,timers)
		  			// this.refs.Ball_inside6.style.top=(this.refs.Ball_inside6.parentNode.offsetHeight-this.refs.Ball_inside6.offsetHeight)*aaa+"px";
		  			this.refs.Ball_inside6.onmousedown=Sb_down(this.refs.inside6_left_con,this.refs.inside6_left_con.children[0]);
					this.refs.inside6_left.onmousewheel=ScrollGo(this.refs.inside6_left_con,this.refs.inside6_left_con.children[0],this.refs.Ball_inside6.parentNode,this.refs.Ball_inside6);
					this.refs.inside6_left.DOMMouseScroll=ScrollGo(this.refs.inside6_left_con,this.refs.inside6_left_con.children[0],this.refs.Ball_inside6.parentNode,this.refs.Ball_inside6);	    		
		   		}else{			   			
		    		this.refs.Ball_inside6.parentNode.style.opacity="0";
		    		this.refs.Ball_inside6.onmousedown=null;
		    		this.refs.inside6_left.onmousewheel=null;
		    		this.refs.inside6_left.DOMMouseScroll=null;
		   		}
    		},5e2)
    		// currul.style.height=currul.offsetHeight+'px'    		
	    	// currli.parentNode.children[this.index2].style.height=20+"px";
	    	// currli.parentNode.children[x].style.height=500+"px"
		    // this.refs.Ball_inside6.style.top="0px";
			// var a=(x*20)/(currul.offsetHeight-currbox.offsetHeight)
		  	// this.refs.Ball_inside6.style.top=(this.refs.Ball_inside6.parentNode.offsetHeight-this.refs.Ball_inside6.offsetHeight)*a+"px";
		  	// console.log(this.index,this.index2)
		  	// console.log(currli)				
		   //  	if(currli.offsetHeight==20){		    		
			  //   	currli.style.height=500+"px";
		   // 			currul.style.top=-x*20+"px";
		   //  		if(this.index!=0){
		   //  			currul.style.top=-x*20+"px";
		   //  		}
		   //  		// currul.style.height=currul.offsetHeight+500+"px"
		   //  		console.log(11111)
		   //  		console.log(currul.offsetTop)
		   //  		if(currul.offsetHeight>=currbox.offsetHeight){
		   //  			this.refs.Ball_inside6.parentNode.style.display="block";
			  //  		}else{			   			
			  //   		this.refs.Ball_inside6.parentNode.style.display="none";
			  //  		}

					// var a=(x*20)/(currul.offsetHeight-currbox.offsetHeight)
		  	// 		this.refs.Ball_inside6.style.top=(this.refs.Ball_inside6.parentNode.offsetHeight-this.refs.Ball_inside6.offsetHeight)*a+"px";
		   //  	}else{
		   //  		console.log(2222222)
			  //   	currli.style.height=20+"px";
		   // 			currul.style.top=0+"px";	   			
		  	// 		this.refs.Ball_inside6.style.top=0+"px"
		   //  	}
		    // setTimeout(()={
		    // },3e2)		      	
    	}
    }	
    render (){
    	return (
    		<div className="inside6_left" ref="inside6_left">
    			<div className="inside6_left_title">
	    			<p className="i6_left_title_pl">岗位招聘 Job Recruitment</p>
	    			<p className="i6_left_title_pr"><a>下载简历表</a></p>
    			</div>
    			<div className="inside6_left_con" ref="inside6_left_con">
    				<ul className="i6_ul">
    					{this.state.data.map((v,i)=>{
    						return (
    							<li key={i} >
    								<div onClick={this.li_toggle(i)}>
    									<p className="i6_ul_p1">
    										{v['name']}
    									</p>
    									<p className="i6_ul_p2">
    										{v['address']}
    									</p>
    									<p className="i6_ul_p3">
    										<a>申请</a>
    									</p>
    									<p className="i6_ul_p4">
    										查看详情
    									</p>
    								</div>
                   			 		<div className="i6_li_main" dangerouslySetInnerHTML={{__html:v['cons']}} />
    							</li>
    						)
    					})}
    				</ul>
    			</div>
    			<div id="Runway_inside6">
    				<div id="Ball_inside6" ref="Ball_inside6"></div>
    			</div>
    		</div>
    	)
    }

}



export default inside6

 


















