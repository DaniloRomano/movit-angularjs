// angular.module('movit').controller('homeController',['$scope',function($scope){

// }]);

function homeController(){
    return ['$scope',function($scope){
        $scope.msg='teste';
    }];
}

export default homeController;