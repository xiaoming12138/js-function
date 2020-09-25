function mypromise(fn){
  this.callbackList = []
  this.reslove = (value)=>{
    if(!this.callbackList.length) return
    for(let i=0;i<this.callbackList.length;i++){
      this.callbackList[i](value)
    }
  }
  fn(this.reslove)
}
mypromise.prototype.then = function (callback) {
  this.callbackList.push(callback)
}

new mypromise((reslove)=>{
  setTimeout(()=>{
    reslove('success');
  },500)
}).then(res=>{
  console.log(res);
})

