import 'whatwg-fetch'
	//获取数据
	const fetchFn = (url) => {
        fetch(url)
            .then((res) => { console.log(res.status);return res.json() })
            .then((data) => { console.log(data)})
            .catch((e) => { console.log(e.message) })
    }
   const abc =(s)=>{
    	alert(s)
    }
 console.log(1)
