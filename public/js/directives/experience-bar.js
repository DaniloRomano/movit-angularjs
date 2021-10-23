// angular
//   .module("movit")
//   .controller("experienceBarController", ["$scope", function ($scope) {}])
//   .directive("experienceBar", function () {
//     return {
//       restrict: "E",
//       templateUrl: "js/home/components/templates/experience-bar-template.html",
//       controller: "experienceBarController",
//     };
//   });
define([
  "text!templates/experience-bar-template.html",
], function (template) {
  return function(){
    return {
      restrict: "E",
      template: template,
      // controller: "experienceBarController",
    };
  } 
});
