function mycurry(fn) {
  let args = [].slice.call(arguments,1)
  return cur = function () {
    if(arguments.length === 0){                     //  判断调用的参数个数如果等于0，就执行原来的函数
      return fn.apply(null,args)
    }else{                                          //  否则就把参数存起来再返回一个函数继续等待调用
      args = args.concat([].slice.call(arguments))
      return cur
    }
  }
}

function sum(a,b,c,d) {
  return a+b+c+d
}
let res = mycurry(sum, 3)(5, 6)(7)()
console.log(res);
