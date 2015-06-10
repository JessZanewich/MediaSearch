'use strict';

angular.module('MediaSearchApp', ['ngRoute', 'MediaSearchControllers'])

	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
				when('/', {
					templateUrl: '../static/partials/home.html'
				}).
				when('/search', {
					templateUrl: '../static/partials/search.html',
					controller: "SearchCtrl"
				}).
				when('/news', {
					templateUrl: '/static/partials/news.html',
					controller: "NewsCtrl"
				}).
				otherwise({
					redirectTo: '/'
				});
		}]);