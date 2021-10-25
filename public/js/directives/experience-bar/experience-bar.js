define([
  "text!directives/experience-bar/experience-bar-template.html",
  "directives/experience-bar/experience-bar-controller",
], function (template, controller) {
  return function () {
    return {
      restrict: "E",
      template: template,
      controller: controller
    };
  };
});
