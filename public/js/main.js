define([
  "angular",  
  "angular-ui-router",   
  "pages/home/home-router",
  "directives/profile/profile-directive",  
  "directives/experience-bar/experience-bar",
  "directives/countdown/countdown",  
  "directives/completed-challenges/completed-challenges",  
  "directives/challenge-box/challenge-box",
  "directives/level-up-modal/level-up-modal",  
], function (
  angular,  
  angularUiRoute,  
  homeState,
  profile,  
  experienceBar,
  countdown,  
  completedChallenges,  
  challengeBox,
  levelUpModal  
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
