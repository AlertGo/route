import 'whatwg-fetch'
//获取数据
const fetchFns=(url)=>{
    let datas=null
    return (fetch(url)
          .then((data)=>data.text())
          .then((data)=>{
            datas=data

            return eval("("+data+")")
        })
        .catch((x)=>{
            console.log(x)
    }))
}

function a(){
    alert(34234)
}
export default fetchFns