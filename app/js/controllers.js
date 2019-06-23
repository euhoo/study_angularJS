const phonecatApp = angular.module("phonecatApp", [])
    .controller('DemoCtrl', function($scope) {
      $scope.name = "World";
    });