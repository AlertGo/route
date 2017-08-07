import React from "react"
import { Sb_down , ScrollGo , AddEvent } from '../scroll'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import 'whatwg-fetch'



//小分业1
class Dateils2 extends React.Component{
	constructor ({match}){
		super()
		this.state={
			img:null,
			txt:null

		}
        this.hrefs=match.path;
        this.Nums=0
	}
	componentDidMount (){
		this.fetchFn("http://localhost:8006/img/inside5s0")
	}
    ToUpData (x){
        this.Nums=x;
    }
	fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
 			this.setState({
 				img:data[0]['img'],
 				txt:data[0]['con']
 			})
            
        })
        .catch((x)=>{
            console.log(x)
        })
    }
    ///
    render (){
    	return (
    		<div className="inside5s2_box">
    			<div className="inside5s2_left">
    				{/*左侧*/}
                    <Route exact path={this.hrefs} component={This_details} />
                    {(function (that){
                        let arrs=[]
                        for(var i=0;i<=that.Nums;i++){
                            arrs.push(<Route path={that.hrefs+"/"+(i+1)} component={This_details} key={i} />)
                        }
                        return arrs
                    })(this)}          
                    
                    
    			</div>
    			<div className="inside5s2_right">
    				{/*右侧*/}
                    <p className="inside5s2_right_p">员工文化集锦：</p>
    			     <This_default hrefs={this.hrefs}  ToUpDatas={this.ToUpData.bind(this)}/>
    			</div>

    		</div>
    	)
    }
}
//左侧小组件
class This_default extends React.Component{
    constructor (){
        super();
        this.state={
            data:[],
            index:0
        }
        //当前页
        this.index=0;
        this.pageindex=0;
        //总页
        this.page=null;
        this.hrefs=window.location.pathname;
    }
    componentDidMount (){
        this.fetchFn("http://localhost:8006/img/inside5s2")
    }
    componentWillUpdate (){
        this.props.ToUpDatas(this.state.data.length)
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
    leftck (){
        if(this.state.index>=this.page) return; 
            this.setState({
                index:this.state.index+1
            })
    }
    rightck (){
            if(this.state.index<=0) return; 
            this.setState({
                index:this.state.index-1
            })
    }
    listck (x){
        return ()=>{
            this.setState({
                index:x
            })
        }
    }
    navlistck (ev){
        this.refs.inside2s5_box.style.display="none"
    }
    render (){
        let nodetop=[]
        let nodechild=[]
        this.page=Math.floor(this.state.data.length/10)
        this.state.data.map((v,i)=>{
            if(i%13==0){
                nodechild=[];
                let nodebox=React.createElement("ul",{className:(i/10)==this.state.index?"Opacitys":"",key:i},nodechild)
                nodetop.push(nodebox)
            }
            let nodestr=(
                <Link to={this.props.hrefs+"/"+v['id']} key={i}>
                    <li className="a">
                        <span className="sp_left">{v['date']}</span>
                        <span className="sp_right">{v['title']}</span>
                    </li>
                </Link>
            )
            nodechild.push(nodestr)
        })
        return (
            <div className="inside_5_2_listbox" ref="">
                <div className="inside_5_2_list" >
                    {nodetop}
                </div>
                <div className="inside_5_2_control">
                    <p onClick={this.rightck.bind(this)}>{"\<"}</p>
                    <div>
                        {(function (that){
                            let listarr=[]
                            for(var i=0;i<=that.page;i++){
                                listarr.push(<span className={that.state.index==i?"color":""} onClick={that.listck(i)} key={i}>{i+1}</span>)
                            }
                            return listarr
                        })(this)}
                    </div>
                    <p onClick={this.leftck.bind(this)}>{"\>"}</p>
                </div>
                
            </div>
        )
    }
    
}
//右侧小组件
class This_details extends React.Component{
    constructor ({match}){
        super()
        this.state={
           datas:"",
           img:"",
           title:null
        }
        this.hrefs=1;
        this.hrefs2=match


    }
    componentDidMount (){
        let arr=this.hrefs2.path.split("/")
        let index=!isNaN(arr[arr.length-1])?arr[arr.length-1]:1
        this.fetchFn("http://localhost:8006/img/inside5s2s",index)
    }
     componentDidUpdate (){
        if(this.refs.Staff_mien_box.offsetHeight>=this.refs.Staff_mien_box.children[0].offsetHeight){
            this.refs.Ball_inside5s2.parentNode.style.display="none"
        }
        this.refs.Ball_inside5s2.onmousedown=Sb_down(this.refs.Staff_mien_box,this.refs.Staff_mien_box.children[0])       
        this.refs.Staff_mien.onmousewheel=ScrollGo(this.refs.Staff_mien_box,this.refs.Staff_mien_box.children[0],this.refs.Ball_inside5s2.parentNode,this.refs.Ball_inside5s2)
        this.refs.Staff_mien.DOMMouseScroll=ScrollGo(this.refs.Staff_mien_box,this.refs.Staff_mien_box.children[0],this.refs.Ball_inside5s2.parentNode,this.refs.Ball_inside5s2)
    }
    fetchFn (url,n=1){
        fetch(url,{
            method:"POST",
            headers: { 
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
            },
            body:`id=${n}`
        })
        .then((data)=>data.json())
        .then((data)=>{
            this.setState({
                datas:data[0]['cons'],
                title:data[0]['title']
            })

        })
        .catch((x)=>{
            console.log(x)
        })
    }
    render (){
        return (
            <div id="Staff_mien" ref="Staff_mien">
                <h2>{this.state.title}</h2>
                <div className="Staff_mien_box" ref="Staff_mien_box">
                    <div className="Staff_mien_con" dangerouslySetInnerHTML={{__html: this.state.datas}} />
                </div>
                 <div id="Runway_inside5s2">
                    <div id="Ball_inside5s2" ref="Ball_inside5s2" ></div>
                </div>
            </div>
        )
    }
}

export default Dateils2
