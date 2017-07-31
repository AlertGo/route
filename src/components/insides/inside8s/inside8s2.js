import React from 'react'

// 导入轮播start
import MerryGo from '../../Merry-go-round1'

//end
export default class Inside8s1 extends React.Component{
    constructor (){
        super();
        this.state={
            data:[],
            bg:[],
            //当前页
            index:0
        }
        this.index=0;
        this.bool=true;
    }
    componentDidMount (){
        this.fetchFn("http://localhost:8006/img/inside8s2")
    }
    componentDidUpdate (){
        // this.refs.ul.style.width=this.refs.ul.children.length*260+"px"
    }
    fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
            console.log(data)
 
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
            <div className="inside5s1">
                <div className="inside5s1_top">
                    <MerryGo autoshow={this.state.data} />
                </div>
            </div>
        )
    }

}
