var myModule = angular.module("MyModule", []);//一切从module开始 包括directive
myModule.directive("hello"  , function() {   //利用指令  自定义html中的<hello></hello>标签
    return {
        restrict: 'E',
        template: '<div>Hi everyone!</div>', // "hello" 最终被 这里替换显示在page
        replace: true
    }
});
