'use strict';

var app = angular
  .module('BootCamper', [
    'ngAnimate',    
    'ngResource',
    'ngRoute',    
    'firebase',
    'toaster',
    'angularMoment'
  ])
  .constant('FURL', 'This part will be our firebase URL part')
  .run(function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
      // We can catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the login page
      if (error === "AUTH_REQUIRED") {
        $location.path("/login");
      }
    });
  })  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: '',
        controller: ''     
      })
      .when('/browse/:taskId', {
        templateUrl: '',
        controller: ''
      })
      .when('/register', {
        templateUrl: '',
        controller: ''
      })
      .when('/login', {
        templateUrl: '',
        controller: ''
      })
      .when('/dashboard', {
        templateUrl: '',
        controller: ''
      })
      .otherwise({
        redirectTo: '/'
      });
  });
