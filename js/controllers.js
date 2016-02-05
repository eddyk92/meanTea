app.controller('mainController',['$scope', 'shoppingService', '$http','$location', function($scope, shoppingService, $http, $location){



	$http.get('../data.json')
	.then(function(response){
		$scope.teaList = response.data
	})

	$scope.shoppingCart = []

	$scope.addToCart = function (item, quantity) {
		$scope.shoppingCart.push({[item] : quantity})

		console.log(quantity, "quantity");
		console.log(item, "item");
		console.log($scope.shoppingCart);
	}

	$scope.checkout = function(){
		shoppingService.shoppingCart = $scope.shoppingCart
		console.log('cart:', $scope.shoppingCart)
		console.log('ServiceBag:', shoppingService.shoppingCart)
		$scope.shoppingCart = [];

		$location.path('/shoppingcart')
	}
}]) // END CONTROLLER



app.controller('cartController', function($scope, shoppingService, $http){
	$scope.shoppingCart = shoppingService.shoppingCart;

});








