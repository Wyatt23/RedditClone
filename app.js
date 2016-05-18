var app = angular.module("bombsForBreakfast", []); 

app.controller("MainCtrl", [
  "$scope",
  function($scope){
    $scope.test = "Hello World!"
  }

])
