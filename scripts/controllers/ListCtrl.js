app.controller('ListCtrl', ['$scope', '$location','bookServices', function($scope, $location, bookServices) {
    $scope.title = "MY WISH LIST";
    $scope.items = [];
    $scope.totalPrice=0;
   
    bookServices.getItems()
        .then(function(items) {
            $scope.items=items;
            _calculateTotalPrice();
        });

    function _buyBook(book) {
    	book.setAsAdded();
    	$scope.totalPrice-=book.getPrice();
    	$location.path("/completed");
    }

    function _calculateTotalPrice(){
    	$scope.totalPrice=0;
    	$.each($scope.items,function(index,book){

    		if(!book.isAdded() && !book.removed)
				$scope.totalPrice+=book.getPrice();
		});
    }
    $scope.buyBook = _buyBook;
    _calculateTotalPrice();
    

    function _addAllBooks(){
    	$.each($scope.items,function(index,book){
			book.setAsAdded();
		});	
		_calculateTotalPrice();

		$location.path("/completed");
    }
    $scope.addAllBooks = _addAllBooks;

    function _removeBook(book) {
    	book.removed=true;
    	$scope.totalPrice-=book.getPrice();
    }
    $scope.removeBook = _removeBook;
}]);
