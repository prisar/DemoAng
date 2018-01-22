/// <reference path="angular.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var country = {
            name: "USA",
            capital: "Washington, D.C.",
            flag: "/Images/usa-flag.png"
        };

        $scope.country = country;
    });