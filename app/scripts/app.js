/**
 * @ngdoc overview
 * @name crmApp
 * @description
 * # crmApp
 *
 * Main module of the application.
 */
var myApp = angular.module('crmApp', ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('index',{
      url:'/index',
      templateUrl: 'views/main.html',
      controller:'MainCtrl'
    }).state('index.indexright',{
      url:'/indexrihgt',
      templateUrl: 'views/indexright.html'
  });
  $urlRouterProvider.when('','/index/indexrihgt');
});

