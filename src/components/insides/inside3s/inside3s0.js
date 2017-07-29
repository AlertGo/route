import React from 'react'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'


export default class Inside2s5 extends React.Component{
	constructor (){
		super();
		this.state={
			data:[],
		}
		this.hrefs=window.location.pathname;
	}

	render (){
		return (
			<div className="inside2s5">
				<Route path={this.hrefs} component={This_default} />
			</div>
		)
	}

}
class This_default extends React.Component{
	constructor (){
		super();
		this.state={
			data:[],
			index:0,
			display:"none"
		}
		//当前页
		this.index=0;
		this.pageindex=0;
		//总页
		this.page=null;
		this.hrefs=window.location.pathname;


	}
	componentDidMount (){
		this.fetchFn("http://localhost:8006/img/inside3")
	}
	componentDidUpdate (){
		console.log(window.location.pathname)
		if(window.location.pathname==this.hrefs){
			this.refs.inside2s5_box.style.display="block"
		}
	}
    fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
        	this.setState({
        		data:data
        	})
        })
        .catch((x)=>{
            console.log(x)
        })
	}
	leftck (){
		if(this.state.index>=this.page) return; 
			this.setState({
				index:this.state.index+1
			})
			console.log(this.state.index)
	}
	rightck (){
			if(this.state.index<=0) return; 
			this.setState({
				index:this.state.index-1
			})
			console.log(this.state.index)
	}
	listck (x){
		return ()=>{
			this.setState({
				index:x
			})
		}
	}
	navlistck (ev){
		this.refs.inside2s5_box.style.display="none"
	}
	render (){
		let nodetop=[]
		let nodechild=[]
		this.page=Math.floor(this.state.data.length/10)
		console.log(this.page)
		this.state.data.map((v,i)=>{
			if(i%10==0){
				nodechild=[];
				let nodebox=React.createElement("div",{className:(i/10)==this.state.index?"Opacitys":"",key:i},nodechild)
				nodetop.push(nodebox)
			}
			let nodestr=(
				
				<dl className="inside3_dl" key={i}>
						<dt><img src={v['img']} /></dt>
						<dd>{v['title']}</dd>
				</dl>
				
			)
			nodechild.push(nodestr)
		})
		return (
			<div className="inside2s5_box" ref="inside2s5_box">
				<div className="inside2s5_top" >
					{nodetop}
				</div>
				<div className="inside2s5_btm">
					<p onClick={this.rightck.bind(this)}>{"\<"}</p>
					<div>
						{(function (that){
							let listarr=[]
							for(var i=0;i<=that.page;i++){
								listarr.push(<span className={that.state.index==i?"color":""} onClick={that.listck(i)}>{i+1}</span>)
							}
							return listarr

						})(this)}
					</div>
					<p onClick={this.leftck.bind(this)}>{"\>"}</p>
				</div>
				
			</div>
		)
	}
	
}
























