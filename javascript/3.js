var person = {
  name: "liming",
  age: 13,
  say: function() {
    console.log('123');
  }
}
Object.defineProperty(person, 'age', {
  writable: false,
  value: 29
})
person.age = 23;
console.log(person.age);
person.say();

// 创建对象

//工厂模式  无法知道一个对象的类型

function createObj(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    console.log(this.name);
  }

  return o;
}

//var person1 = createObj('liming', 23, 'web');
//console.log(person1.sayName());

// 构造函数模式
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function() {
//     console.log(this.name);
//   };
// }
//
// var person1 = new Person('liming', 23, 'web');
// console.log(person1.sayName());


// 原型模式
function PersonPt() {

};

PersonPt.prototype.name = 'liming';
PersonPt.prototype.age = '23';
PersonPt.prototype.job = 'web';
PersonPt.prototype.sayName = function() {
  console.log(this.name);
};

function PersonPt2() {

}

PersonPt2.prototype = {
  construct: PersonPt2,
  age: 12,
  name: 'liming',
  job: 'web',
  sayName: function() {
    console.log(this.name);
  }
}

// 组合使用构造函数模式和原型模式

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ["Shelby", "Court"];
}
Person.prototype = {
  constructor: Person,
  sayName: function() {
    alert(this.name);
  }
}

var adad = new Person('ming',10,'web');


console.log(Object.getPrototypeOf(adad));









//-------------------------------------//
