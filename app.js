var app = angular.module("bombsForBreakfast", []);

app.controller("MainCtrl", [
  "$scope",
  function($scope){
    $scope.test = "Hello World!";
    $scope.posts = [
     {title: "post 1", upvotes: 4},
     {title: "post 2", upvotes: 3},
     {title: "post 3", upvotes: 3},
     {title: "post 4", upvotes: 2},
     {title: "post 5", upvotes: 6}
    ]
    $scope.addPost = function(){
     $scope.posts.push({title: "A New Post!", upvotes: 0});
    }
  }
]);
