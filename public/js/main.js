define([
  "angular",
  "angular-route",
  "text!view.html",
  "controller/controller",
  "directives/profile",
  "controller/profile-controller",
  "directives/experience-bar",
  "directives/countdown",
  "controller/countdown-controller",
  "directives/completed-challenges",
  "controller/completed-challenges-controller",
  "directives/challenge-box",
  "directives/level-up-modal"
], function (
  angular,
  ngRoute,
  template,
  homeController,
  profile,
  profileController,
  experienceBar,
  countdown,
  countdownController,
  completedChallenges,
  completedChallengesController,
  challengeBox,
  levelUpModal
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
  app.controller("countdownController",countdownController);
  app.controller("completedChallengesController",completedChallengesController);

  app.directive("myProfile", profile);
  app.directive("experienceBar", experienceBar);
  app.directive("countdown", countdown);
  app.directive("completedChallenges", completedChallenges);
  app.directive("challengeBox", challengeBox);
  app.directive("levelUpModal", levelUpModal);

  angular.bootstrap(document, ["movit"]);
});
