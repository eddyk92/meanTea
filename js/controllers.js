app.controller('mainController',['$scope', 'shoppingCart', '$http', function($scope, shoppingCart, $http){

	$http.get('../data.json')
	.then(function(response){
		$scope.teaList = response.data
	})

	$scope.addItem = function(key,value){

	}

	$scope.addToCart = function (quantity, item) {
		console.log(quantity, "quantity");
		console.log(item, "item");
	}
}]) // END CONTROLLER



app.controller('cartController', function($scope, $http){

})