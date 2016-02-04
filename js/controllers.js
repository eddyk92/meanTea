app.controller('mainController', function($scope, $http, $location){

		$http.get('../data.json')
		.then(function(response){
			$scope.teaList = response.data
		})

	})

	// $scope.teaResult = function(id){
	// 	$http.get('/data.js' + id).then(function(response){
	// 		$scope.foo = response.data;
	// 		$scope.foo1 = id;
	// 		$location.path("/" + id + '/shoppingCart')
	// 	})
	// }
// })

app.controller('secondController', function($scope, $http, $location){
	$scope.teaId = $location.$$path.split('/')[1];

	$http.get('http' + $scope.teaId)
	.then(function(response){
		console.log(response.data)
		$scope.result = response.data;
	})
})
