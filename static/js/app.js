'use strict';

angular.module('MediaSearchApp', ['ngRoute'])

	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
				when('/', {
					templateUrl: '../static/partials/home.html'
				}).
				when('/news', {
					templateUrl: '/static/partials/about.html',
					controller: "AboutCtrl"
				}).
				when('/search', {
					templateUrl: '/static/partials/search.html',
					controller: "SearchCtrl"
				}).
				otherwise({
					redirectTo: '/'
				});
		}]);