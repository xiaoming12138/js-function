/*
* @param1 obj 需要深层解析的对象
* @param2 path 需要深层解析对象对应的路径数组或者是以.分隔的字符串
* @param3 defualtvalue 一但没有解析到对应的值或者对应的值为null就返回这个默认值
*
* */
function obj_get(obj,path,defualtvalue) {
  let _path = path
  if(!Array.isArray(_path)){
    _path = _path.split('.')
  }
  return _path.reduce((o,k)=>{
    return (o||{})[k]
  },obj) || defualtvalue
}

let _obj = {
  a:{
    b:{
      c:{
        d{
          key:'hello'
        }
      },
      c1:{
        d1{
          key:'htllo-haha'
        }
      },
    }
  }
}
let pathList = ['a','b','c','d']

let res = obj_get(obj,pathList,'我是默认值')
console.log(res); // {key:'kello'}
