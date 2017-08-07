import React from "react"
class vip3 extends React.Component{
	constructor (){
		super()
		this.state={
			img:null,
			txt:[],
			title:null
		}
	}
	render (){
		return (
			<div id="vip0">
				<Register />
			</div>
		)
	}
    fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
        	let img=null,txt=[];
 
        	for(var i in data){
        		txt.push(data[i]['text'])
        	}
 			this.setState({
 				img:data[0]['img'],
 				txt:txt,
 				title:data[0]['title']
 			})
        })
        .catch((x)=>{
            console.log(x)
        })
    }
}
///用户信息
class Register extends React.Component{
	constructor (){
		super()
		this.state={
			usermessage:eval("("+sessionStorage.getItem("usemessage")+")")
		}
	}
	componentDidMount (){
		console.log(this.state.usermessage)
		let userobj=this.state.usermessage;
		this.refs.uer.value=userobj.users;
		this.refs.name.value=userobj.name;
		this.refs.email.value=userobj.email;
		this.refs.tel.value=userobj.tel;
	}
	submit_newdata (){
		let str=""
		if(this.refs.oldpass.value!=""){
			if(this.refs.oldpass.value!=this.state.usermessage.pass){
				alert("旧密码不正确")
			}else{
				if(this.refs.newpass.value!=this.refs.newpass2.value){
					alert("新密码不一致")
				}else{
					alert("keyi")
					str=`users=${this.refs.uer.value}
					&pass=${this.refs.newpass.value}
					&email=${this.refs.email.value}
					&tel=${this.refs.tel.value}
					&name=${this.refs.name.value}
					&id=this.state.usermessage.id`
				}
			}			
		}else{
			str=`users=${this.refs.uer.value}
					&pass=${this.state.usermessage.pass}
					&email=${this.refs.email.value}
					&tel=${this.refs.tel.value}
					&name=${this.refs.name.value}
					&id=this.state.usermessage.id`
		}
		fetch("http://localhost:8006/vip/replace",{
         	method:"post",
        	headers: { 
        		"Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
        	},
         	body:str			
		})
		.then((data)=>{
			if(data.ok){
				return data.json()
			}
		})
		.then(data => {
			console.log(data)
		})
		.catch((x) =>{
			console.log(x)
		})

	}
	render (){
		return (
			<div className="register">
				<h2>会员资料</h2>
				<div>
					<p>会员等级：尊享会员</p>
					<p>请累计积分：0，以消费积分：0，可消费积分：0</p>
					<label>用户名:</label><input type="text" className="login_text" ref="uer"/><br/>
					<label>您的姓名:</label><input type="text" className="login_text" ref="name" /><br/>
					<label>邮箱地址:</label><input type="text" className="login_text" ref="email"/><br/>
					<label>手机号:</label><input type="text" className="login_text" ref="tel" /><br/>
					<label>旧密码:</label><input type="password" className="login_pass" ref="oldpass" /><br/>
					<label>新密码:</label><input type="password" className="login_pass" ref="newpass" /><br/>
					<label>确认新密码:</label><input type="password" className="login_pass" ref="newpass2" /><br/>

					<button onClick={this.submit_newdata.bind(this)}>提交</button>
				</div>
			</div>
		)
	}
}
export default vip3