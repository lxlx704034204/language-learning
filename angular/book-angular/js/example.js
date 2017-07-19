var myApp = angular.module('myApp', []);
var listObj = {
  listName: {
    'liming': 'true',
    'zhangsan' : 'false',
    'lisi' : 'true'
  }
}
myApp.controller('dayCtrl', function($scope, days) {
  $scope.day = days.today;
  $scope.day1 = days.tomorrow;
  $scope.list = listObj;
})
myApp.directive('hightlight', function() {
  return function(scope, element, attrs) {
    element.css('background-color', 'red');
  }
});

myApp.service('days', function() {
  this.today = new Date().getDay();
  this.tomorrow = this.today + 1;
});
