Promise.myall = function(arr){
    let result = []
    let count = 0
    return new Promise ((resolve,reject)=>{
        for(let i = 0;i<arr.length;i++){
            Promise.resolve(arr[i]).then((res)=>{
                count++
                result[i] = res
                if(count >= arr.length){
                    resolve(result)
                }
            },(err)=>{
                reject(err)
            })
        }
    })
}
var p1 = new Promise((resolve)=>{setTimeout(()=>{return resolve(3);},1000)});
var p2 =new Promise((resolve,reject)=>{setTimeout(()=>{return reject(2);},2000)});
var p3 =Promise.resolve(2);
var p = Promise.myall([p1,p2,p3]);
p.then(e=>{console.log(e)});