const phonecatApp = angular.module("phonecatApp", []);

const PhoneListCtrl = ($scope, $http) => {
  $scope.title = 'Телефоны';
  const obj = {
    'url': 'phones/phones.json'
  }
  $http(obj).then(response => $scope.phones = response.data);

  $scope.today = new Date;
  $scope.doneAndFilter = (phoneItem) => phoneItem.name && phoneItem.priority > 1 && phoneItem.status === true ;
  $scope.sortField = undefined;
  $scope.reverse = false;
  
  $scope.sort = (fieldName) => {
    if ($scope.sortField === fieldName) {
      $scope.reverse = !$scope.reverse;
    }
    else {
      $scope.sortField = fieldName;
      $scope.reverse = false;
    }
  };

  $scope.isSortUp = (fieldName) => {
    return $scope.sortField === fieldName && !$scope.reverse;
  };
  $scope.isSortDown = function(fieldName) {
    return $scope.sortField === fieldName && $scope.reverse;
  }
};
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', PhoneListCtrl]); // можно передать анонимную функцию внутри массива

