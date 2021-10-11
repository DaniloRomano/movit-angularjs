angular.module("movit", ["ngRoute", "ngResource"]).config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "js/home/view.html",
      controller: "homeController",
    });
  },
]);
