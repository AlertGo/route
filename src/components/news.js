import React from 'react'
import {
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom'
// 左侧通用组件
import Montbox from './commont/comleft'
import "../Css/commont.css"
import "../Css/news.css"

import 'whatwg-fetch'
//滚轮通用方法
import { Sb_down , ScrollGo , AddEvent , RemoveEvent } from './scroll'

class Inside extends React.Component{
	constructor ({match}){
		super()
		this.state={
		
		}
	}

    componentDidMount (){
		this.fetchFns("http://localhost:8006/img/navlists")

    }	
    componentWillUpdate (){
 
    }
    componentDidUpdate (){

    }
	render (){
		return (
			<div id="Montbox">
				<Montbox />{/*左侧组件*/}
				<div id="right_box">{/*右侧元素*/}
					<div className="right_box_header">
						<div id="header_left">
							<p className="insidep">News</p>
							<p>新闻动态</p>
						</div>
					</div>
					{/*～～～～～～～～～上下分解线～～～～～～～～～～～～～*/}
					{/*头部banner start*/}
					<This_Merry />
					{/*头部banner end*/}
					{/*～～～～～～～～～上下分解线～～～～～～～～～～～～～*/}
					{/*内容 start*/}
					{/*内容 end*/}

				</div>
			</div>
		)
	}
    fetchFns (url){
    	var datas=null;
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{      
        	datas=data;

        })
        .catch((x)=>{
            console.log(x)
        })
    }
}
class This_Merry extends React.Component{
	constructor (){
		super();
		this.state={
			data:[1,2,3,4],
			index:0
		}

	}
	componentDidMount (){

	}
	render (){
		return (
			<div className="News_header">
				<div className="News_img">
					{this.state.data.map((v,i)=>{
						return (
							<img src={v} key={i} className={this.state.index==i?"Opacitys":""}/>
						)
					})}
				</div>
				<p className="News_btn_left" onClick={}></p>
				<p className="News_btn_right"></p>

			</div>

		)
	}
	fetchFns (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{      
   
        })
        .catch((x)=>{
            console.log(x)
        })
    }
}
  

export default Inside;



































