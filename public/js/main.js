define([
  "angular",
  "angular-route",
  "text!view.html",
  "home/controller/controller",
  "home/components/profile",
  "home/components/profile-controller",
  "home/components/experience-bar",
], function (
  angular,
  ngRoute,
  template,
  homeController,
  profile,
  profileController,
  experienceBar
) {
  var app = angular.module("movit", ["ngRoute"]).config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/", {
        template: template,
        controller: homeController,
      });
    },
  ]);
  angular.bootstrap(document, ["movit"]);

  app.controller("homeController", homeController);
   app.controller("profileController", profileController);
//   app.controller("experienceBarController", ["$scope", function ($scope) {}]);

  app.directive("myProfile", profile);
//   app.directive("experienceBar", experienceBar);
});
