angular.module('MediaSearchServices', ['ngResource'])

	.factory('movies_shows',
		function($resource) {
			return $resource('/api/movies');
		})

	.factory('media_search',
		function($http) {
			return $http.get('http://www.omdbapi.com/?');
		});