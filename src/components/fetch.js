import 'whatwg-fetch'
//获取数据
const fetchFns=(url)=>{
    let datas=null;
    fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
            // datas=dada
            // console.log(data)
         datas=data
        })
        .catch((x)=>{
            console.log(x)
        })
    return datas
}
function a(){
    alert(34234)
}
export default fetchFns