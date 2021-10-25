define([
  "text!directives/countdown/countdown-template.html",
  "directives/countdown/countdown-controller"
], function (template,controller) {
  return function () {
    return {
      restrict: "E",
      template: template,
      controller: controller
    };
  };
});
