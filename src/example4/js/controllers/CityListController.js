app.controller("CityListController", ["$scope", 'cities', function ($scope, cities) {
    cities.success(function (cities) {
        $scope.cities = cities;
    });
}]);
