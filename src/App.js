import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';

/**
导入分页start
  */
import Home from './components/Home'
import Inside from './components/inside'
import Vip from './components/vip'
import Marketing from './components/Marketing'
import News from './components/news'
import Product from './components/product'
import Join from './components/join'
/**
  导入end
*/
// console.log(document.getElementById("root"))

/**
  创建顶级组建
*/
class App extends React.Component{
    render (){
        return (
          <Router>
              {/* 包裹 */}
              <div id="My_Cons">
                  {/*一级子组件引入 */}
                  <Route exact path="/" component={Home} />
                  <Route path="/inside" component={Inside} />
                  <Route path="/vip" component={Vip} />
                  <Route path="/marketing" component={Marketing} />
                  <Route path="/News" component={News} />
                  <Route path="/product" component={Product} />
                  <Route path="/Join" component={Join} />
              </div>
          </Router>
        )
    }

}



export default App