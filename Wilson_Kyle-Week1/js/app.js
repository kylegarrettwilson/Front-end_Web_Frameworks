var app = angular.module("theApp", []);

app.controller("groceryController", function($scope){

    $scope.newListItem;



    /* beginning array */

    $scope.groceries = ['Potatoes','Celery','Candy Bars'];



    /* add an item */

    $scope.addItem = function(){
        $scope.groceries.push($scope.newListItem);
        $scope.newListItem = '';

    };



    /* remove an item */

    $scope.removeItem = function(item){
        var idx = $scope.groceries.indexOf(item);
        $scope.groceries.splice(idx,1);
    }








});