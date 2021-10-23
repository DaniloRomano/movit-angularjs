define(["text!view.html",
"controller/controller"], function (template,controller) {
  return {
    name: "home",
    url: "/",
    template: template,
    controller: controller
  };
});
