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
    console.log(arrTemp);
  }

}
getRequest(stringTemp);



var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;


// \b 单词边界
var reg1 = /\bis book\b/;
var reg2 = /[a-z|1-9]/g;
var reg3 = /\b/;
console.log(reg1.test('is book'));
//var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
var reg =/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{6,18}$/;
var reg=/^(?![^a-zA-Z]+$)(?!\D+$)/




















console.log('------------底部-----------');
