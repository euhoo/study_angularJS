'use strict';

/* Controllers */
const phonecatApp = angular.module('phonecatApp', ['ngRoute', 'ngResource']);

phonecatApp.config(['$routeProvider', '$locationProvider', ($routeProvide,$locationProvider) => {
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
// Factory
phonecatApp.factory('Phone', [
  '$resource', $resourse => $resourse('phones/:phoneId.:format', {
    phoneId: 'phones',
    format: 'json'
  })
]);

// Filter

phonecatApp.filter('checkmark', () => input => {
  return input ? '\u2713' : '\u2718';
})

phonecatApp.controller('AboutCtrl',['$scope','$http', '$location', ($scope, $http, $location) => {

}]);
phonecatApp.controller('ContactCtrl',['$scope','$http', '$location', ($scope, $http, $location) => {

}]);

phonecatApp.controller('PhoneDetailCtrl',[
  '$scope','$http', '$location', '$routeParams','Phone',
   ($scope, $http, $location, $routeParams, Phone) => {
  $scope.phoneId = $routeParams.phoneId;
  const url = `phones/${$routeParams.phoneId}.json`;
  Phone.get({phoneId: $routeParams.phoneId}, data => {
    $scope.phone = data;
    $scope.mainImageUrl = data.images[0];
  });
  $scope.setImage = (imageUrl) => {
    $scope.mainImageUrl = imageUrl;
  }
/*
  const obj = {
    'method': 'GET',
    'url': url
  };
  $http(obj)
  .then(data => {
    $scope.phone = data.data;
    
    $scope.mainImageUrl = data.data.images[0];

    $scope.setImage = (imageUrl) => {
      $scope.mainImageUrl = imageUrl;
    }
  });
  */
}]);

phonecatApp.controller('PhoneListCtrl',[
  '$scope','$http', '$location','Phone',
  ($scope, $http, $location, Phone) => {
    $scope.phones = Phone.query();
    /*
    const obj = {
      "method": "GET",
      "url":'phones/phones.json'
    };
    $http(obj).then(response => {
        $scope.phones = response.data;
    });
    */

}]);



