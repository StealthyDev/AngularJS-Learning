var app = angular.module("RouteExample", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: 'views/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});