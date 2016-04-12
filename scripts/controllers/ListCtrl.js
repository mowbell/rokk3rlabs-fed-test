app.controller('ListCtrl', ['bookServices', function(bookServices) {
    this.title = "HEY";
    this.items = [];
    var that=this;
    bookServices.getItems()
    	.success(function(data, status, headers, config) {
    		that.items=data.buyTable;
        })
        .error(function(data, status, headers, config) {

        });
}]);
