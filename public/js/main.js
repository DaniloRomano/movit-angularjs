define(["angular", "angular-route","text!home/view.html"], function (angular,ngRoute,template) {
  angular.module("movit", ["ngRoute"]).config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/", {
          template: template,
          controller: 'homeController'
      });
    },
  ]);
  angular.bootstrap(document, ["movit"]);
});
