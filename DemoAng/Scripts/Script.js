/// <reference path="angular.min.js" />

//var myApp = angular.module("myModule", []);

//var myController = function ($scope) {
//    $scope.message = "Angular";
//};

//myApp.controller("myController", myController)

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    $scope.message = "Angular";
});