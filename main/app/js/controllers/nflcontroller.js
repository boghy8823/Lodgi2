'use strict';

angular.module('lodgiApp.controllers.nfl', ['lodgiApp.services.nfl'])
	.controller('NFLController', ['$scope', '$routeParams', 'ROOMS', 
		function($scope, $routeParams, ROOMS) {
		    $scope.description = ROOMS.description;
			//$scope.description = ROOMS.description[$routeParams['roomId']];
		    $('.main-navigation li').removeClass("active");
		    $('.home-nav').addClass('active');
			$(window).load(function() {
			  $('.flexslider').flexslider({
			    animation: "slide"
			  });
			});
		}]);