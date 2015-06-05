angular.module('MediaSearchServices', ['ngResource'])

	.factory('movies_shows',
		function($resource) {
			return $resource('http://www.omdbapi.com/?');
		});