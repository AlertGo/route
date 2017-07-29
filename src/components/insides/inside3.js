import React from "react"
//滚轮通用方法
import { Sb_down , ScrollGo , AddEvent } from '../scroll'

import Inside2s5 from './inside3s/inside3s0'
import '../../Css/inside3.css'

class inside3 extends React.Component{
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
				 <div id="foots">资质与荣誉 Qualification and bonor</div>{/*接口*/}
				 <div id="inside0con">
				 	<div id="Inside3">
				 		<Inside2s5 />
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
export default inside3

 


















