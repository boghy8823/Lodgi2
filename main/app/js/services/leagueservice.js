'use strict';

angular.module('lodgiApp.services.leagues', ['lodgiApp.services.firebaseRefs'])
  .factory('Leagues', ['angularFireCollection', 'FireRef',
    function (angularFireCollection, FireRef) {
        console.log("League Service");
        return {
            collection: function (cb) {
                return angularFireCollection(FireRef.leagues(), cb);
            }
        , find: function (leagueId) {
            return FireRef.leagues().child('/' + leagueId);
        }
        , create: function (league, commissioner) {
            return FireRef.leagues().push({
                name: league.name,
                commissionerId: commissioner.id,
                fantasyTeams: []
            }).name();
        }
        , removeLeague: function (leagueId) {
            var league = FireRef.leagues().child('/' + leagueId)
            league.remove();
        }
        }
    }])