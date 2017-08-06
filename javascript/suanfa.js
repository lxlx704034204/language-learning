// 冒泡排序
// 比较相邻的元素，如果前一个比后一个大，就把它们两个调换位置。
// 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
// 针对所有的元素重复以上的步骤，除了最后一个。
// 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

var arr1 = [10, 4, 2, 6, 7, 9, 5, 90, 34];

function changeArr(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
var ddd = 0;
for (var i = 0; i < arr1.length; i++) {
  for (j = 0; j < arr1.length - i; j++) {
    //console.log(i,j);
    if (arr1[j] < arr1[j + 1]) {
      changeArr(arr1, j, j + 1);
    }
  }
}

//console.log(arr1);
//console.log(ddd);



// 选择排序
// 选择排序也是一种简单直观的排序算法。它的工作原理很容易理解：初始时在序列中找到最小（大）元素，放到序列的起始位置作为已排序序列；然后，再从剩余未排序元素中继续寻找最小（大）元素，放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。
//
// 　　注意选择排序与冒泡排序的区别：冒泡排序通过依次交换相邻两个顺序不合法的元素位置，从而将当前最小（大）元素放到合适的位置；而选择排序每遍历一次都记住了当前最小（大）元素的位置，最后仅需一次交换操作即可将其放到合适的位置。

var arr2 = [10, 4, 2, 6, 7, 9, 5, 90, 34];
// var arr2 = [3,4,5,3,8,90];
var length2 = arr2.length;
for (var i = 0; i < length2; i++) {
  var main = i;
  for (var j = i + 1; j < length2; j++) {
    if (arr2[j] > arr2[main]) {
      main = j;
    }
  }
  if (main != i) {
    changeArr(arr2, main, i);
  }
  //console.log(i);
  //console.log(arr2);
}

//console.log(arr2);


// 插入排序

var arr3 = [10, 4, 2, 6, 7, 9, 5, 90, 34];
var length3 = arr3.length;

for (var i = 0; i < length3; i++) {
  var now = arr3[i];
  var j = i - 1;
  while (j >= 0 && arr3[j] > now) {
    arr3[j + 1] = arr3[j];
    j--;
  }

  arr3[j + 1] = now;
  //console.log(arr3);
}

//console.log(arr3);

// 快速排序
var arr4 = [10, 4, 2, 6, 7, 9, 5, 90, 34];
var arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function partpositon(arr, left, right) {
//   var pivot = arr[right];
//   var tail = left - 1;
//   for (var i = left; i < right; i++) {
//     if (arr[i] <= pivot) {
//       tail++;
//       changeArr(arr, tail, i);
//     }
//     console.log(pivot,tail);
//     console.log(arr4)
//   }
//   changeArr(arr, tail + 1, right);
//   return tail + 1;
// }
//
// function quickSort(arr, left, right) {
//   var pivot_index;
//   if (left < right) {
//     pivot_index = partpositon(arr, left, right);
//     quickSort(arr, left, pivot_index - 1);
//     quickSort(arr, pivot_index + 1, right);
//   }
// }
//
// quickSort(arr4, 0, arr4.length - 1);
//console.log(arr4);
function quickSort(array) {
  function sort(prev, numsize) {
    var i = prev;
    var j = numsize - 1;
    var flag = array[prev];
    if ((numsize - prev) > 1) {
      while (i < j) {
        for (; i < j; j--) {
          if (array[j] > flag) {
            changeArr(array, i, j);
            break;
          };
        }
        for (; i < j; i++) {
          if (array[i] < flag) {
            changeArr(array, j, i);
            break;
          }
        }
        console.log(arr5);
      }
      sort(0, i);
      sort(i + 1, numsize);
    }
  }
  sort(0, array.length);
  return array;
}



console.log(quickSort(arr5));




console.log('woshidibu');









console.log('woshidibu');









console.log('woshidibu');
var arr444 = [10, 4, 2, 6, 7, 9, 5, 90, 34];
