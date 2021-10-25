define([
  "text!directives/completed-challenges/completed-challenges-template.html",
  "directives/completed-challenges/completed-challenges-controller"
], function (template,controller) {
  return function () {
    return {
      restrict: "E",
      template: template,
      controller: controller
    };
  };
});
