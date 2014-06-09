'use strict';

angular.module('lodgiApp.services.firebaseRefs', [])
  .factory('FireRef', ['FBURL', 'Firebase',
    function (FBURL, Firebase) {
        return {
            leagues: function () {
                return new Firebase(FBURL + '/leagues');
            },
            users: function () {
                return new Firebase(FBURL + '/users');
            },
            rooms: function () {
                return new Firebase(FBURL + '/rooms');
            },
        }
    }])