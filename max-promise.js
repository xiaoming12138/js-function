function max_promise(urls,max,callback) {
  let count = 0
  let _urls = [...urls]
  function req() {
    count++
    new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let url = _urls.shift()
        resolve(url)
      },1000)
    }).then(res=>{
      console.log(res||'0');
    }).finally(()=>{
      count--
      if(_urls.length){
        req()
      }else if(count === 0){
        callback && callback()
      }
    })
    count<max && req()
  }
  req()
}
let __urls = [1,2,3,4,5,6]
let cb = function () {
  console.log('done')
}
max_promise(__urls,2,cb)
