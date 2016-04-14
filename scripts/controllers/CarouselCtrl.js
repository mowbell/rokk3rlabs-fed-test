app.controller('CarouselCtrl', ['$scope','carouselServices', function($scope, carouselServices) {
    $scope.items=[];

    carouselServices.getItems()
        .then(function(items) {
            $scope.items=items;
            $(document).ready(function() {
                $('#home-carousel').carousel();
            });
        });

}]);
