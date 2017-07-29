import React from 'react'
import {GetLandR} from '../../scroll'
class Inside2s0 extends React.Component{
	constructor(){
		super()
		this.state={
			img:[],
			show:[],
			speed:0,
			timer:null
		}
	}
	componentDidMount (){
		this.fetchFn("http://localhost:8006/img/inside2s0")

		let Timer=null;
		this.refs.cha_pleft.onmouseover=()=>{
			clearInterval(Timer)
			Timer=setInterval(() => {
				if(this.state.speed<=-(this.refs.chaimgs.children[3].offsetWidth-this.refs.chaimgs.offsetWidth)){
					clearInterval(Timer);	
					this.refs.chaimgs.children[3].style.left=this.refs.chaimgs.offsetWidth-this.refs.chaimgs.children[3].offsetWidth+"px"
					this.MouseOvers()
					return ;
				}
				this.setState({
					speed:this.state.speed-5
				})
				this.refs.chaimgs.children[3].style.left=this.state.speed+"px"
				this.MouseOvers()
				// console.log(this.refs.chaimgs.children[3].offsetLeft)
				this.sb_enter()
			},15)
		}
		this.refs.cha_pright.onmouseover=() => {
			clearInterval(Timer);
			Timer=setInterval(() => {
				if(this.state.speed>=0){
					clearInterval(Timer);
					this.refs.chaimgs.children[3].style.left=0+"px"

					this.MouseOvers()

					return 
				}
				this.setState({
					speed:this.state.speed+5
				})
				this.refs.chaimgs.children[3].style.left=this.state.speed+"px"

				this.MouseOvers()
				this.sb_enter()

			},20)
		}
		this.refs.cha_pleft.onmouseout=()=>{
			clearInterval(Timer)
		}
		this.refs.cha_pright.onmouseout=()=>{
			clearInterval(Timer)
		}
	}

	MouseOvers (){
		let percent=this.refs.chaimgs.children[3].offsetLeft/(this.refs.chaimgs.children[3].offsetWidth-this.refs.chaimgs.offsetWidth)
		this.refs.chaimgs.children[0].style.left=(this.refs.chaimgs.children[0].offsetWidth-this.refs.chaimgs.offsetWidth)*percent+"px"
		this.refs.chaimgs.children[1].style.left=(this.refs.chaimgs.children[1].offsetWidth-this.refs.chaimgs.offsetWidth)*percent+"px"
		this.refs.chaimgs.children[2].style.left=(this.refs.chaimgs.children[2].offsetWidth-this.refs.chaimgs.offsetWidth)*percent+"px"
	}
	componentDidUpdate (){

	}
    fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
        	var bg=[];
        	var show=[];
 			for(var i in data){
 				i<3?bg.push(data[i]):show.push(data[i])
 			}
 			console.log(bg)
 			this.setState({
 				img:bg,
 				show:show
 			})
        })
        .catch((x)=>{
            console.log(x)
        })
    }

	// chamoves(e){
	// 	// var timer=null;
	// 	// clearInterval(timer);
	// 	// let obj=e.currentTarget;
	// 	// let W=obj.offsetWidth/2;
	// 	// let X=e.clientX-GetLandR(obj).L
	// 	// // var ImgW_one=obj.children[0].children[0].offsetWidth-W*2;
	// 	// // var ImgW_two=obj.children[1].children[0].offsetWidth-W*2;
	// 	// // var ImgW_three=obj.children[2].children[0].offsetWidth-W*2;
	// 	// if(W-300>X){

	// 	// 	// timer=setInterval(()=>{
	// 	// 	// 	if(obj.children[3].offsetLeft<=-ImgW_three){
	// 	// 	// 		clearInterval(timer)
	// 	// 	// 		return 
	// 	// 	// 	}
	// 	// 	// 	obj.children[3].style.left=obj.children[3].offsetLeft-4+"px"
	// 	// 	// },100)
	// 	// 	// obj.children[0].style.left=(-ImgW_one)+"px"
	// 	// 	// obj.children[3].style.left=(-ImgW_three)+"px"
	// 	// 	// obj.children[1].style.left=(-ImgW_two)+"px"
	// 	// 	// obj.children[2].style.left=(-ImgW_three)+"px"
	// 	// 	// console.log(obj.children[3].children[0].offsetLeft)
	// 	// 	// console.log(obj.children[3].offsetLeft)
	// 	// }else if(W+300<X){
	// 	// 	// if(obj.children[0].offsetLeft>=0) {
	// 	// 	// 	console.log(1)
	// 	// 	// };
	// 	// 	// obj.children[0].style.left=ImgW_one-W*2+"px"
	// 	// 	// obj.children[1].style.left=ImgW_two-W*2+"px"
	// 	// 	// obj.children[2].style.left=ImgW_three-W*2+"px"
	// 	// 	// obj.children[3].style.left=ImgW_three-W*2+"px"
	// 	// 	this.setState({
	// 	// 		boo:true
	// 	// 	})

	// 	// }else{
	// 	// 	this.setState({
	// 	// 		boo:false
	// 	// 	})
	// 	// 	// obj.children[0].style.left=obj.children[0].offsetLeft+"px"
	// 	// 	// obj.children[1].style.left=obj.children[1].offsetLeft+"px"
	// 	// 	// obj.children[2].style.left=obj.children[2].offsetLeft+"px"
	// 	// 	// obj.children[3].style.left=obj.children[3].offsetLeft+"px"		
	// 	// }
	// }
	// animations (){
	// 	// let parentbox=this.refs.chaimgs
	// 	// // console.log(parentbox.children[3].offsetLeft,parentbox.children[3].offsetWidth-parentbox.offsetWidth)
	// 	// if(parentbox.children[3].offsetLeft>-(parentbox.children[3].offsetWidth-parentbox.offsetWidth)){
	// 	// 	this.setState({
	// 	// 		speed:this.state.speed+1
	// 	// 	})
	// 	// }
	// }
	sb_enter (){
		for(var i=0;i<this.refs.chashow.children.length;i++){
			if(this.refs.chashow.offsetLeft<-800*i && this.refs.chashow.offsetLeft>-800*(i+1)){
				this.refs.chashow.children[i].style.opacity="1"
			}else{
				this.refs.chashow.children[i].style.opacity="0"					
			}
		}
	}
	render (){
		return (
			<div className="chaimgs" ref="chaimgs" >
				{this.state.img.map((v,i) =>{
					return (
						<div className={"chaimg"+i} key={i}>
							<img src={v['img']} />
						</div>
					)
				})}
				<div className="chashow" ref='chashow'>
					{this.state.show.map((v,i)=>{
						return (
							<div key={i} style={{left:800*(i+1)+"px"}}>
								<img src={v['img']} />

							</div>
						)
					})}
				</div>
				<p className="cha_pleft" ref="cha_pleft" > {"<"} </p>
				<p className="cha_pright" ref="cha_pright"> { ">" } </p>
			</div>
		)
	}

}
export default Inside2s0