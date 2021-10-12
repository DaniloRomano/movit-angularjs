angular
  .module("movit")
  .controller("profileController", [
    "$scope",
    function ($scope) {
      $scope.level = 0;
    },
  ])
  .directive("myProfile", function () {
    return {
      restrict: "E",
      templateUrl: "js/home/components/templates/profile-template.html",
      controller: "profileController",
    };
  });
