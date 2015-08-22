/* Main App Call */

angular.module('myApp', ['ngRoute'])


    .config(function($routeProvider){

        $routeProvider.when('/view',{
            templateUrl : "view1,html",
            controller : "BillsController"
        }).when('/view2',{
            templateUrl : "view2.html",
            controller : "HomeworkController"
        }).when('/view3/:awesome',{
            templateUrl : "view3,html",
            controller : "choreController"
        }).otherwise({
            redirectTo : "/view1"
        });


    })

    .controller('HomeworkController', function($scope,dataService){

        $scope.hwCourse;
        $scope.hwName;
        $scope.hwDueDate;


        $scope.homeworkArray = dataService.getHomeworks();


        $scope.addHomework = function(){
            dataService.newHomework($scope.hwCourse, $scope.hwName, $scope.hwDueDate);

            $scope.hwCourse = '';
            $scope.hwName = '';
            $scope.hwDueDate = '';
        }


        $scope.deleteHomework = function(hwToDelete){
            dataService.removeHomework(hwToDelete);
        }

        $scope.resetForm = function(){
            $scope.hwCourse = '';
            $scope.hwName = '';
            $scope.hwDueDate = '';

        }

    }).controller('choreController', function($scope,$routeParams,dataService){

        $scope.chore;

        $scope.word = $routeParams.awesome;


        $scope.choreArray = dataService.getChore();

        $scope.addChore = function(){
            dataService.newChore($scope.chore);

            $scope.chore = '';
        }

        $scope.deleteChore = function(choreToDelete){
            dataService.removeChore(choreToDelete);
        }

        $scope.resetForm = function(){
            $scope.chore = '';
        }

    }).controller('BillsController', function($scope, dataService){

        $scope.billerName;
        $scope.billAmount;
        $scope.billDueDate;



        $scope.billArray = dataService.getBills();

        $scope.addBill = function(){
            dataService.newBill($scope.billerName, $scope.billAmount, $scope.billDueDate);

            $scope.billerName = '';
            $scope.billAmount = '';
            $scope.billDueDate = '';
        }

        $scope.deleteBill = function(billToDelete){
            dataService.removeBill(billToDelete);

        }

        $scope.resetForm = function(){
            $scope.billerName = '';
            $scope.billAmount = '';
            $scope.billDueDate = '';
        }




    });