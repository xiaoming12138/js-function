
function fn1(ctx,next){
    console.log('fn1 start')
    next()
    console.log('fn1 end')
}
function fn2(ctx,next){
    console.log('fn2 start')
    next()
    console.log('fn2 end')
}
function fn3(ctx,next){
    console.log('fn3 start')
    next()
    console.log('fn3 end')
}

function compose(arr){
    let index = 0
    let len = arr.length
    return function (ctx){
        function next(){
            index++
            if(index>=len) return
            arr[index](ctx,next)
        }
        arr[index](ctx,next)
    }
}
compose([fn1,fn2,fn3])({id:2})