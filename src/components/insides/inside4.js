import React from "react"
//滚轮通用方法
import '../../Css/inside4.css'

class inside4 extends React.Component{
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
	}
	render (){
		return (
			<div id="insidebox">
				 <div id="foots">营销网络 Qualification and bonor</div>{/*接口*/}
				 <div id="inside0con">
				 	<div id="Inside4">
				 		<iframe src="http://localhost:8006/map/index.html" width frameborder="0" scrolling="no" width="810" height="550" style={{border:"none"}}></iframe>
					</div>
					
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
export default inside4

 


















