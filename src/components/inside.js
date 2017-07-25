import React from 'react'
import {
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom'
import Montbox from './commont/comleft'
import "../Css/commont.css"
import fetchFns  from './fetch'
import inside0 from'./insides/inside0'

	const inside1=()=>(
		<div>11111111</div>
	)
	const inside2=()=>(
		<div>2</div>
	)
	const inside3=()=>(
		<div>3</div>
	)
	const inside4=()=>(
		<div>11111111</div>
	)
	const inside5=()=>(
		<div>11111111</div>
	)
	const inside6=()=>(
		<div>11111111</div>
	)
	const inside7=()=>(
		<div>11111111</div>
	)
	const inside8=()=>(
		<div>11111111</div>
	)
	const inside9=()=>(
		<div>11111111</div>
	)
class Inside extends React.Component{
	constructor (){
		super()
		console.log(this)
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
			ballstyle:false
		}
	}
	render (){
		return (
			<div id="Montbox">
				<Montbox />
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
  								}} to={"/inside/inside"+i}>{v}</NavLink></li>
								)
							})}
						    </ul>
						</div>
					</div>
					<div id="right_btm" ref="right_btm">
						<Switch	>		
							<Route exact path={"/:use/inside0"} component={inside0} />
							{this.state.navlist[0]['con'].map((v,i)=>{							
								var com="inside"+i
								console.log(com)
								return (
									<Route path={"/:use/inside"+i} component={inside0} key={i}/>
								)
							})}
						</Switch>
						<div id="Runway" className={this.state.ballstyle?"block":""}>
							<div id="Ball" onMouseDown={this.Sb_down.bind(this)}></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	GetLandR(obj){
        var left=0,top=0
        while(obj){
            left+=obj.offsetLeft;
            top+=obj.offsetTop;
            obj=obj.offsetParent;
            obj!=null?(left+=obj.clientLeft,top+=obj.clientTop):""

        }
        return {L:left,T:top}
    }
	// 滚轮与鼠标点击
	Sb_down (ev){
		
		let obj=ev.currentTarget;
		let downY=ev.clientY-this.GetLandR(obj).T;
		var that=this
		console.log(this.GetLandR(obj).T)
		document.onmousemove=(e)=>{
			e.preventDefault()
			let to=e.clientY-downY-this.GetLandR(obj.parentNode).T;
			console.log(to)
			to<0?(to=0):to;
			to>obj.parentNode.offsetHeight-obj.offsetHeight?(to=obj.parentNode.offsetHeight-obj.offsetHeight):to;
			obj.style.top=to+"px";
			let percent=obj.offsetTop/(obj.parentNode.offsetHeight-obj.offsetHeight)
			that.refs.right_btm.children[0].children[1].children[0].style.top=(that.refs.right_btm.offsetHeight-that.refs.right_btm.children[0].children[1].children[0].offsetHeight)*percent+"px"
			// console.log(that.refs.right_btm.children[0])

		}
		document.onmouseup=function(){
			this.onmousemove=null;
			this.onmouseup=null;
		}
		
		
	}
    fetchFns (url){
    	var datas=null;
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
        	console.log(data)
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

    componentDidMount (){
		this.fetchFns("http://localhost:8006/img/navlists")
		setTimeout(()=>{
    		if(this.refs.right_btm.children[0].offsetHeight>this.refs.right_btm.offsetHeight){
				this.setState({
					ballstyle:true
				})
			}else{
				this.setState({
					ballstyle:false
				})
			}
   		},1000)	
    }
    componentDidUpdate (){
	
    }
}

//小组件 走进八马
// class inside0 extends React.Component{
// 	constructor (){
// 		super()
// 		this.state={
// 			img:null,
// 			txt:[]
// 		}
// 	}
// 	render (){
// 		return (
// 			<div id="Inside0">
// 				<img src={this.state.img} />	
// 				{this.state.txt.map((v,i)=>{
// 					return (
// 						<p key={i}>{v}</p>
// 					)
// 				})}
// 			</div>
// 		)
// 	}
// 	componentDidMount(){
// 		this.fetchFn("http://localhost:8006/img/inside0")
// 	}
//     fetchFn (url){
//         fetch(url)
//         .then((data)=>data.json())
//         .then((data)=>{
//         	let img=null,txt=[];
//         	console.log(data)
//         	for(var i in data){
//         		txt.push(data[i]['text'])
//         	}
//  			this.setState({
//  				img:data[0]['img'],
//  				txt:txt
//  			})
//         })
//         .catch((x)=>{
//             console.log(x)
//         })
//     }
// }

export default Inside;