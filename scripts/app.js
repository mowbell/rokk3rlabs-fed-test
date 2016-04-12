/**
 * AngularJS Rokk3r Labs Test
 * @author 
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('testAngularWebApp', [
    'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller:'ListCtrl'
        })
        .when('/completed', {
			templateUrl: 'views/buy_complete.html',
			controller:'CompletedListCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);
