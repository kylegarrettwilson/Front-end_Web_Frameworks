angular.module('myApp').service("dataService", function(){


   var homeworksArray = [
       {
           course : "Information Retrieval",
           asgName : "Homework 2",
           dueDate : "2015-05-27"
       },
       {
           course : "Front-End Web Frameworks",
           asgName : "List Application",
           dueDate : "2015-05-22"
       },
       {
           course : "Information Retrieval",
           asgName : "Homework 4",
           dueDate : "2015-06-15"
       },
       {
           course : "Information Retrieval",
           asgName : "Homework 3",
           dueDate : "2015-06-08"
       },
       {
           course : "Information Retrieval",
           asgName : "Research Project",
           dueDate : "2015-05-30"
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




    var choreArray = ["Mop", "Dust", "Bathroom", "Vacuum"];


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
            name: "Nissan",
            amount: "304",
            dueDate: "2015-06-07"
        },
        {
            name: "Nissan",
            amount: "304",
            dueDate: "2015-06-07"
        },
        {
            name: "Nissan",
            amount: "304",
            dueDate: "2015-06-07"
        },
        {
            name: "Nissan",
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













































