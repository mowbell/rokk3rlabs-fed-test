app.filter('bookPriceFltr', ['$filter',function($filter) {
    return function(value) {
        return $filter('currency')(value, "$").replace('.',',');
    };
}]);
