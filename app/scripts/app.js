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
<<<<<<< HEAD
      url:'/indexrihgt',
      templateUrl: 'views/indexright.html'
  });
  $urlRouterProvider.when('','/index/indexrihgt');
=======
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
>>>>>>> 51a271adfd79e0b8b1b1f9f0a6b41253e2682fe0
});

