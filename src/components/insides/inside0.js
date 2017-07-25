import React from "react"
class inside0 extends React.Component{
	constructor (){
		super()
		this.state={
			img:null,
			txt:[]
		}
	}
	render (){
		return (
			<div>
				 <div id="foots">八马简介 Bama Introduction</div>{/*接口*/}
				 <div>
				 	<div id="Inside0">
						<img src={this.state.img} />	
						{this.state.txt.map((v,i)=>{
							return (
								<p key={i}>{v}</p>
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
export default inside0