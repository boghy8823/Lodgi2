'use strict';

angular.module('lodgiApp.services.leagues', ['lodgiApp.services.firebaseRefs'])
  .factory('Leagues', ['angularFireCollection', 'FireRef',
    function (angularFireCollection, FireRef) {
        console.log("League Service");
        return {
            collection: function (cb) {
                return angularFireCollection(FireRef.rooms(), cb);
            }
        , find: function (roomId) {
            return FireRef.rooms().child('/' + roomId);
        }
        , findMyRoom: function () {
            var MyRoom = [];
            for (var i = 0; i <= FireRef.rooms.length; i++) {
                //arreyM[i]['name'] = $scope.newJson[i].name;
                //arreyM[i]['pic'] = $scope.newJson[i].pic
                //arreyM[i]['pic'] = $scope.newJson[i].vote;
                console.log("This is iterator", i);
            }
        }
          
        , create: function (rooms, commissioner) {
            return FireRef.rooms().push({
                name: rooms.name,
                type: rooms.type,
                capacity: rooms.capacity,
                facilities: rooms.facilities,
                pictures: rooms.pictures,
                description: rooms.description,
                price: rooms.price,
                booked: false,
                user: null,
                bookersName: null,
            }).name();
        }
        , updateStatus: function (id) {
           // var room = FireRef.rooms().child('/' + id);
            //room.update({ booked: true });
            console.log("Room refer", FireRef);
            console.log("Room refer", id );
        }
        , removeRoom: function (roomId) {
            var room = FireRef.rooms().child('/' + roomId)
            room.remove();
        }
        }
    }])