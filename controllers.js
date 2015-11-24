(function () {


  angular
    .module('places')
    .controller('MainController', function ($scope) {
      $scope.alertMe = function () {
      _.times(1000, function () {
          console.log("this lists the places");
        });
      };
      $scope.msg = "hello there";
    })
    .controller('PlacesController', function ($scope, PlacesService) {

      PlacesService.getPlaces().success(function (places) {
        console.log(places);
        $scope.greatPlaces = places;
      });

      $scope.addPlace = function (newPlace) {
        console.log(newPlace);
        PlacesService.createPlace(newPlace);
        $scope.greatPlaces = places;
      };

    });


})();
