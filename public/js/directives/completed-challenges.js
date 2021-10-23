define([
  "text!templates/completed-challenges-template.html",
  "controller/completed-challenges-controller"
], function (template,controller) {
  return function () {
    return {
      restrict: "E",
      template: template,
      controller: controller
    };
  };
});
