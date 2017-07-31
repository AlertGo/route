import React from 'react'
import {GetLandR} from '../../scroll'
import MerryGo from '../../Merry-go-round1'


class Inside2s1 extends React.Component{
	constructor(){
		super()
		this.state={
			banner:[],
			autoshow:[]
		}
	}
	componentDidMount (){
		this.fetchFn("http://localhost:8006/img/inside2s1")
	}
    fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
        	let autoshow=[],banner=[];
        	for(var i in data){
        		data[i]['type']=="show"?autoshow.push(data[i]):banner.push(data[i]['img']);
        	}
        	this.setState({
        		banner:banner,
        		autoshow:autoshow
        	})
        })
        .catch((x)=>{
            console.log(x)
        })
    }
	render (){
		return (
			<div className="inside2s1">
				<div className="inside2s1_banner">
					{this.state.banner.map((v,i)=>{
						return (
							<img src={v} key={i} />
						)
					})}
				</div>
				<MerryGo autoshow={this.state.autoshow} />
			</div>
		)
	}

}
export default Inside2s1