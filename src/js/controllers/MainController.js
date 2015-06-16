app.controller("MainController", ["$scope", function ($scope) {
    $scope.title = "Top books";
    $scope.promo = "Buy 1 get 1 free!!";

    $scope.products = [{
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014', '03', '08'),
        likes: 0,
        dislikes: 0
    }, {
        name: 'Program or be Programmed',
        price: 8,
        pubdate: new Date('2013', '08', '01'),
        likes: 0,
        dislikes: 0
    }, {
        name: 'Introduction to Computers',
        price: 5,
        pubdate: new Date('2004', '08', '01'),
        likes: 0,
        dislikes: 0
    }, {
        name: 'Advanced AngularJS tutorial',
        price: 49.99,
        pubdate: new Date('2015', '02', '01'),
        likes: 0,
        dislikes: 0
    }];

    $scope.plusOne = function (index) {
        $scope.products[index].likes += 1;
        $scope.products[index].name = $scope.products[index].name + " :)"

        if (index > 0) {
            $scope.products[0].name = $scope.products[0].name + " :("
        }
    };

    $scope.minusOne = function (index) {
        $scope.products[index].dislikes += 1;
    };
}]);