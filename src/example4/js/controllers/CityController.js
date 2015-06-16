app.controller("CityController", ["$scope", 'cities', "$routeParams", function ($scope, cities, $routeParams) {
    cities.success(function (cities) {
        $scope.city = cities[$routeParams.id - 1];
    });
}]);