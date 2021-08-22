// 抽象类
// 抽象类必须被继承的子类实现
abstract class Animal{
  abstract makeSound():void
  move():void{
    console.log('动物移动')
  }
}

class Dog extends Animal{
  #region:string; 
  private uname:string='旺财'
  constructor(){
    super()
    this.#region='测试私有数据'
  }
  makeSound(): void {
    console.log('汪汪汪')
  }
}

const wang:Dog=new Dog()
// wang.makeSound()
// wang.move()

// console.log(wang.uname);//属性“uname”为私有属性，只能在类“Dog”中访问
console.log((wang as any).uname);
console.log((wang as any).region);

// 类型数据
let animals:Animal[]=[wang]
animals.push(wang)
console.log('animals',animals)