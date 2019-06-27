'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', ['ngRoute']);

phonecatApp.config(['$routeProvider', '$locationProvider', function($routeProvide,$locationProvider) {
  $locationProvider
  .html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvide
  .when('/',{
    templateUrl:'template/home.html',
    controller:'PhoneListCtrl'
  })
  .when('/about',{
    templateUrl:'template/about.html',
    controller:'AboutCtrl'
  })
  .when('/contact',{
    templateUrl:'template/contact.html',
    controller:'ContactCtrl'
  })
  .when('/phones/:phoneId', {
    templateUrl: 'template/phone-detail.html',
    controller: 'PhoneDetailCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
}]);

phonecatApp.controller('AboutCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);
phonecatApp.controller('ContactCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);

phonecatApp.controller('PhoneDetailCtrl',['$scope','$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;
}]);

phonecatApp.controller('PhoneListCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
    $scope.title = 'Телефоны';
    const obj = {
      "method": "GET",
      "url":'phones/phones.json'
    };
    $http(obj).then(response => {
        $scope.phones = response.data;
    });

}]);



