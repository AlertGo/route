import React from "react"
import {
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom'
//滚轮通用方法
import { Sb_down , ScrollGo , AddEvent } from '../scroll'
import '../../Css/inside5.css'
import '../../Css/inside8.css'
import dateils0 from './inside8s/inside8s0'
import dateils1 from './inside8s/inside8s1'
import dateils2 from './inside8s/inside8s2'
import dateils3 from './inside8s/inside8s3'
class inside8 extends React.Component{
	constructor ({match}){
		super()
		this.state={
			nav:[],
			//当前li
			index:0,
			cons:[dateils0,dateils1,dateils2,dateils3]
		}
		this.hrefs=match.url;
	}
	componentDidMount(){
		this.fetchFn("http://localhost:8006/img/inside8")
	}
	liCk (x){
		return ()=>{
			this.refs.inside0con.children[0].style.top="0px"
			let ball=this.refs.inside0con.parentNode.parentNode.children[1].children[0]
			ball.style.top="0px"
			this.setState({
				index:x
			})
		}
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
					八马文化 Qualification and bonor
				</div>
				{/*接口*/}
				 <div id="inside0con" ref="inside0con">
				 	<div id="Inside5">
				 		<div className="Inside5_nav">
				 			<ul>
				 			{this.state.nav.map((v,i)=>{
				 				return (
				 					<li key={i} className={i==this.state.index?"colors":""} onClick={this.liCk(i)}>
				 						<Link to={this.hrefs+"/dateils"+i} className="inside5a">
											{v['shows']}
				 						</Link>				 					
				 					</li>
				 				)
				 			})}
				 			</ul>
				 		</div>
				 		<div className="Inside5_box">
				 			<Route exact path={this.hrefs} component={dateils0}/>
				 			{this.state.cons.map((v,i)=>{				 			
				 				return (
				 					<Route path={this.hrefs+"/dateils"+i} component={v} key={i}/>
				 				)
				 			})}
				 			
				 		</div>
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
 				nav:data
 			})
        })
        .catch((x)=>{
            console.log(x)
        })
    }
}




export default inside8

 


















