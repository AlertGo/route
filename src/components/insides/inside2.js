import React from "react"
import {
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import '../../Css/inside2.css'
import Inside2s0 from './inside2s/inside2s0'
import Inside2s1 from './inside2s/inside2s1'
import Inside2s2 from './inside2s/inside2s2'
import Inside2s3 from './inside2s/inside2s3'
import Inside2s4 from './inside2s/inside2s4'
import Inside2s5 from './inside2s/inside2s5'

class Inside2 extends React.Component{
	constructor (){
		super()
		this.state={
			components:[Inside2s0,Inside2s1,Inside2s2,Inside2s3,Inside2s4,Inside2s5,Inside2s1,Inside2s1],
			title:[],
			href:"/inside/inside2"
		}
	}
	componentDidMount(){
		this.fetchFn("http://localhost:8006/img/inside2")
	}
	aboutscroll (){
		this.refs.inside0con.children[0].style.top="0px"
		let ball=this.refs.inside0con.parentNode.parentNode.children[1].children[0]
		ball.style.top="0px"
	}
	render (){
		return (
			<div id="insidebox"> 
				 <div id="foots">				
					{this.state.title.map((v,i)=>{
						return (
							<NavLink to={this.state.href+'/cha'+i} key={i} className={"inside2ula "+((this.state.href==window.location.pathname&&i==0)?'inside2libg':'')} activeClassName="inside2libg" onClick={this.aboutscroll.bind(this)}>{v['title']}</NavLink>
						)				 	
					})}									 
				</div>{/*接口*/}
				 <div id="inside0con" ref="inside0con">
				 	<div className="inside2">
				 	<Switch>	
						<Route exact path={this.state.href} component={Inside2s0} />
					 	{this.state.title.map((v,i)=>{
							return (
								<Route path={this.state.href+"/cha"+i} key={i} component={this.state.components[i]} />
							)				 	
						})}	
					</Switch>			 		
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

export default Inside2

 
