app.controller('ListCtrl', ['bookServices', function(bookServices) {
    this.title = "MY WISH LIST";
    this.items = [];
    var that=this;
    bookServices.getItems()
    	.success(function(data, status, headers, config) {
    		that.items=data.buyTable;
    		console.log(that.items);
        })
        .error(function(data, status, headers, config) {

        });
}]);
