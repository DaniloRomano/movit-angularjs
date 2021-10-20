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

  app.controller("homeController", homeController);
  app.controller("profileController", profileController);    
  app.directive("myProfile", profile);
  app.directive("experienceBar",experienceBar);

  angular.bootstrap(document, ["movit"]);
});
