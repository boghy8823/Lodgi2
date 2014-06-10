'use strict';

angular.module('lodgiApp.controllers.specialOfferController', [])
  .controller('SpecialOffersController', ['$scope', '$routeParams', '$location', 'angularFire', 'Leagues', 'loginService','filterFilter',
    function ($scope, $routeParams, $location, angularFire, Leagues, loginService, filterFilter) {
        console.log("Special offers Controller");
     
        $('.flexslider').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 250,
            itemMargin: 5,
            
        });
    }])