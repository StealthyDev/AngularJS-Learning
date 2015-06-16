var app = angular.module("RouteExample", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: 'views/home.html'
        })
        .when('/cities', {
            controller: 'CityController',
            templateUrl: 'views/cities.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});