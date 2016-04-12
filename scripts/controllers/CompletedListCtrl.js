app.controller('CompletedListCtrl', ['$scope', '$location','bookServices', function($scope, $location, bookServices) {
    $scope.title = "BOOKS YOU'VE JUST PURSHASED";
    $scope.items = [];
    $scope.totalPrice=0;
   
    bookServices.getItems()
        .then(function(items) {
            $scope.items=items;
            _calculateTotalPrice();
        });

    function _calculateTotalPrice(){
    	$scope.totalPrice=0;
    	$.each($scope.items,function(index,book){

    		if(book.isAdded())
				$scope.totalPrice+=book.getPrice();
		});
    }
    _calculateTotalPrice();

}]);
