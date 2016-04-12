app.factory('bookServices', ['$http', function($http) {
    function _getItems() {
    	return $http.get("api/buytable.json");
    }
    return { 
    	getItems: _getItems 
    };
}]);
