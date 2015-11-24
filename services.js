(function () {
  "use strict";
  angular
    .module('places')
    .factory('PlacesService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/ng-intro-jet';

      var addPlace = function (newPlace) {
        $http.post(url, newPlace).then(function (res) {
          console.log(res);
        });
      };

      var getPlaces = function () {
        return $http.get(url);
      };

      return {
        createPlace: addPlace,
        getPlaces: getPlaces
      };

    });
})();
