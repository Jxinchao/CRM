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

  $stateProvider.state('index', {
      url:'/index',
      templateUrl: 'views/main.html',
      controller:'MainCtrl'
    }).state('index.indexright',{
      url:'/indexright',
      templateUrl: 'views/indexright.html'
    }).state('index.yuangong',{
      url:'/yuangong',
      templateUrl: 'views/yuangong.html'
    }).state('index.renshi',{
      url:'/renshi',
      templateUrl: 'views/renshi.html'
    }).state('index.recycle',{
      url:'/recycle',
      templateUrl: 'views/recycle.html'
    }).state('index.help',{
      url:'/help',
      templateUrl: 'views/help.html'
    });
  $urlRouterProvider.when('','/index/indexright');
});

