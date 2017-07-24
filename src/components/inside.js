import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import Montbox from './commont/comleft'
import "../Css/commont.css"
import fetchFns  from './fetch'

class Inside extends React.Component{
	constructor (){
		super()
		console.log(this)
		this.state={
			navlist:[{con:[1,2,3,4,5,6,7,8,9,10]},{con:[1,2,3,4,5,6]},{},{con:[1]},{con:[1,2,3,4]},{con:[1,2,3,4,5,6]}],

		}
	}
	render (){
		return (
			<div id="Montbox">
				<Montbox />
				<div id="right_box">{/*右侧元素*/}
					<div className="right_box_header">
					</div>
				</div>
			</div>
		)
	}

    componentDidMount (){
    	let datas=1;
		datas=fetchFns("http://localhost:8006/img/navlists")
		console.log(datas)


    }
    componentDidUpdate (){
    	let navlist=this.state.navlist
    	for(var i in navlist){
    		console.log(i)
    		navlist[i]['con']=eval("("+navlist[i]['con']+")")
    	}
    	this.setState({
    		navlist:navlist
    	})
    	console.log(this.state)
    }
}
const InsideRight = ({ match }) =>{
	console.log(match)
}

export default Inside;