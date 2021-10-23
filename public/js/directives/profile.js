define(["text!templates/profile-template.html",
"controller/profile-controller"], function (template,controller) {
  return function () {
    return {
      restrict: "E",
      template: template,
      controller: controller,
    };
  };
});
