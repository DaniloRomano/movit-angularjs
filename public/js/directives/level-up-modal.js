define([
  "text!templates/level-up-modal.template.html"
], function (template) {
  return function () {
    return {
      restrict: "E",
      template: template
    };
  };
});
