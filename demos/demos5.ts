// 类型断言
function getLength(str:string|number):number{
  if((str as string).length){
    // if((<string>str).length){
    return (<string>str).length
  }else{
    return str.toString().length
  }
}

console.log(getLength('aa'))
console.log(getLength(123))

type Name=string;
type NameResolve=()=>string
type NameOrResolve=Name | NameResolve
function getName(n:NameOrResolve):Name{
  if(typeof n === 'string'){
    return n
  }else{
    return n()
  }
}
