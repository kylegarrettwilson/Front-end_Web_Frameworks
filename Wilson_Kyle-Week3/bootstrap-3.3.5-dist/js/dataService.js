angular.module('myApp').service("dataService", function(){


   var homeworksArray = [
       {
           course : "Pontiac Grand Am",
           asgName : "Car",
           dueDate : "194720470237420734"
       },
       {
           course : "GMC Sierra",
           asgName : "Truck",
           dueDate : "3274207430923740427"
       },
       {
           course : "Pontiac Firebird",
           asgName : "Car",
           dueDate : "27420374029347024"
       },
       {
           course : "Ford Pinto",
           asgName : "Car",
           dueDate : "034707470420740724"
       }

   ];


    this.getHomeworks = function(){
        var str = localStorage.getItem("HomeworkList");
        homeworksArray = JSON.parse(str) || homeworksArray;
        return homeworksArray
    }

    this.newHomework = function(course, name, date){
        var newHomework = {
            course: course,
            asgName: name,
            dueDate: date
        };

        homeworksArray.push(newHomework);
        var str = JSON.stringify(homeworksArray);
        localStorage.setItem("HomeworkList", str);
    }

    this.removeHomework = function(homework){
        homeworksArray.splice(homeworksArray.indexOf(homework), 1);
        localStorage.setItem("HomeworkList",JSON.stringify(homeworksArray));
    }






    /************/




    var choreArray = ["Oil", "Oil Filter", "Wash", "Vacuum"];


    this.getChore = function(){
        var str = localStorage.getItem("choreList");
        choreArray = JSON.parse(str)  || choreArray;
        return choreArray;
    }


    this.newChore = function(myChore){
        var newChore = myChore;

        choreArray.push(newChore);
        var str = JSON.stringify(choreArray);
        localStorage.setItem("choreList", str);
    }

    this.removeChore = function(noChore){
        choreArray.splice(choreArray.indexOf(noChore), 1);
        localStorage.setItem("choreList", JSON.stringify(choreArray));
    }





    /************/


    var billsArray = [
        {
            name: "John Doe",
            amount: "304",
            dueDate: "2015-06-07"
        },
        {
            name: "Mike Lock",
            amount: "304",
            dueDate: "2015-06-07"
        },
        {
            name: "Jim Powers",
            amount: "304",
            dueDate: "2015-06-07"
        },
        {
            name: "Kyle Kiole",
            amount: "304",
            dueDate: "2015-06-07"
        }
    ];

    this.getBills = function(){
        var str = localStorage.getItem("BillsList");
        billsArray = JSON.parse(str)  || billsArray;
        return billsArray;
    }


    this.newBill = function(name, amount, date){
        var newBill = {
            name: name,
            amount: amount,
            dueDate: date
        };

        billsArray.push(newBill);
        var str = JSON.stringify(billsArray);
        localStorage.setItem("BillsList", str);
    }


    this.removeBill = function(bill){
        billsArray.splice(billsArray.indexOf(bill), 1);
        localStorage.setItem("BillsList", JSON.stringify(billsArray));
    }



});













































