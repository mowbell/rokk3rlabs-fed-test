app.controller('ListCtrl', ['$scope', 'bookServices', function($scope, bookServices) {
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
    }

    function _calculateTotalPrice(){
    	$scope.totalPrice=0;
    	$.each($scope.items,function(index,book){

    		if(!book.isAdded())
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
    }
    $scope.addAllBooks = _addAllBooks;
}]);
