import React from 'react'
import '.././Css/Merry.css'
class MerryGo extends React.Component{
	constructor(){
		super()
		this.state={
			index:0,//当前图片
			page:0,//需要多少页
			pageindex:0

		}
	}
	showCk (i){
		return (ev) => {
			this.setState({
				index:i
			})
		}
	}
	render (){
		let pagearr=[];
		let pagearr2=[];
		let autoshow=this.props.autoshow
		var pagenode=null;
		for(var i in autoshow){
			// console.log(autoshow[i])
			if(i%7==0){
				pagearr=[];
				pagenode=React.createElement("div",{className:(i/7)==this.state.pageindex?"Opacity":"",key:i},pagearr)
				pagearr2.push(pagenode)
			}
			pagearr.push(<img src={autoshow[i]['img']} key={i} onClick={this.showCk(i)} className={i==this.state.index?"ckcolor":""}/>)
		}

		return (
			<div id="MerryBox">
				<div className="imgshow">{/*图片展示区*/}	
					{autoshow[0]!=undefined?<img src={autoshow[this.state.index]["img"]}/>:""}	
					{(function(that){
						let myNodeArr=[]
						if(autoshow[0]!=undefined){

							for(var i in autoshow){	
								myNodeArr.push(<img src={autoshow[i]["img"]} className={i==that.state.index?"Opacityimg":""} key={i}/>)
							}	
							return myNodeArr
						}
					})(this)}
				</div>
				<div className="titleshow">
					{autoshow[0]!=undefined?autoshow[this.state.index]["title"]:""}	
				</div>{/*介绍*/}
				<div className="MerryNav">
					<div className="MerryNav_1">
						{pagearr2}
					</div>
					<button id="M_btnleft" onClick={this.ckleft.bind(this)}></button>
					<button id="M_btnright" onClick={this.ckright.bind(this)}>右</button>
				</div>
				
			</div>
		)
	}
	ckright (){
		if(this.state.pageindex>=2) return ;
		this.setState({
			pageindex:this.state.pageindex+1
		})
	}
	ckleft (){
		if(this.state.pageindex<=0) return ;

		this.setState({
			pageindex:this.state.pageindex-1
		})
	}

}

export default MerryGo