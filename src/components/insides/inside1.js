import React from "react"
class inside1 extends React.Component{
	constructor (){
		super()
		this.state={
			img:null,
			txt:[]
		}
	}
	render (){
		return (
			<div id="Inside1">
				<img src={this.state.img} />	
				{this.state.txt.map((v,i)=>{
					return (
						<p key={i}>{v}</p>
					)
				})}
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
        	console.log(data)
        	for(var i in data){
        		txt.push(data[i]['text'])
        	}
 			this.setState({
 				img:data[0]['img'],
 				txt:txt
 			})
        })
        .catch((x)=>{
            console.log(x)
        })
    }
}
export default inside1