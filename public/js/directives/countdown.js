define(["text!templates/countdown-template.html"], function (
  template
) {
  return function () {
    return {
      restrict: "E",
      template: template,
      controller: "countdownController"
    };
  };
});
