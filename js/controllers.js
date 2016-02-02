app.controller('mainController', function($scope, $http, $location){

	$scope.teaSearch = function(){
		$http.get("" + $scope.tea + '&plot=short&r=json')
		.then(function(response){
			console.log(response.data)
			$scope.data = response.data.Search 
		})
	}

	$scope.teaResult = function(id){
		$http.get('http://' + id).then(function(response){
			$scope.foo = response.data;
			$scope.foo1 = id;
			$location.path("/" + id + '/shoppingCart')
		})
	}
})

app.controller('secondController', function($scope, $http, $location){
	$scope.teaId = $location.$$path.split('/')[1];

	$http.get('http' + $scope.teaId)
	.then(function(response){
		console.log(response.data)
		$scope.result = response.data;
	})
})