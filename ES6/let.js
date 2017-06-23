for(var i = 0;i<10;i++){
  console.log(i);
}
console.log('---------------------------');
console.log(i);

console.log('---------------------------');
for(let j = 0;j<10;j++){
  console.log(j);
}
console.log('---------------------------');
// 会报错
//console.log(j);


//2017-06-23 13:46:02
// 不存在变量提升
// 为了纠正这种现象，let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

console.log(now20170623134704);
var now20170623134704 = 1;

// 报错
// console.log(now20170623134705);
let now20170623134705 = 1;

// ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。


// 上面代码中，在let命令声明变量tmp之前，都属于变量tmp的“死区”。
if (true) {
  // 会报错
  //tmp = 'abc'; // ReferenceError
  //console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}























































































//-------------------------------
