define([],function(){
    function github($scope,$window){
        return function(){
            $window.open("https://github.com/login/oauth/authorize?client_id=7fd147759a041a9bf61e&login=daniloapromano@live.com&scope=user&redirect_uri=http://localhost:8080/")
        };
    }


    return ['$scope','$window','$location','$http',function($scope,$window,$location,$http){        
        $scope.github=github($scope,$window);
        var code=$location.search().code;
        if (code){
            console.log("teste");
            $http.post("https://github.com/login/oauth/access_token?client_id=7fd147759a041a9bf61e&code="+code+"&redirect_url=http://localhost:3000/")
            .then(function(response){
                console.log(response);
            });
        }
    }];
});