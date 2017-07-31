import React from "react"
import '../../Css/inside9.css'

class inside9 extends React.Component{
	constructor (){
		super()
		this.state={
			data:[]
		}
	}
	componentDidMount(){
		this.fetchFn("http://localhost:8006/img/callwo")
	}
	on_lineck (){
		this.refs.on_line_fixed.style.display="block";
	}
	chack (){
		this.refs.on_line_fixed.style.display="none";

	}
	submit_ck (){
		alert("提交成功")
	}
	render (){
		return (
			<div id="insidebox">
				 <div id="foots">
				联系我们 Contact Us
				</div>{/*接口*/}
				 <div id="inside0con">
				 	<div id="Inside9">
						<div className="i9_left">
							<img src={this.state.data['img']} />
						</div>
						<div className="i9_right">
							<p>{this.state.data['name']}</p>
							<p>{this.state.data['address']}</p>
							<p>{this.state.data['tel']}</p>
							<p>{this.state.data['tel2']}</p>
							<p>{this.state.data['email']}</p>
							<p>{this.state.data['website']}</p>
							<p>{this.state.data['usewebname']}</p>
							<p>{this.state.data['join']}</p>
							<span className="on_line" onClick={this.on_lineck.bind(this)}>在线留言</span>
						</div>
					</div>
				 </div>
				 <div className="on_line_fixed" ref="on_line_fixed">
				 	<div className="on_line_con">
				 		<p className="on_line_title">留言版 Feedback</p>
				 		<p><label>标题:</label> <input type="text" /> </p>
						<p>发表您的留言:</p>
						<textarea></textarea>
						<button onClick={this.submit_ck.bind(this)}>提交</button> 

    					<div className="cha" onClick={this.chack.bind(this)}>+</div>
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
        		data:data[0]
        	})
        })
        .catch((x)=>{
            console.log(x)
        })
    }
}
export default inside9