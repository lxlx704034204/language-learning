var x = 1;
var y = z = 3;

function add(x) {
  return x = x + 1;
}

z = add(x);
//console.log(z);

function add(x) {
  return x = x + 3;
}

z = add(x);
//console.log(z);

//console.log(typeof(undefined));
//console.log(typeof(NaN));
//console.log(typeof(null));
var str = '123abc';
str++;
//console.log(str);
//console.log(typeof(str));
//console.log('------------1-----------');
for (i = 0; i++ < 3;) {
  setTimeout(function() {
    //return (console.log(i));
  }, 0);
}
//console.log(i);
//console.log('------------2-----------');
for (j = 0; j++ < 3;) {
  //console.log(j);
}
//console.log('------------3-----------');

var arrTemp = [1, 2, 3, 1, 2, 3, 4, 4, 54, 45, 45, 45, 65, 76]

function deleteRep(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
//console.log(deleteRep(arrTemp));

var stringTemp = 'wwww.baidu.com?a=1&b=2&c=3';

function getRequest(url) {
  var request = null;
  if(url.indexOf('?') == -1){
    return request;
  } else {
    var str = url.substring(url.indexOf('?')+1);
    var arr = str.split('&');
    var arrTemp = {};
    for(var i=0;i<arr.length;i++){
      var num = arr[i].indexOf('=');
      if(num > 0){
        arrTemp[arr[i].substring(0,num)] = arr[i].substring(num+1);
      }
    }
    //console.log(arrTemp);
  }

}
getRequest(stringTemp);



var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;


//两种模糊匹配
var reg1 = /hello/g;
//console.log(reg1.test('hello'));

//1.1 横向模糊匹配
//一个正则可匹配的字符串的长度不是固定的，可以是多种情况的。其实现的方式是使用量词。譬如{m,n}，表示连续出现最少m次，最多n次。
var regex1 = /ab{2,3}c/g;
var string1 = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
//console.log(string1.match(regex1)); //[ 'abbc', 'abbbc' ]

// 1.2 纵向模糊匹配
// 纵向模糊指的是，一个正则匹配的字符串，具体到某一位字符时，它可以不是某个确定的字符，可以有多种可能。
var regex2 = /a[123]b/g;
var string2 = "a0b a1b a2b a3b a4b";
//console.log( string2.match(regex2) );

//2. 字符组
//需要强调的是，虽叫字符组（字符类），但只是其中一个字符。例如[abc]，表示匹配一个字符，它可以是“a”、“b”、“c”之一。
// 2.1 范围表示法
// 2.2 排除字符组
// 2.3 常见的简写形式 \d \D \w \W

var regex3 = /\d{2,5}/g;
var regex3_1 = /\d{4}/g;
var string3 = "123 1233 12345 123456";
//console.log( string3.match(regex3) );
//console.log(string3.match(regex3_1))
//3. 量词
//量词也称重复。掌握{m,n}的准确含义后，只需要记住一些简写形式。  贪婪匹配和惰性匹配

var regex3_1 = /\d{3}|123/g;
var string3 = "123 1233 12345 123456";
//console.log( string3.match(regex3) );
//console.log(string3.match(regex3_1))

//3.2 贪婪匹配和惰性匹配 多选分支 也就是说，分支结构也是惰性的，即当前面的匹配上了，后面的就不再尝试了。

var regex = /good|goodbye/g;
var string = "goodbye";
//console.log( string.match(regex) );

// 匹配颜色
var regColor = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g // [ '#fff', '#fff111', '#dfd111' ]
var regColor = /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/g // [ '#fff', '#fff', '#dfd' ]
var stringColor = '#fff #fff111 #dfd111';
//console.log(stringColor.match(regColor));
var regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
//console.log( regex.test("23:59") );

var regex = /^(hello)$/;
//console.log( regex.test("hello1") );


var regex = /^([0-9]{4}-(0[0-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))$/g;
//console.log(regex.test('3014-09-06'));

var result = "31234567893434343".replace(/^[3]/g, '#')
var result = "helloa a a".replace(/(?!l)/g, '#');
//console.log(result);

var regx = /([1-4]{3,4})/g;
var string = '123 12 1234';
//console.log(string.match(regx));

var regx = /(?=[1-2])(\d{3})/g;
var reg = /[1-2](\d{2})/g;
var string = '339 123 234';
//console.log(string.match(reg));

var reg = /(?=.*[0-9])(?=.*[a-z])(^[0-9A-Za-z]{3}$)/;
var reg = /(?=.*[0-9])/;
var reg = /(?=.*[0-9])(?=.*[a-z])/;
//console.log(reg.test('a'));

var regex = /(\d{4})-(\d{2})-(\d{2})/g;
var string = "2017-03-34";
//console.log( string.match(regex) );

var reg = /([a-z])+/;
var string = '123ax';
//console.log(string.match(reg));

// 出去标签
var gg = /<[^>]+>/g;
var string = '<div>234<234234> </div>';
//console.log(string.replace(gg,''));

var string = "12345";
var regex = /(\d{1,3})(\d{1,3})/;
console.log( string.match(regex) );

var reg = /^[0-9]/;

/ab?(c|de*)+|fg/

var str = "Visit W3School";
var patt = new RegExp("W3School","g");
var result = patt.exec(str)
var string = '123\n456\n345\n124';
var reg = /\b/g;
var reg1 = /$/g;
var result = string.replace(reg,'#').replace(reg1,'*');
//console.log(result);
var string = "12345678"
var result = string.replace(/(?!2)(?=(\d{1})+$)/g, ',');
//console.log(result);

var string = '123123';
var result = string.replace(/(.*[1-9])$/g, ',');
console.log(result);

var reg = /(?!^[0-9]{6,12}$)^[0-9A-Za-z]{6,12}$/;

console.log(reg.test('12345A'));
















































console.log('------------底部-----------');
