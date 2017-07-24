import React from 'react'
import {
  Link
} from 'react-router-dom'
/**
  导入css与请求	
*/
import '../Css/home.css'
/**
  导入css与请求end	
*/
class Home extends React.Component{
	constructor (){
		super()
		this.state={
			nav:["走进八马1","会员专区","营销网络","新闻动态","八马产品","招商加盟"],
			navE:["inside BAMA","inside BAMA","inside BAMA","inside BAMA","inside BAMA","inside BAMA"],
			navlist:[{con:[1,2,3,4,5,6,7,8,9,10]},{con:[1,2,3,4,5,6]},{},{con:[1]},{con:[1,2,3,4]},{con:[1,2,3,4,5,6]}],
			links:["inside","vip","Marketing","news","product","join"],
			colors:["green","blue","#00CACA","red","#5B00AE"],
			images:[],
			index:0,
			listdiv:null,
			title:null,
			side:null,
			sparr:null,
			sparr2:null,
			divarr:null,
			speed:0
		}
	}
	render (){
		return (
			<div id="HomeCon" >
				{/* logo */}
				<div id="home_logo">
					<img src="../Images/LOGO.png" alt="八马茶业" />
				</div>	
				{/* nav */}

				<div id="home_nav">
					<div id="home_navbg" ref={"imagescon"}>
						{this.state.images.map((v,i) => {
							return (
								<img src={v} key={i} />
							)
						})}
					</div>
					<div id="home_bg">
						<img src="../Images/shui.png" />
					</div>
					<div id="navimgs_con">
						<div id="navimgs">

						</div>
					</div>
					<ul id="navlists">
						{this.state.nav.map((v,i) => {
							if(i!=2){
								return (
									<li className={"defaultli"} key={i} ref={"myli"+i} onMouseLeave={this.mouseout(i)}>
										{i==0?(<div className="onhove"  ref={"p"+i} ><p className={"homep"} ref={"fonttitle"+i}>{this.state.navE[i]}</p>
											<Link to={"/"+this.state.links[i]} onMouseOver={this.mouseover(i)}>{v}</Link>
											<p className="onhovep" ref={"side"+i}></p>
										</div>):(<div className="onhove" ref={"p"+i}>
											<Link to={"/"+this.state.links[i]} onMouseOver={this.mouseover(i)}>{v}</Link>
											<p className={"homep"} ref={"fonttitle"+i}>{this.state.navE[i]}</p>
											<p className="onhovep" ref={"side"+i}></p>
										</div>)}
										<div className={"homed lists"+i} ref={"newdiv"+i} onMouseMove={this.Scroll}>
											<span className={"home_leftbor"+i} ref={"sprefs"+i}>
												{/* 边框 */}
											</span>
											<div ref={"divrefs"+i}>
												{this.state.navlist[i]["con"].map((v,s) =>{
													return (
														<p key={"p"+s}><Link to={"/"+this.state.links[i]+"/"+this.state.links[i]+s}>{v}</Link></p>
													)
												})}
											</div>
											<span className={"home_leftbor"+i} ref={"rsprefs"+i}>
												{/* 边框 */}
											</span>
										</div>
									</li>
								)
							}else if(i==2){
								return (
									<li key={i} className="defaultli" ref={"myli"+i} onMouseLeave={this.mouseout(i)}><Link to={"/"+this.state.links[i]} onMouseOver={this.mouseover(i)}>{v}</Link></li>
								)
							}
						})}
					
					</ul>
				</div>
			</div>
		)	
	}
	Scroll(event){
		let Y=event.clientY;
		let H=event.currentTarget.offsetHeight;
		let findH=event.currentTarget.children[1].offsetHeight;
		let To=H-findH;
		let timer=null
		let s=(obj)=>{
			var t=0;
			while(obj){
				t+=obj.offsetTop;
				obj=obj.offsetParent;
			}
			return t
		}
		if(To<0){
			if(Y+25<(H/2+s(event.currentTarget))){
				event.currentTarget.children[1].style.top=0+"px"
			}else if(Y-25>(H/2+s(event.currentTarget))){
				event.currentTarget.children[1].style.top=To+"px"
			}
		}
		return false
	}
	//通用方法
	ShareGetTop(obj){
		// var t=0;
		// while(obj){
		// 	t+=obj.offsetTop;
		// 	obj=obj.offsetParend;
		// }
		// return t
	}
	mouseover(x){
		return ()=>{
			this.refs.imagescon.children[x].classList.add("hovesty")
			this.refs.imagescon.children[x].style.animation="autoAnima"+(x%2)+" 4s linear infinite"
    		this.refs.imagescon.children[x].style.animationDirection="alternate";
    		this.refs["myli"+x].style.animationPlayState="paused"
    		if(x!=2){
    			x<2?this.refs[this.state.listdiv[x]].classList.add("showba"):this.refs[this.state.listdiv[x-1]].classList.add("showba");
				x<2?this.refs[this.state.title[x]].classList.add("homepsty"):this.refs[this.state.title[x-1]].classList.add("homepsty");
				x<2?this.refs[this.state.side[x]].classList.add("onhovepsty"):this.refs[this.state.side[x-1]].classList.add("onhovepsty");

    		}	
    		this.setState({
    			index:x
    		})
		}
		
	}
	mouseout(x){
		return ()=>{
			this.refs.imagescon.children[this.state.index].classList.remove("hovesty");
			this.refs["myli"+x].style.animationPlayState="running"
			if(x!=2){
				x<2?this.refs[this.state.listdiv[x]].classList.remove("showba"):this.refs[this.state.listdiv[x-1]].classList.remove("showba");
				x<2?this.refs[this.state.title[x]].classList.remove("homepsty"):this.refs[this.state.title[x-1]].classList.remove("homepsty");	
				x<2?this.refs[this.state.side[x]].classList.remove("onhovepsty"):this.refs[this.state.side[x-1]].classList.remove("onhovepsty");
			}		 
		} 
	}
    TransLateTo(num,x,s){
    	num++;
    	s=(num==0)?0:(s+=80)
    	if (num>5) return ;
  		setTimeout( () => {
    		this.refs[x[num]].classList.add("defaultli"+num);
    		this.refs[x[num]].style.animation="autoAnima 1.5s 1.3s linear infinite";
    		this.refs[x[num]].style.animationDirection="alternate";
			this.TransLateTo(num,x,s);
    	},s)
    }
    AutoAnima(obj){
    	let index=0;	
    	//暂无用了
    }
    //获取数据
    fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
           console.log(this)
           this.setState({
           	nav:eval("("+data[0]["nav"]+")"),
           	navE:eval("("+data[0]["navE"]+")"),
      		images:eval("("+data[0]["img"]+")")
           })
        })
        .catch((x)=>{
            console.log(x)
        })
    }
    fetchFns (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
        	console.log(data)
           for(var i in data){
           		data[i]["con"]=eval("("+data[i]["con"]+")")
           		
           }
           console.log(data)
           this.setState({
           	   navlist:data
           })
        })
        .catch((x)=>{
            console.log(x)
        })
    }
    DidMontafert(sparr,sparr2,parr,divarr){
	//对获取的dom样式处理  并排好队形
		for(let i=0;i<sparr.length;i++){
			this.refs[sparr[i]].style.borderRight="none";
			this.refs[sparr[i]].style.borderColor=this.state.colors[i];
			this.refs[sparr[i]].style.height=this.refs[divarr[i]].offsetHeight+"px";
			this.refs[sparr2[i]].style.borderLeft="none";
			this.refs[sparr2[i]].style.borderColor=this.state.colors[i];
			this.refs[sparr2[i]].style.height=this.refs[divarr[i]].offsetHeight+"px";
			if(this.refs[sparr[i]].offsetHeight>100){
				this.refs[sparr[i]].style.height="100px";
				this.refs[sparr2[i]].style.height="100px";
			}
		}    	
    }
	componentDidMount (){
		this.fetchFn("http://localhost:8006/img/text")
		this.fetchFns("http://localhost:8006/img/navlists")
		const My_lis=[]
		const divarr=[];
		const sparr=[];
		const sparr2=[];
		const parr=[];
		//悬浮事件div
		const onhoved=[];
		//悬浮事件div
		const Myobj={};
		const title=[];
		const side=[];
		//平滑导航个数
		let ThisNum=-1;
		//平滑导航时间
		let ThisTime=0;
		//获取dom 分配name
		for(let i in this.refs){
			if(i.substr(0,2)=="sp"){
				sparr.push(i)
			}else if(i.substr(0,1)=="d"){
				divarr.push(i)
			}else if(i.substr(0,1)=="p"){
				parr.push(i)
			}else if(i.substr(0,2)=="ne"){
				onhoved.push(i)
			}else if(i.substr(0,2)=="my"){
				My_lis.push(i)
			}else if(i.substr(0,2)=="rs"){
				sparr2.push(i)
			}else if(i.substr(0,2)=="fo"){
				title.push(i)
			}else if(i.substr(0,2)=="si"){
				side.push(i)
			}
		}
		//设置全局对象
		Myobj.listdiv=onhoved;
		Myobj.title=title;
		Myobj.side=side
		Myobj.sparr=sparr
		Myobj.sparr2=sparr2
		Myobj.divarr=divarr


		this.setState(Myobj);
		console.log(this.state)
		//对获取的dom样式处理  并排好队形
		for(let i=0;i<sparr.length;i++){
			this.refs[parr[i]].style.color=this.state.colors[i];
			this.refs[parr[i]].children[2].style.backgroundColor=this.state.colors[i];
			this.refs[sparr[i]].style.borderRight="none";
			this.refs[sparr[i]].style.borderColor=this.state.colors[i];
			this.refs[sparr[i]].style.height=this.refs[divarr[i]].offsetHeight+"px";
			this.refs[sparr2[i]].style.borderLeft="none";
			this.refs[sparr2[i]].style.borderColor=this.state.colors[i];
			this.refs[sparr2[i]].style.height=this.refs[divarr[i]].offsetHeight+"px";
			if(this.refs[sparr[i]].offsetHeight>100){
				this.refs[sparr[i]].style.height="100px";
				this.refs[sparr2[i]].style.height="100px";
			}
		}

		//事件处理
		this.TransLateTo(ThisNum,My_lis,ThisTime)
		this.AutoAnima(parr)
		// this.DidMontafert(sparr,parr,sparr2,divarr)
	}
	componentDidUpdate(){
		//对获取的dom样式处理  并排好队形
		for(let i=0;i<this.state.sparr.length;i++){
			this.refs[this.state.sparr[i]].style.height=this.refs[this.state.divarr[i]].offsetHeight+"px";
			this.refs[this.state.sparr2[i]].style.height=this.refs[this.state.divarr[i]].offsetHeight+"px";
		}		
	}

}



export default Home;


















