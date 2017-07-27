import React from "react"
import {
  Link,
  NavLink
} from 'react-router-dom'
import "../../Css/commont.css"

const left_box= () => (
	<div id="left_box">
		<div id="copyright"></div>
		<div id="leftnavs">
			<div id="leftnavs_top">
				<div>
					<img src="../images/logo.jpg" title="八马茶业" alt="123" />
				</div>
				<ul>
					<li><Link to="/">首页</Link></li>
					<li><NavLink to="/inside" activeStyle={{
    					fontWeight: 'bold',
    					color: 'red'
  					}}>走进八马</NavLink></li>
  					<li><NavLink to="/product" activeStyle={{
    					fontWeight: 'bold',
    					color: 'red'
  					}}>八马产品</NavLink></li>
 					<li><NavLink to="/news" activeStyle={{
    					fontWeight: 'bold',
    					color: 'red'
  					}}>新闻动态</NavLink></li>
					<li><NavLink to="/join" activeStyle={{
    					fontWeight: 'bold',
    					color: 'red'
  					}}>招商加盟</NavLink></li>
					<li><NavLink to="/vip" activeStyle={{
    					fontWeight: 'bold',
    					color: 'red'
  					}}>会员专区</NavLink></li>  					  					 					
				</ul>
				<p>投资者关系</p>
			</div>
			<div id="leftnavsbtm">
				<p><Link to="/">茶园到茶杯</Link></p>
				<p><Link to="/">八马茶学堂</Link></p>
				<p><Link to="/">网上商城</Link></p>
				<p><Link to="/">18度</Link></p>
				<dl>
					<dt><img src="../images/erwei.jpg" /></dt>
					<dd>八马官方微信</dd>
				</dl>
			</div>
		</div>
	</div>

)

export default left_box