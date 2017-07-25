import React from "react"
class inside0 extends React.Component{
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
				 <div id="foots">{this.state.title}</div>{/*接口*/}
				 <div id="inside0con">
				 	<div id="Inside0">
						<img src={this.state.img} className="Inside0img" />	
						{this.state.txt.map((v,i)=>{
							return (
								<p key={i} className="Inside0p">{v}</p>
							)
						})}
					</div>
				 </div>
			</div>
		)
	}
	componentDidMount(){
		this.fetchFn("http://localhost:8006/img/inside0")
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
export default inside0