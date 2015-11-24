(function () {
  "use strict";

  angular
    .module('places', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'MainController'
        })
        .when('/places', {
          templateUrl: 'views/places/list.html',
          controller: 'PlacesController'

        })
        .when('/places/:placeId', {
          templateUrl: 'views/places/show.html',
          controller: 'PlacesController'
        })
        .when('/places/:placeId/edit', {
          templateUrl: 'views/places/edit.html',
          controller: 'PlacesController'
        })
        .when('/addPlace', {
          templateUrl: 'views/places/create.html',
          controller: 'PlacesController'
        })
        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'});

    });




})();
