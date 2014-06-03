var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('https://api.jsdelivr.com/v1/jsdelivr/libraries').then(function(res){
        console.log(res.data.length);
    });
}]);

angular.bootstrap(document, ['app']);
