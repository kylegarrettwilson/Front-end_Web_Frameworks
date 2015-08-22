angular.module("MyApp").service("DataService", function(){


    var addressArray = [];

    this.getAddresses = function(){
        var addyArray = JSON.parse(localStorage.getItem("addressesLS")) || [];
        addressArray = addyArray;
        return addressArray;
    };


    this.saveAddress = function(pName, pPosition, pCity, pState){
        var savedAddresses= {name: pName, position: pPosition, city: pCity, state: pState};
        addressArray.push(savedAddresses);
        localStorage.setItem("addressesLS", JSON.stringify(addressArray));
    };

    this.removeAddressAt = function(pIndex){
        addressArray.splice(pIndex,1);
        localStorage.setItem("addressesLS", JSON.stringify(addressArray));
    };

    this.emptyLocalStorage = function(){
        addressArray.splice(0);
        localStorage.clear();
    };


});
