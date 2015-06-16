var app = angular.module("RouteExample", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: 'views/home.html'
        })
        .when('/cities', {
            controller: 'CityListController',
            templateUrl: 'views/cities.html'
        })
        .when('/city/:id', {
            controller: 'CityController',
            templateUrl: 'views/city.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});