app.factory('cities', ['$http', function ($http) {
    return $http.get('http://localhost:63342/AngularJS-Learning/src/example4/data/cities.json')
        .success(function (data) {
            return data;
        }).error(function (err) {
            return err;
        });
}]);