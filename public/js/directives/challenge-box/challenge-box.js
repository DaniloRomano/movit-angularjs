define([
  "text!directives/challenge-box/challenge-box.template.html",
], function (template) {
  return function () {
    return {
      restrict: "E",
      template: template,
    };
  };
});
