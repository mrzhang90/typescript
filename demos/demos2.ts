// 已有数组
let arr:number[]=[1,2,3]
let arr2:Array<number>=new Array(4)
console.log('arr',arr)
console.log('arr2',arr2.length)

// 自定义数组类型
interface NumberArray{
  [index:number]:number
}
let arr3:NumberArray = [1,2,3]
console.log('arr3,',arr3)

// 类数组
function sum(a:number,b:number,c:number){
  // ts内置的 arguments 类型
  let args:IArguments=arguments;
  return args
}
console.log(sum(1,2,3))

// 元组
let arrAny:any[] = [1,'测试',2]//any 类型的数组
console.group('arrAny',arrAny)
let arr4:[number,string]=[1,"测试"] //类型固定
console.group('arr4',arr4)

// 区别
function useFetch(){
  const response:string="测试"
  const age:number=30;
  // return [response,age] as const
  return tuplify(response,age)
}
function tuplify<T extends unknown[]>(...elements:T):T{
  return elements;
}
// 解构
const [response]=useFetch()
console.log('response',response)