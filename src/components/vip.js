import React from 'react'
import {
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom'
// 左侧通用组件
import Montbox from './commont/comleft'
import "../Css/commont.css"
import "../Css/vip.css"

import 'whatwg-fetch'
//滚轮通用方法
import { Sb_down , ScrollGo , AddEvent , RemoveEvent } from './scroll'
//导入vip三级小组件
import vip0 from './vips/vip0'
import vip1 from './vips/vip1'
import vip2 from './vips/vip2'
import vip3 from './vips/vip3'

//head导航小组件
class Head_right extends React.Component{
	viploginck (){
		alert("登录后查看")
	}
	render (){
		console.log(window.location.pathname)
		return (
			<div id="head_right">
			    <ul>
			    	{this.props.headlist.map((v,i)=>{
			    		if(sessionStorage.getItem("logoingstate")=="true"){
				    		return (
				    			<li key={i}>
				    				<NavLink activeStyle={{
	    								fontWeight: 'bold',
	    								color: 'red'
	  								}} to={this.props.hrefs+this.props.hrefs+i}
	  									className={(window.location.pathname=='/vip' && i==0)?"Activecolor":''}
	  								>
	  									{v['title']}
	  								</NavLink>
	  							</li>
				    		)
			    		}else{
			    			return (
				    			<li key={i}>
				    				<Link to={this.props.hrefs} onClick={this.viploginck}>
	  									{v['title']}
	  								</Link>
	  							</li>
				    		)
			    		}

			    	})}
			    </ul>
			</div>
		)
	}
}
//vip大组件
class Vip extends React.Component{
	constructor ({match}){
		super()
		this.state={
			headright:[]
		}
		console.log(match)
		this.hrefs=match.path
	}
    componentDidMount (){
		this.fetchFns("http://localhost:8006/vip/viplist")
    }
	render (){
		return (
			<div id="Montbox">
				<Montbox />{/*左侧组件*/}
				<div id="right_box">{/*右侧元素*/}
					<div className="right_box_header right_box_header_vip">
						<div id="header_left">
							<p className="insidep">Member Area</p>
							<p>会员专区</p>
						</div>
						{/**
							右侧头部共享
						*/}
						<Head_right headlist={this.state.headright} hrefs={this.hrefs}/>
					</div>
					<div id="right_btm" ref="right_btm">
						<div className="right_cons">
							{(function (that){
								console.log(sessionStorage.getItem("logoingstate"))
								//未登录状态时触发
								if(sessionStorage.getItem("logoingstate")!="true"){
									return (
										<div>
											<Route exact path="/vip" component={Logoing} />
											<Route path="/vip/register" component={Register} />
										</div>
									)
								}else{
									return (
										<div>
											<Route exact path="/vip" component={vip0} />
											<Route path="/vip/vip0" component={vip0} />
											<Route path="/vip/vip1" component={vip1} />
											<Route path="/vip/vip2" component={vip2} />
											<Route path="/vip/vip3" component={vip3} />
										</div>

									)
								}
								// console.log(sessionStorage.getItem("logo")==null)

							})(this)}
						</div>
						<div id="Runway" ref="ranway">
							<div id="Ball"></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	cks (ev){
		ev.persist()
		ev.target.pathname!=window.location.pathname && (this.refs.ranway.children[0].style.top="0px")
	}
    fetchFns (url){
    	var datas=null;
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
        	this.setState({
        		headright:data
        	})

        })
        .catch((x)=>{
            console.log(x)
        })
    }
}
///登陆组件
class Logoing extends React.Component{
	constructor (){
		super()
		this.state={

		}
	}
	render (){
		return (
			<div className="Login">
				<h2>会员登录</h2>
				<div>
					<label>用户名:</label><input type="text" ref="login_text" /><br/>
					<label>密码:</label><input type="password" ref="login_pass" /><br/>
					<button onClick={this.login()}>登陆</button>
					<button className="login_button"><Link to="/vip/register">注册</Link></button>
				</div>
			</div>
		)
	}
	login(){
		return ()=>{
			var use=this.refs.login_text.value;
			var pass=this.refs.login_pass.value;
			console.log(use)
			fetch('http://localhost:8006/vip/login',{
				method:"post",
		        headers: {
		        	"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
		        },
		        body:`user=${use}&pass=${pass}`
			})
			.then(data => {
				console.log(data)
				if(data.ok){
					return data.json()
				}
			})
			.then( data => {
				console.log(data)
				if(data.message==0){
					alert(data.loginerrMessage)
				}else if(data.message==1){
					alert(data.loginerrMessage)
					console.log(JSON.stringify(data.data))
					sessionStorage.setItem('logoingstate',"true")
					sessionStorage.setItem('usemessage',JSON.stringify(data.data))

					this.props.history.push('/vip/vip0')
				}

			})
			.catch( (x) => {
				console.log(x)
			})

		}
	}

}
//注册组件
class Register extends React.Component{
	constructor (){
		super()
	}
	vip_register (){
		if(this.refs.user.value!=""&&this.refs.name.value!=""&&this.refs.email.value!=""&&this.refs.tel.value!=""&&this.refs.pass.value!=""&&this.refs.pass2.value!=""){
			let str=`users=${this.refs.user.value}
				&pass=${this.refs.pass.value}
				&email=${this.refs.email.value}
				&tel=${this.refs.tel.value}
				&name=${this.refs.name.value}`
			fetch("http://localhost:8006/vip/addliebiao",{
	         	method:"post",
	        	headers: {
	        		"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
	        	},
	         	body:str
			})
			.then(data => {
				if(data.ok){
            		this.props.history.push("/vip")
            		return data.json()
				}
			})
      .then((data) => {
        console.log(data)
      })
		}else{
			alert("全必填")
		}
	}
	render (){
		return (
			<div className="register">
				<h2>会员注册</h2>
				<div>
					<Link to="/vip">如果您已有注册帐户，请返回。</Link>
					<p>请您准确填写下述信息，标记*的项目为必填项。感谢您的合作！</p>
					<label>用户名:</label><input type="text" className="login_text" ref="user"/><br/>
					<label>您的姓名:</label><input type="text" className="login_text"  ref="name"/><br/>
					<label>邮箱地址:</label><input type="text" className="login_text" ref="email" /><br/>
					<label>手机号:</label><input type="text" className="login_text" ref="tel" /><br/>
					<label>密码:</label><input type="password" className="login_pass" ref="pass" /><br/>
					<label>确认密码:</label><input type="password" ref="pass2" className="login_pass" /><br/>
					<button onClick={this.vip_register.bind(this)}>提交</button>
				</div>
			</div>
		)
	}
}



export default Vip;
