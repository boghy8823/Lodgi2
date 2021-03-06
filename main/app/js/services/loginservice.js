
'use strict';

/* Services */

angular.module('lodgiApp.services.login', ['lodgiApp.services.profileCreator'])
  .factory('loginService', ['angularFireAuth', 'profileCreator', '$location', '$rootScope',
    function(angularFireAuth, profileCreator, $location, $rootScope) {
      return {
        login: function(email, pass, redirect, callback) {
          var p = angularFireAuth.login('password', {
            email: email,
            password: pass,
            rememberMe: true
          });
        
          p.then(function(user) {
            if( redirect ) {
              $location.path(redirect);
            }
            callback && callback(null, user);
          }, callback);
        },
        getEmail: function() {
            return $rootScope.auth.email;
            console.log('User is auth -- email', $rootScope.auth.email);
            console.log('User is auth -- id', $rootScope.auth.id);
        },
        logout: function(redirectPath) {
          angularFireAuth.logout();
          if(redirectPath) {
            $location.path(redirectPath);
          }
        },
        createAccount: function(name, email, pass, callback) {
          angularFireAuth._authClient.createUser(email, pass, function(err, user) {
            if(callback) {
              callback(err, user);
              $rootScope.$apply();
            }
          });
        },
        createProfile: profileCreator
      }
    }])
