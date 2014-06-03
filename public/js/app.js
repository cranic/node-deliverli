var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.controller('MainCtrl', ['$scope', '$http'], function($scope, $http){
    console.log('Hello world!');
});

angular.bootstrap(document, ['app']);
