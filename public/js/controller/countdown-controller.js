define([], function () {
  return [
    "$scope",
    function ($scope) {
      $scope.minuteLeft = 0;
      $scope.minuteRight = 5;
      $scope.secondRight = 4;
      $scope.secondLeft = 5;
      $scope.resetCountdown=function(){};
      $scope.startCountdown=function(){};
      $scope.isActive=false;
    }
  ];
});
