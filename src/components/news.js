import React from 'react'
import {
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom'
// 左侧通用组件
import Montbox from './commont/comleft'
import "../Css/commont.css"
import "../Css/news.css"

import 'whatwg-fetch'
//滚轮通用方法
import { Sb_down , ScrollGo , AddEvent , RemoveEvent } from './scroll'

class Inside extends React.Component{
	constructor ({match}){
		super()
		this.state={
		
		}
	}

    componentDidMount (){
		this.fetchFns("http://localhost:8006/img/navlists")

    }	
    componentWillUpdate (){
    }
    componentDidUpdate (){
    }
	render (){
		return (
			<div id="Montbox">
				<Montbox />{/*左侧组件*/}
				<div id="right_box">{/*右侧元素*/}
					<div className="right_box_header">
						<div id="header_left">
							<p className="insidep">News</p>
							<p>新闻动态</p>
						</div>
					</div>
					<Route exact path="/news" component={This_Merry}/>
					<Route exact path="/news" component={This_NewsPage}/>
					<Route path="/news/:id" component={This_details} />

				</div>
			</div>
		)
	}
    fetchFns (url){
    	var datas=null;
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{      
        })
        .catch((x)=>{
            console.log(x)
        })
    }
}
class This_NewsPage extends React.Component{
	constructor (){
		super()
		this.state={
			data:[],
			index:0,
			page:0
		}
	}
	componentDidMount (){
		this.fetchFns("http://localhost:8006/img/news")
	}
	componentDidUpdate (){
		this.refs.listcon.style.width=this.refs.listcon.children.length*35+"px";
		console.log(this.refs.listcon.children.length)
		if(this.refs.listcon.children.length<=5){
			this.refs.listcon.parentNode.style.width=this.refs.listcon.children.length*35+"px";
		}
	}
	fetchFns (url){
    	var datas=null;
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{      
        	//当前页显示的条目
        	let index=this.state.index*16;
        	//一共多少页 15页
        	let pageindex=0;
        	if((data.length/16)%1==0){
        		pageindex=data.length/16-1
        	}else{
        		pageindex=Math.floor(data.length/16)
        	}
        	let listarr=[]
        	for(let j=0,i=data.length-1-index;j<16;j++,i--){  	
			
        		data[i]!=undefined && listarr.push(data[i])	
        	

        	}
        	console.log(listarr)
        	this.setState({
        		data:listarr,
        		page:pageindex
        	})
        })
        .catch((x)=>{
            console.log(x)
        })
    }
    ///列表点击
    listck (x){
    	return () => {
    		this.setState({
    			index:x
    		})
			this.fetchFns("http://localhost:8006/img/news")
			console.log(this.refs.listcon.children.length)
			if(this.refs.listcon.children.length>5){
				if(x>2){
					if(x>this.state.page-2){
						this.refs.listcon.style.left=-(this.state.page-4)*35+"px"
					}else{
						this.refs.listcon.style.left=-(x-2)*35+"px"
					}
					}else{
					this.refs.listcon.style.left=0+"px"
				}
			}		
    	}
    }
    ///左按钮
    after_span (){
    	if(this.state.index<=0) return;
		this.fetchFns("http://localhost:8006/img/news")
    	this.setState({
    		index:this.state.index-1
    	})
    	if(this.refs.listcon.children.length>5){
	    	if(this.state.index<=3){
				this.refs.listcon.style.left=0+"px"   		
	    	}else{
	    		if(this.state.index>this.state.page-2){
					this.refs.listcon.style.left=-(this.state.page-4)*35+"px"
	    		}else{
	    			this.refs.listcon.style.left=-(this.state.index-3)*35+"px"
	    		}
	    	}
    	}
    }
   	///右按钮
    before_span (){
    	if(this.state.index>=this.state.page) return ;
		this.fetchFns("http://localhost:8006/img/news")
    	this.setState({
    		index:this.state.index+1
    	})
    	if(this.refs.listcon.children.length>5){
	    	if(this.state.index>=2){
	    		if(this.state.index>this.state.page-4){
	    			
					this.refs.listcon.style.left=-(this.state.page-4)*35+"px"

	    		}else{
	    			this.refs.listcon.style.left=-(this.state.index-1)*35+"px"

	    		}
	    	}    		
    	}
    }
    render (){
    	return (
    		<div>
    			<ul id="ul">
    				{this.state.data.map((v,i)=>{
						return (
							<Link to={"/news/id="+v['id']}>
							<li key={i}>
								<span className="news_spanleft">{v["date"]}</span>
								<span className="news_spanright">{v["title"]}</span>
							</li>
							</Link>
						)
    				})}
    			</ul>
    			<div id="newscontrol">
    				<span onClick={this.after_span.bind(this)}>{"<"}</span>
    				<div className="listbox">
    					<div className="listcon" ref="listcon">
							{(function(that){
	    						let listarr=[]
	    						for(let i=0;i<=that.state.page;i++){
	    							console.log(1)
	    							listarr.push(<span key={i} onClick={that.listck(i)} className={(i)==that.state.index?"spanactive":""}>{i+1}</span>)
	    						}
	    						return listarr
	    					})(this)}
    					</div>   
    				</div>
    				<span onClick={this.before_span.bind(this)}>{">"}</span>
    			</div>
    		</div>
    	)
    }
}
//详情页组件
class This_details extends React.Component{
	constructor ({match,history}){
		super()
		this.state={
			mains:""
		}
		this.hrefs=match.params;
		this.timer=null;
		this.speed=0;
		this.timer2=null;
		this.speed2=0;

	}
	componentDidMount (){
		this.fetchFns("http://localhost:8006/img/newsdetail")
	}
	componentDidUpdate (){
		this.refs.ranway.children[0].onmousedown=Sb_down(this.refs.newsDetail,this.refs.newsDetail.children[0])   	
		this.refs.newsDetail.onmousewheel=ScrollGo(this.refs.newsDetail,this.refs.newsDetail.children[0],this.refs.ranway,this.refs.ranway.children[0],this.refs.control_news);
		this.refs.newsDetail.DOMMouseScroll=ScrollGo(this.refs.newsDetail,this.refs.newsDetail.children[0],this.refs.ranway,this.refs.ranway.children[0],this.refs.control_news);
	}
	Go_home (){

	}
	Gp_Tops (){
		
		this.sollger(this.refs.ranway.children[0],0,this.speed,this.timer)
		this.sollger(this.refs.newsDetail.children[0],0,this.speed2,this.timer2)

	}
	render (){
		return (
			<div className="newsDetail" ref="newsDetail">
				<div className="newspositon" dangerouslySetInnerHTML={{__html:this.state.mains}} />
				<div className="control_news" ref="control_news">
					<button onClick={this.Gp_Tops.bind(this)}>返回顶部</button>
					<button onClick={this.Go_home.bind(this)}>返回首页</button>
				</div>

				<div id="Runways" ref="ranway">
					<div id="Balls"></div>
				</div>
			</div>
		)
	}
	sollger (obj,num,speed,timers){
        clearInterval(timers);
        this.refs.newsDetail.onmousewheel=null;
		this.refs.newsDetail.DOMMouseScroll=null;
        timers=setInterval(function () {
            speed=(num-obj.offsetTop)/20;
            if(speed<0){
                speed=Math.floor(speed)
            }else{
                speed=Math.ceil(speed)
            }
            if(obj.offsetTop==num){
                clearInterval(timers);
                this.refs.newsDetail.onmousewheel=ScrollGo(this.refs.newsDetail,this.refs.newsDetail.children[0],this.refs.ranway,this.refs.ranway.children[0],this.refs.control_news);
				this.refs.newsDetail.DOMMouseScroll=ScrollGo(this.refs.newsDetail,this.refs.newsDetail.children[0],this.refs.ranway,this.refs.ranway.children[0],this.refs.control_news);

                return
            }
            obj.style.top=obj.offsetTop+speed+"px"
        }.bind(this),10)
    }
	fetchFns (url){
		let urls=this.hrefs.id
		
		console.log(this)
        fetch(url,{
        	method:"POST",
        	headers:{
			"Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
			},
        	body:this.hrefs.id
        })
        .then((data)=>data.json())
        .then((data)=>{ 
        	this.setState({
        		mains:data[0]["cons"]
        	})  		
        })
        .catch((x)=>{
            console.log(x)
        })
    }

}

class This_Merry extends React.Component{
	constructor (){
		super();
		this.state={
			data:[1,2,3,4],
			index:0,
			this_length:null
		}
	}
	componentDidMount (){
		this.fetchFns("http://localhost:8006/img/newsimg")
		//渲染后获取总长度
		this.setState({
			this_length:this.state.data.length-1
		})
	}
	News_img_left (){
		this.setState({
			index:this.state.index-1
		})
		if(this.state.index<=0){
			this.setState({
				index:this.state.this_length-1
			})
		}
	}
	News_img_right (){
		this.setState({
			index:this.state.index+1
		})
		console.log(this.state.this_length)
		if(this.state.index>this.state.this_length-2){
			this.setState({
				index:0
			})
		}
	}
	render (){
		return (
			<div className="News_header">
				<div className="News_img">
					{this.state.data.map((v,i)=>{
						return (
							<img src={v['img']} key={i} className={this.state.index==i?"Opacitys":""}/>
						)
					})}
				</div>
				<p className="News_btn_left" onClick={this.News_img_left.bind(this)}></p>
				<p className="News_btn_right" onClick={this.News_img_right.bind(this)}></p>
			</div>
		)
	}

	fetchFns (url){
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
}
  

export default Inside;



































