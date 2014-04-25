'use strict';

angular.module('lodgiApp.controllers.nfl', ['lodgiApp.services.nfl'])
	.controller('NFLController', ['$scope', '$routeParams', 'ROOMS', 
		function($scope, $routeParams, ROOMS) {
		    $scope.roomsDetails = ROOMS.details;
			$scope.roomDetails = ROOMS.details[$routeParams['nflTeamId']];
		}]);