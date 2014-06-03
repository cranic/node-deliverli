window.db = new PouchDB('projects');
window.app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
    $scope.libraries = [];
    $scope.projects = [];

    $http.get('//api.jsdelivr.com/v1/jsdelivr/libraries').then(function(res){
        $scope.libraries = res.data;
    });

    db.allDocs({include_docs: true, descending: true}, function(err, docs){
        if(err)
            throw err;

        if(docs && docs.rows.length)
            $scope.projects = docs.rows;
    });
}]);

angular.bootstrap(document, ['app']);
