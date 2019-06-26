'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl',['$scope','$http', function($scope, $http) {
    $scope.title = 'Телефоны';
    const obj = {
      "method": "GET",
      "url":'phones/phones.json'
    };
    $http(obj).then(response => {
        $scope.phones = response.data;
    });
}]);



