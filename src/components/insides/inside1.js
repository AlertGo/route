import React from "react"
//滚轮通用方法
import { Sb_down , ScrollGo , AddEvent } from '../scroll'
class inside1 extends React.Component{
	constructor (){
		super()
		this.state={
			img:null,
			img1:null,
			txt:null,
			title:null
		}
	}
	componentDidMount(){
		this.fetchFn("http://localhost:8006/img/inside1")
		this.refs.runway1.children[0].onmousedown=Sb_down(this.refs.inside1left,this.refs.inside1left.children[0])
		AddEvent(this.refs.inside1left,"DOMMouseScroll",ScrollGo(this.refs.inside1left,this.refs.inside1left.children[0],this.refs.runway1,this.refs.runway1.children[0]))
		AddEvent(this.refs.inside1left,"mousewheel",ScrollGo(this.refs.inside1left,this.refs.inside1left.children[0],this.refs.runway1,this.refs.runway1.children[0]))
	}
	render (){
		return (
			<div id="insidebox">
				 <div id="foots">{this.state.title}</div>{/*接口*/}
				 <div id="inside0con">
				 	<div id="Inside0">
						<div className="inside1left" ref="inside1left">
							<div dangerouslySetInnerHTML={{__html: this.state.txt}} className="inside1txt" />
							<div id="Runway1" ref="runway1">
								<div id="Ball1"></div>
							</div>
						</div>												
					</div>
					<img src={this.state.img1} id="dongimg"/>
				 </div>
			</div>
		)
	}
    fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
 			this.setState({
 				img:data[0]['img'],
 				img1:data[0]['img1'],
 				txt:data[0]['txt'],
 				title:data[0]['title']
 			})
        })
        .catch((x)=>{
            console.log(x)
        })
    }
}
export default inside1

 


















