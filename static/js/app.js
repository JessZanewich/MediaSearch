'use strict';

angular.module('MediaSearchApp', ['ngRoute', 'MediaSearchControllers'])

	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
				when('/', {
					templateUrl: '../static/partials/home.html',
					controller: "NewsCtrl"
				}).
				when('/search', {
					templateUrl: '../static/partials/search.html',
					controller: "SearchCtrl"
				}).
				otherwise({
					redirectTo: '/'
				});
		}]);