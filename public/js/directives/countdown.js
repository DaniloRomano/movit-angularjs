define([
  "text!templates/countdown-template.html",
  "controller/countdown-controller"
], function (template,controller) {
  return function () {
    return {
      restrict: "E",
      template: template,
      controller: controller
    };
  };
});
