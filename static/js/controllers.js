angular.module("MediaSearchControllers", [])

.controller('SearchCtrl', function($scope, $http) {
	

	if($scope.search === undefined) {
		$scope.search = "Sherlock Holmes";
		media();
	}

	var search_term;
	$scope.change = function() {
		media();
		/*if(search_term) {
			clearTimeout(search_term); //User has continued typing
		}
		search_term = setTimeout(fetch, 800);*///User has stopped typing for 800miliseconds, so search begins
	}

	//Choosing from dropdown
	/*$scope.listChoice = function(list_search) {
		
	}

	function selectMedia() {
		if(!$scope.search) {
			console.log("Please type something in the search");
		};
	}*/

	function media() {
		//Search based on 'http://www.omdbapi.com/' specifications
		$http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full").
		success(function(data) {
			$scope.details = data;
		});
		$http.get("http://www.omdbapi.com/?s=" + $scope.search).
		success(function(data) {
			$scope.related = data;
			console.log(data);
		});
	}

	$scope.update = function(movie) {
		$scope.search = movie.Title;
		$scope.change();
	}

	$scope.select = function(){
  		this.setSelectionRange(0, this.value.length);
	}
});
