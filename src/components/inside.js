import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

const Inside = ({ match }) =>(
	<div>
		我是inside页
		{console.log(match)}
		<aaa/>
	</div>
)
const aaa= ({match}) =>(
	<div>
		{console.log(match)}
		
	</div>
)
export default Inside;