var app = angular.module("theApp", []);

app.controller("groceryController", function($scope){

    $scope.newListItem;


    $scope.groceries = ['Bread','Milk','Eggs'];


    $scope.addItem = function(){
        $scope.groceries.push($scope.newListItem);
        $scope.newListItem = '';

    };


    $scope.removeItem = function(item){
        var idx = $scope.groceries.indexOf(item);
        $scope.groceries.splice(idx,1);
    }








});