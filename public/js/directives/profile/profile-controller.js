define([], function () {  
    return [
      "$scope",
      "$location",
      function ($scope,$location) {
        $scope.level = 0;
        $scope.nome=$location.search().nome;
        $scope.username=$location.search().username;
      }
    ];  
});
