(function (undefined) {
  "use strict";

  require.config({
    baseUrl: "./js",
    paths: {
      angular: "../vendor/angular/angular",
      "angular-route": "../vendor/angular-route/angular-route",
      "text":'../vendor/text/text'
    },
    shim: {
      angular: {
        exports: "angular",
      },
      "angular-route": {
        deps: ["angular"],
      },
      text: {
          exports: 'text!'
      }
    },
  });

  require(["main"], function () {});
})();
