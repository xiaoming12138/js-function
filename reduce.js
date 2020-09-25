Array.prototype.myreduce = function (cb,initvalue) {
  if(!Array.isArray(this)){
    return []
  }
  let init = initvalue?initvalue:null
  let value = initvalue?initvalue:this[0]
  for(let i = init?0:1;i<this.length;i++){
    let current = this[i]                   //  保存当前值
    value = cb(value,current,i,this)        //  调用回调函数并把return的结果保存为上一个值
  }
  return value                              //  返回上一个值，也就是最终运算的结果
}

let arr = [1,2,3,4]
let res = arr.myreduce((pre,current,index,own)=>{
  return pre+current
},5)  //调用
console.log(res); // 1+2+3+4+5 的和 15
