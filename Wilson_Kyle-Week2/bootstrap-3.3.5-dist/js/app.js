var myApp = angular.module("MyApp", []);

myApp.controller("MyController", function($scope,DataService){

    $scope.addresses = DataService.getAddresses();
        $scope.newAddress = {};

    $scope.addNewAddress = function(){
        DataService.saveAddress($scope.newAddress.company, $scope.newAddress.position, $scope.newAddress.city, $scope.newAddress.state);

        $scope.newAddress = {};

    };

    $scope.removeAddy = function(idx){
        DataService.removeAddressAt(idx);
    };

    $scope.clearIt = function(){
        DataService.emptyLocalStorage();
    };






});