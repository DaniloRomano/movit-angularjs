define([
  "angular",  
  "angular-ui-router",
  "text!view.html",  
  "directives/profile",  
  "directives/experience-bar",
  "directives/countdown",  
  "directives/completed-challenges",  
  "directives/challenge-box",
  "directives/level-up-modal",
  "routes/home-router",
], function (
  angular,  
  angularUiRoute,
  template,  
  profile,  
  experienceBar,
  countdown,  
  completedChallenges,  
  challengeBox,
  levelUpModal,
  homeState
) {
  var app = angular.module("movit", ["ui.router"]).config([
    "$stateProvider",
    function ($stateProvider) {
      $stateProvider.state(homeState);
    },
  ]);

  app.directive("myProfile", profile);
  app.directive("experienceBar", experienceBar);
  app.directive("countdown", countdown);
  app.directive("completedChallenges", completedChallenges);
  app.directive("challengeBox", challengeBox);
  app.directive("levelUpModal", levelUpModal);

  angular.bootstrap(document, ["movit"]);
});
