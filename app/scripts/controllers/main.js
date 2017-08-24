
/**
 * @ngdoc function
 * @name crmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crmApp
 */
var pubCon = angular.module('crmApp');
pubCon.controller('MainCtrl', function ($scope) {
  $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
});
