angular.module('movit').config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "js/view.html",
        controller: "homeController",
      });
    },
  ]);