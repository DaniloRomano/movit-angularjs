define([
  "text!templates/completed-challenges-template.html",
], function (template) {
  return function () {
    return {
      restrict: "E",
      template: template,
      controller: "completedChallengesController"
    };
  };
});
