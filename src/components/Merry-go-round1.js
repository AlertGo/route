import React from 'react'
import '.././Css/Merry.css'
class MerryGo extends React.Component{
	constructor(){
		super()
		console.log(this)
	}
	render (){
		return (
			<div id="MerryBox">
				<div className="imgshow">{/*图片展示区*/}
					{this.props.atuoshow.map((v,i) => {
						return (
							<img src={v['img']} key={i}/>
						)
					})}	
				</div>
				<div className="titleshow">asfasdfasdf</div>{/*介绍*/}
				<div className="MerryNav">
					<div>
						{this.props.atuoshow.map((v,i) => {
							
							if(i%7==0){
								let nodearr=[]
								let node=React.createElement('div',{className:"Merrynavs"},nodearr)
							}
							nodearr.push(<img src={v['img']} />)
							
						})}
					</div>
				</div>
			</div>
		)
	}

}
export default MerryGo