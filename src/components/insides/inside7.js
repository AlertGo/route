import React from "react"
import '../../Css/inside7.css'
class inside7 extends React.Component{
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
			<div id="insidebox">
				 <div id="foots">非遗传承 BAMA Inheritance</div>{/*接口*/}
				 <div id="inside0con">
				 	<div id="Inside7">
						<img src='http://localhost:8006/images/inhertop.jpg' className="Inside7img" />
						<p className="inside7_p">铁观音史谱</p>
						<This_i7_details />		
					</div>
				 </div>
			</div>
		)
	}

}



class This_i7_details extends React.Component{
	constructor (){
		super()
		this.state={
			data:[],
			fixedcon:[]
		}
	}
	componentWillMount(){
		this.fetchFn("http://localhost:8006/img/inside7")
	}
    fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
        	this.setState({
        		data:data
        	})
        })
        .catch((x)=>{
            console.log(x)
        })
    }
    i7_Tie_ck (x){
    	return () => {
    		this.setState({
    			fixedcon:x
    		})
    		this.refs.i7_Tie_fixed.style.display="block";
    	}
    }
    chack (){
    	this.refs.i7_Tie_fixed.style.display="none"
    }
    render (){
    	return (
    		<div className="i7_Tie">
    			<ul>
    				{this.state.data.map((v,i) => {
    					return (
    						<li key={i}>
    							<div className="i7_Tie_leftli">
    								<img src={v["img"]} />
    								{/*左侧头像*/}
    							</div>
    							<div className="i7_Tie_rightli">
    								{/*左侧内容*/}
    								<p className="i7_Tie_lip1">{v['title']}</p>
    								<p className="i7_Tie_lip2">{v['name']}</p>
    								<div className="i7_Tie_cons">
                  						<div className="i7_Tie_cons_l" dangerouslySetInnerHTML={{__html: v['cons']}} />
                  						<div className="i7_Tie_cons_r" onClick={this.i7_Tie_ck(v)}>详情更多</div>
    								</div>
    							</div>
    						</li>
    					)
    				})}
    			</ul>
				<div className="i7_Tie_fixed" ref="i7_Tie_fixed">
					<div className="i7_fixed_con">
						<div className="fixed_left">
    						<img src={this.state.fixedcon["img"]} />
    						{/*左侧头像*/}
    					</div>
    					<div className="fixed_right">
    						<p className="i7_Tie_lip11">{this.state.fixedcon['title']}</p>
    						<p className="i7_Tie_lip22">{this.state.fixedcon['name']}</p>
                  			<div className="fixed_right_con" dangerouslySetInnerHTML={{__html: this.state.fixedcon['cons']}} />
    					</div>
    					<div className="cha" onClick={this.chack.bind(this)}>+</div>
					</div>
				</div>
    		</div>
    	)
    }

}


export default inside7