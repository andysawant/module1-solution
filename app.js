(function(){
  'use strict';
  angular.module('myFirstApp',[])
  .controller('MyFirstController',MyFirstController);
  MyFirstController.$inject=['$scope','$filter'];
  function MyFirstController($scope,$filter){
    $scope.foodItems=""; 
    $scope.foodResponse="";
    $scope.submitFoodItems=function(){
      if(foodItemCount($scope.foodItems)==0){
        $scope.foodResponse="Please enter data first";
      }else if (foodItemCount($scope.foodItems)<=3){
        $scope.foodResponse="Enjoy!";
      }else {
        $scope.foodResponse="Too much!";
      }
    };
  }
  function foodItemCount(foodItems){
    var count=0;
    var foodItemArray=foodItems.split(",");
    for(var i=0;i<foodItemArray.length;i++){
      if(foodItemArray[i].trim().length!=0){
        count++;
      }
    }
    return count;
  }
})();
