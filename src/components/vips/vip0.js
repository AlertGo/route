import React from "react"
import { Sb_down , ScrollGo , AddEvent } from '../scroll'

class vip0 extends React.Component{
	constructor (){
		super()
		this.state={
			img:null,
			txt:[],
			title:null
		}
	}
	render (){
		return (
			<div id="vip0">
				<Dateils0 />
			</div>
		)
	}
    fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
        	let img=null,txt=[];
 
        	for(var i in data){
        		txt.push(data[i]['text'])
        	}
 			this.setState({
 				img:data[0]['img'],
 				txt:txt,
 				title:data[0]['title']
 			})
        })
        .catch((x)=>{
            console.log(x)
        })
    }
}
//小分业1
class Dateils0 extends React.Component{
	constructor (){
		super()
		this.state={
			img:null,
			txt:null
		}
	}
	componentDidMount (){
		this.fetchFn("http://localhost:8006/vip/vip0")
	}
	componentDidUpdate (){
			if(this.refs.inside5s0_right.offsetHeight>=this.refs.inside5s0_right.children[0].offsetHeight){
			this.refs.Ball_inside5s0.parentNode.style.display="none"
		}else{
			this.refs.Ball_inside5s0.parentNode.style.display="block"
			this.refs.Ball_inside5s0.onmousedown=Sb_down(this.refs.inside5s0_right,this.refs.inside5s0_right.children[0])   	
			this.refs.inside5s0_box.onmousewheel=ScrollGo(this.refs.inside5s0_right,this.refs.inside5s0_right.children[0],this.refs.Ball_inside5s0.parentNode,this.refs.Ball_inside5s0)
			this.refs.inside5s0_box.DOMMouseScroll=ScrollGo(this.refs.inside5s0_right,this.refs.inside5s0_right.children[0],this.refs.Ball_inside5s0.parentNode,this.refs.Ball_inside5s0)
			// console.log(this.refs.inside5s0_right.offsetHeight)

		}
	}
	fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
        	console.log(data)
 			this.setState({
 				img:data[0]['img'],
 				txt:data[0]['con']
 			})
 
        })
        .catch((x)=>{
            console.log(x)
        })
    }
    render (){
    	return (
    		<div className="inside5s0_box" ref="inside5s0_box">
    			<div className="inside5s0_right" ref="inside5s0_right">
    				{/*右侧*/}
    				<div className="inside5s0_r_txt" dangerouslySetInnerHTML={{__html: this.state.txt}} />   			
    			</div>
    			<div className="inside5s0_left">
    				{/*左侧*/}
    				<img src={this.state.img} />
    			</div>
    			<div id="Runway_inside5s0">
    				<div id="Ball_inside5s0" ref="Ball_inside5s0"></div>
    			</div>
    		</div>
    	)
    }
}
export default vip0