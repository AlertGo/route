import React from "react"
class vip2 extends React.Component{
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
				vip0
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
export default vip2