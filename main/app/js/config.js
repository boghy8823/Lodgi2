'use strict';

// Declare app level module which depends on filters, and services
angular.module('lodgiApp.config', [])

app.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
      .when('/',        { templateUrl: 'views/default.html' })
      .when('/signin',  { templateUrl: 'views/users/signin.html' })
      .when('/signup',  { templateUrl: 'views/users/signup.html' })
      .when('/nflteams',  { templateUrl: 'views/nfl/list.html', authRequired: false })
      .when('/rooms/:nflTeamId',  { templateUrl: 'views/nfl/view.html', authRequired: false })
      .otherwise(       { redirectTo: '/' });
    }])
  
  // establish authentication
  .run(['angularFireAuth', 'FBURL', '$rootScope', 
    function(angularFireAuth, FBURL, $rootScope) {
      angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: 'auth', path: '/signin'});
      $rootScope.FBURL = FBURL;
    }])

  // your Firebase URL goes here
  .constant('FBURL', 'https://fantasyfootball2014.firebaseio.com/')


