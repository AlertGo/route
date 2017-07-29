import React from 'react'

// 导入轮播start

//end

export default class Inside2s2 extends React.Component{
	constructor (){
		super();
		this.state={
			data:[],
			bg:[],
			//当前页
			index:0
		}
		this.index=0;
		this.bool=true;
	}
	componentDidMount (){
		this.fetchFn("http://localhost:8006/img/inside2s2")
		console.log(this.refs.ul)

	}
	componentDidUpdate (){
		this.refs.ul.style.width=this.refs.ul.children.length*260+"px"

	}
    fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
       		console.log(data)
       		let bo=[],bg=[]
       		for(var i in data){
       			data[i]['text']=="bg"?bg.push(data[i]):bo.push(data[i])
       		}
       		this.setState({
       			data:bo,
       			bg:bg
       		})
        })
        .catch((x)=>{
            console.log(x)
        })
    }
   	LeftCk (){
   		return () => {
   			if(this.bool){
   				this.bool=false;
   				let boxW=this.refs.inside2s2_box.offsetWidth;
   				setTimeout(()=>{
   					this.bool=true
   				},1e3)
   				if(this.index>=Math.floor(this.refs.ul.offsetWidth/boxW)) return 
   				this.index=this.index+1
   				this.refs.ul.style.left=-boxW*this.index+"px"
   			}  		
   		}
   	}
   	RightCk (){
   		return () => {
   			if(this.bool){
   				this.bool=false;
   				let boxW=this.refs.inside2s2_box.offsetWidth;
				setTimeout(()=>{
					this.bool=true
				},1e3)
				if(this.index<=0) return 
				this.index=this.index-1
				this.refs.ul.style.left=-boxW*this.index+"px"
   			}
   		}
   	}
	render (){
		return (
			<div className="inside2s2">
				<div className="inside2s2_top">
					{/*	轮播元素 */}
					<div className="inside2s2_l_box" ref="inside2s2_box">
						<ul className="inside2s2_l_ul" ref="ul">
							{this.state.data.map((v,i) => {
								return (
									<li key={i}>
										<img src={v['img']} />
										<p className="inside2s2_l_ul_p">{v['title']}</p>
										<p>{v['text']}</p>
									</li>
								)
							})}
						</ul>
					</div>
					<button id="M_btnleft2" onClick={this.RightCk()} ></button>
					<button id="M_btnright2" onClick={this.LeftCk()}></button>
				</div>
				<div className="inside2s2_btm">
					{this.state.bg.map((v,i) => {
						return (
							<img src={v['img']} key={i}/>
						)
					})}
				</div>
			</div>
		)
	}

}
