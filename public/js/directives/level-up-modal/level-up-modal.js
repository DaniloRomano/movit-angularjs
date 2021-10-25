define([
  "text!directives/level-up-modal/level-up-modal.template.html"
], function (template) {
  return function () {
    return {
      restrict: "E",
      template: template
    };
  };
});
