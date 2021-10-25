define(["text!directives/profile/profile-template.html",
"directives/profile/profile-controller"], function (template,controller) {
  return function () {
    return {
      restrict: "E",
      template: template,
      controller: controller,
    };
  };
});
