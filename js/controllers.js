app.controller('mainController',['$scope', '$http', '$location', function($scope, $http, $location){

		$http.get('../data.json')
		.then(function(response){
			$scope.teaList = response.data
		})

	}])

app.controller('secondController', function($scope, $http, $location){
	$scope.teaId = $location.$$path.split('/')[1];

	$http.get('http' + $scope.teaId)
	.then(function(response){
		console.log(response.data)
		$scope.result = response.data;
	})
})