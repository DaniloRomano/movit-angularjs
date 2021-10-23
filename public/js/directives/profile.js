define(["text!templates/profile-template.html"], function (template) {
  return function () {
    return {
      restrict: "E",
      template: template,
      controller: "profileController",
    };
  };
});
