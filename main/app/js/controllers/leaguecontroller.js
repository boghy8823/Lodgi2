'use strict';

angular.module('lodgiApp.controllers.leagues', ['lodgiApp.services.leagues'])
  .controller('LeaguesController', ['$scope', '$routeParams', '$location', 'angularFire', 'Leagues',
    function ($scope, $routeParams, $location, angularFire, Leagues) {
        console.log("Leagues Controller");
        $scope.league = {};
        $scope.leagueId = $routeParams.leagueId;

        $scope.findLeagues = function () {
            $scope.leagues = Leagues.collection();
        }

        $scope.findOneLeague = function (leagueId) {
            if (!!$scope.leagueId) {
                angularFire(Leagues.find($routeParams.leagueId), $scope, 'league')
            }
        }

        $scope.createLeague = function () {
            console.log("Create League Function");
            var leagueId = Leagues.create($scope.league, $scope.auth);
            $scope.league = null;
            $location.path('/leagues/' + leagueId);
        }

        $scope.removeLeague = function (leagueId) {
            Leagues.removeLeague(leagueId);
        }
    }])