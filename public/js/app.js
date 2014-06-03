var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
    var libraries = [];
    var projects = [];
    $http.get('//api.jsdelivr.com/v1/jsdelivr/libraries').then(function(res){
        libraries = res.data;
    });
}]);

angular.bootstrap(document, ['app']);
