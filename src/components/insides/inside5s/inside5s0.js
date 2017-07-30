import React from "react"
import { Sb_down , ScrollGo , AddEvent } from '../../scroll'

//小分业1
export default class dateils0 extends React.Component{
	constructor (){
		super()
		this.state={
			img:null,
			txt:null
		}
	}
	componentDidMount (){
		this.fetchFn("http://localhost:8006/img/inside5s0")
	}
	componentDidUpdate (){
		this.refs.Ball_inside5s0.onmousedown=Sb_down(this.refs.inside5s0_right,this.refs.inside5s0_right.children[0])   	
		// this.refs.ranway.children[0].onmousedown=Sb_down(this.refs.right_btm,this.refs.right_btm.children[0].children[1].children[0]);
		this.refs.inside5s0_box.onmousewheel=ScrollGo(this.refs.inside5s0_right,this.refs.inside5s0_right.children[0],this.refs.Ball_inside5s0.parentNode,this.refs.Ball_inside5s0)
		this.refs.inside5s0_box.DOMMouseScroll=ScrollGo(this.refs.inside5s0_right,this.refs.inside5s0_right.children[0],this.refs.Ball_inside5s0.parentNode,this.refs.Ball_inside5s0)

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
    			<div className="inside5s0_left">
    				{/*左侧*/}
    				<img src={this.state.img} />
    			</div>
    			<div className="inside5s0_right" ref="inside5s0_right">
    				{/*右侧*/}
    				<div className="inside5s0_r_txt" dangerouslySetInnerHTML={{__html: this.state.txt}} />
    			
    			</div>
    			<div id="Runway_inside5s0">
    				<div id="Ball_inside5s0" ref="Ball_inside5s0"></div>
    			</div>
    		</div>
    	)
    }
}