const bool:Boolean=false
const num:number=0xabcd;
console.log(bool)
console.log(num)

function alertName(name:string):any{
  console.log(name)
  return 123
}
alertName('zhang guang sen')

let unusable:void=undefined;
console.log('unusable',unusable);

// 类型推断
function getStr(something:string|number):string{
  return something.toString()
}

console.log(getStr('张'));
console.log(getStr(123));

enum Days{
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Days['1'])
console.log(Days['Tue'])

// 元组
interface Person{
  readonly id:number,
  uname:string,
  age:number,
  // 动态属性
  [proName:string]:any
}
const zhang:Person={
  id:1,
  uname:'张',
  age:31
}
console.log('zhang',zhang)
// zhang['id']=3
// console.log('zhang',zhang)
zhang.xx='a'
console.log('zhang',zhang)
// type