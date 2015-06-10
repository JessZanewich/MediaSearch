angular.module("MediaSearchControllers", [])

.controller('SearchCtrl', function($scope, $http) {
	var search_term;

	if($scope.search === undefined) {
		$scope.search = "Sherlock Holmes";
		//findMedia();
	}

	$scope.change = function() {
		findMedia();
		/*if(search_term) {
			clearTimeout(search_term); //User has continued typing
		}

		search_term = setTimeout(findMedia, 1200);*/ //User has stopped typing for 800miliseconds, so search begins
	}

	function findMedia() {
		//Search based on 'http://www.omdbapi.com/' specifications
		$http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true").
		success(function(data) {
			$scope.information = data;
			console.log(data);
		});
		$http.get("http://www.omdbapi.com/?s=" + $scope.search).
		success(function(data) {
			$scope.search = data;
			console.log(data);
		});
	}

	function selectMedia() {
		if(!$scope.search) {
			console.log("Please type something in the search");
		};
	}

	function searchData(search) {
		$scope.search = search;
		$http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true").
		success(function(data) {
			$scope.information = data;
			console.log(data);
		});
		$http.get("http://www.omdbapi.com/?s=" + $scope.search).
		success(function(data) {
			$scope.search = data;
			console.log(data);
		});
	}

	/*$scope.retrieve = function(movie) {
		$scope.titles = movie.Title;
		$scope.change();
	}*/

	$scope.select = function(){
  		this.setSelectionRange(0, this.value.length);
	}
});
