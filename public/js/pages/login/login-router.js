define(["text!pages/login/view.html", "pages/login/controller"], function (
  view,
  controller
) {
  return {
    name: "login",
    url: "/login",
    template: view,
    controller: controller
  };
});
