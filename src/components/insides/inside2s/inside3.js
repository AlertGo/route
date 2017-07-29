import React from "react"
import {
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import '../../Css/inside2.css'
class Inside3 extends React.Component{
	constructor (){
		super()
		this.state={

		}
	}
	componentDidMount(){
		this.fetchFn("http://localhost:8006/img/inside2")
		console.log(window.location)
	}
	render (){
		return (	
			<div id="insidebox"> 
				 <div id="foots">				
					{this.state.title.map((v,i)=>{
						return (
							<NavLink to={this.state.href+'/cha'+i} key={i} className={"inside2ula "+((this.state.href==window.location.pathname&&i==0)?'inside2libg':'')} activeClassName="inside2libg" >{v['title']}</NavLink>
						)				 	
					})}									 
				</div>{/*接口*/}
				 <div id="inside0con">
				 	<div className="inside2">				 		
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
 				title:data
 			})
        })
        .catch((x)=>{
            console.log(x)
        })
    }
}

export default Inside3

 
