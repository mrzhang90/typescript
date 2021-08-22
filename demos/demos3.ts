// 1.不要混淆 ES6和 TS 中的=> 
// :(x:number,y:number)=>number 冒号后面的是类型，这里的箭头函数是 ts 的
const myNum:(x:number,y:number)=>number =function(x:number,y:number):number{
  return x+y
}

// 函数的默认参数
function buildName(firstName:string,lastName:string='cat'){
  return firstName+lastName
}

// 3.剩余参数
function push(array:any[],...items:any[]){
  items.forEach((item)=>{
    array.push(item)
  })
}
let a=[4]
push(a,1,2,3)
console.log('a',a)

// 4。可选参数 必须放在后面
function buildNmae2(lastNmae:string,firstName?:string){
  if(firstName){
    return firstName+' '+lastNmae
  }else{
    return lastNmae
  }
}

const tom1=buildNmae2('aa')
const tom2=buildNmae2('aa','bb')
console.log(`tom1:${tom1}，tom2:${tom2}`)