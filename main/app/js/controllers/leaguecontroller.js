'use strict';

angular.module('lodgiApp.controllers.leagues', ['lodgiApp.services.leagues'])
  .controller('LeaguesController', ['$scope', '$routeParams', '$location', 'angularFire', 'Leagues', 'loginService','filterFilter',
    function ($scope, $routeParams, $location, angularFire, Leagues, loginService, filterFilter) {
        console.log("Leagues Controller");
        $scope.league = {};
        $scope.rooms = {};
        $scope.leagueId = $routeParams.leagueId;
        $scope.roomId = $routeParams.roomId;

        $(window).load(function () {
            $('.flexslider').flexslider({
                animation: "slide"
            });
        });
       
        $scope.findLeagues = function () {
            $scope.leagues = Leagues.collection();
        }

        $scope.findRooms = function () {
            $scope.rooms = Leagues.collection();
        }

        $scope.findMyRoom = function () {
            $scope.rooms = Leagues.collection();
            var email = loginService.getEmail();
            console.log("Email filter", email);
            console.log("Rooms scope filter", $scope.rooms);
            //return filterFilter($scope.rooms, email);
           
          
        }

        $scope.findOneRoom = function (leagueId) {
            console.log("Scope Find ONe Room", $scope);
            if (!!$scope.leagueId) {
                angularFire(Leagues.find($routeParams.leagueId), $scope, 'rooms')
            }
        }
        $scope.findOneLeague = function (leagueId) {
            if (!!$scope.leagueId) {
                angularFire(Leagues.find($routeParams.leagueId), $scope, 'league')
            }
        }

        $scope.createLeague = function () {
            console.log("Create League Function",$scope.rooms);
            var leagueId = Leagues.create($scope.rooms, $scope.auth);
            var roomId = Leagues.create($scope.rooms, $scope.auth);
            $scope.league = null;
            $location.path('/leagues/' + roomId);
        }

        $scope.bookItFunc = function () {
           
            var email = loginService.getEmail();
            //Leagues.updateStatus($scope.leagueId);
            $scope.rooms.booked = true;
            $scope.rooms.user = email;
            console.log("This is the email", email);
            console.log("This is the $scope", $scope);
            
        }

        $scope.removeRoom = function (leagueId) {
            Leagues.removeRoom(leagueId);
        }
    }])