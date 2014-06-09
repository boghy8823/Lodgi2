'use strict';

angular.module('lodgiApp.controllers.signin', ['lodgiApp.services.login'])
  .controller('SigninCtrl', ['$scope', 'loginService', '$location',
    function($scope, loginService, $location) {
       
       if (!!$scope.auth) {
         $location.path('/');
      }

      $scope.$on('angularFireAuth:login', function () {
          $location.path('/');
          console.log("Logged in scope", $scope.email);
      })

      $scope.email = null;
      $scope.pass = null;
      $scope.name = null;

      $scope.login = function(callback) {
        $scope.err = null;
        loginService.login($scope.email, $scope.pass, '/', function(err, user) {
          $scope.err = err||null;
          typeof(callback) === 'function' && callback(err, user);
        });
      };
    }])
  