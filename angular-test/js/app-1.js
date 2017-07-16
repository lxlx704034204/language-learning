var app_1 = angular.module('app_1',[]);

app_1.controller('app_1_ctrl',function($scope){
  var modelTemp = {
    items:[
      {action:'hello1'},
      {action:'hello2'},
      {action:'hello3'},
      {action:'hello4'}
    ]
  }
  $scope.name = 'liming';
  $scope.items = modelTemp.items;
  console.log($scope);
});
