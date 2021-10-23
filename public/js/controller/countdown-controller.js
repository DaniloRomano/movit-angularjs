define([], function () {
  function startCountdown($scope) {
    return function () {
      $scope.isActive = !$scope.isActive;
    };
  }

  function resetCountdown($scope) {
    return function () {
      $scope.isActive = !$scope.isActive;
    };
  }
  return [
    "$scope",
    function ($scope) {
      $scope.minuteLeft = 0;
      $scope.minuteRight = 5;
      $scope.secondRight = 4;
      $scope.secondLeft = 5;
      $scope.resetCountdown = resetCountdown($scope);
      $scope.startCountdown = startCountdown($scope);
      $scope.isActive = false;
    }
  ];
});
