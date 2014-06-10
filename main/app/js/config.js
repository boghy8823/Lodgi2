'use strict';

// Declare app level module which depends on filters, and services
angular.module('lodgiApp.config', [])

app.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
      .when('/',        { templateUrl: 'views/home.html' })
      .when('/signin',  { templateUrl: 'views/users/signin.html' })
      .when('/signup',  { templateUrl: 'views/users/signup.html' })
      .when('/nflteams',  { templateUrl: 'views/nfl/list.html', authRequired: false })
      .when('/rooms/:roomId', { templateUrl: 'views/leagues/view.html', authRequired: false })
      .when('/leagues', { templateUrl: 'views/leagues/list.html', authRequired: false })
      .when('/leagues/create', { templateUrl: 'views/leagues/edit.html', authRequired: false })
      .when('/leagues/:leagueId', { templateUrl: 'views/leagues/view.html', authRequired: false })
      .when('/leagues/:leagueId/edit', { templateUrl: 'views/leagues/edit.html', authRequired: false })
      .when('/bookings', { templateUrl: 'views/users/bookings.html', authRequired: false })
      .when('/contact', { templateUrl: 'views/users/contact.html', authRequired: false })
      .when('/oferte', { templateUrl: 'views/users/ofertespeciale.html', authRequired: false })
      .when('/about', { templateUrl: 'views/users/aboutus.html', authRequired: false })
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


