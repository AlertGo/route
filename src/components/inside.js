import React from 'react'
import {
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
// 左侧通用组件
import Montbox from './commont/comleft'
import "../Css/commont.css"
import 'whatwg-fetch'
//滚轮通用方法
import { Sb_down , ScrollGo , AddEvent , RemoveEvent } from './scroll'
//引入三级分页
import inside0 from './insides/inside0'
import inside1 from './insides/inside1'
import inside2 from './insides/inside2'
import inside3 from './insides/inside3'
import inside4 from './insides/inside4'
import inside5 from './insides/inside5'
import inside6 from './insides/inside6'
import inside7 from './insides/inside7'
import inside8 from './insides/inside8'
import inside9 from './insides/inside9'

class Inside extends React.Component{
	constructor ({match}){
		super()
		this.state={
			navlist:[{con:[1,2,3,4,5,6,7,8,9,10]},{con:[1,2,3,4,5,6]},{},{con:[1]},{con:[1,2,3,4]},{con:[1,2,3,4,5,6]}],
			routes:[{
				path:"/inside"
			},{
				path:"/inside1"
			},{
				path:"/inside2"
			},{
				path:"/inside3"
			},{
				path:"/inside4"
			}],
			ballstyle:true,
			comname:[inside0,inside1,inside2,inside3,inside4,inside5,inside6,inside7,inside8,inside9]
		}
		this.hrefs=match.path
	}

    componentWillMount (){
		this.fetchFns("http://localhost:8006/img/navlists")
    }
    componentWillUpdate (){
    	this.refs.right_btm.onmousewheel=null;
		this.refs.right_btm.DOMMouseScroll=null;
    }
    componentDidUpdate (){
    	setTimeout(()=>{
			if(this.refs.right_btm.children[0].children[1].offsetHeight>=this.refs.right_btm.children[0].children[1].children[0].offsetHeight){
				this.refs.ranway.classList.remove("block")

			}else{
				this.refs.ranway.classList.add("block")
				this.refs.ranway.style.top="0px"
			}
    	},50)
		this.refs.ranway.children[0].onmousedown=Sb_down(this.refs.right_btm,this.refs.right_btm.children[0].children[1].children[0])   	
		this.refs.right_btm.onmousewheel=ScrollGo(this.refs.right_btm,this.refs.right_btm.children[0].children[1].children[0],this.refs.ranway,this.refs.ranway.children[0]);
		this.refs.right_btm.DOMMouseScroll=ScrollGo(this.refs.right_btm,this.refs.right_btm.children[0].children[1].children[0],this.refs.ranway,this.refs.ranway.children[0]);
    }
	render (){
		return (
			<div id="Montbox">
				<Montbox />{/*左侧组件*/}
				<div id="right_box">{/*右侧元素*/}
					<div className="right_box_header">
						<div id="header_left">
							<p className="insidep">Inside BAMA</p>
							<p>走进八马</p>
						</div>
						<div id="head_right">
						    <ul>
							{this.state.navlist[0]['con'].map((v,i)=>{
								return (
									<li key={i}><NavLink to="/inside" activeStyle={{
    								fontWeight: 'bold',
    								color: 'red'
  								}} to={"/inside/inside"+i} onClick={this.cks.bind(this)} className={(this.hrefs==window.location.pathname && i==0)?"cosss":""} >{v}</NavLink></li>
								)
							})}
						    </ul>
						</div>
					</div>
					<div id="right_btm" ref="right_btm">
						<Switch	>
							<Route exact path={"/inside"} component={inside0} />
							{this.state.comname.map((v,i)=>{														
								return (
									<Route path={"/:use/inside"+i} component={v} key={i} />
								)
							})}
						</Switch>
						<div id="Runway" ref="ranway">
							<div id="Ball"></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	cks (ev){
		ev.persist()
		ev.target.pathname!=window.location.pathname && (this.refs.ranway.children[0].style.top="0px")
		
	}
    fetchFns (url){
    	var datas=null;
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{      
        	datas=data;
        	for(var i in data){
        		if(i==2){
        			continue
        		}else{
           			datas[i]["con"]=eval("("+datas[i]["con"]+")")
           			if(i>2){
           				this.state.routes[i-1].abc=datas[i]["con"];
           			}else{
           				this.state.routes[i].abc=datas[i]["con"];
           			}
        		}
           }         
			this.setState({
				navlist:datas 	
			})
        })
        .catch((x)=>{
            console.log(x)
        })
    }
}


export default Inside;