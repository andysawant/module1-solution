(function(){
  'use strict';

  angular.module('myFirstApp',[])

  .controller('MyFirstController',function($scope){

    $scope.name="Aniruddha";
    $scope.sayHello=function(){
      return "Hello Coursera";
    };
  });
})();
