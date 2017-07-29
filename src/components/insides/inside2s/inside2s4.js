import React from 'react'

// 导入轮播start

//end

export default class Inside2s4 extends React.Component{
	constructor (){
		super();
		this.state={
			data:[],
		}
	}
	componentDidMount (){
		this.fetchFn("http://localhost:8006/img/inside2s4")
		console.log(this.refs.ul)
	}
	componentDidUpdate (){
		this.refs.ul.style.width=this.refs.ul.children.length*260+"px"
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
	render (){
		return (
			<div className="inside2s3">
				{this.state.data.map((v,i) => {
					return (
						<img src={v['img']} />
					)
				})}
			</div>
		)
	}

}
