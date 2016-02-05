app.controller('mainController',['$scope', 'shoppingService', '$http','$location', function($scope, shoppingService, $http, $location){

	$http.get('../data.json')
	.then(function(response){
		$scope.teaList = response.data
	})

	$scope.shoppingCart = []

	$scope.addToCart = function (item,quantity,image,caffeine,ing,price,rating) {
		$scope.shoppingCart.push({ Name:item,
								  Quantity: quantity,
								  imageUrl: image,
								  Caffeine:caffeine,
								  Ingredients: ing,
								  Price: price,
								  Rating: rating})
	}

	$scope.checkout = function(){
		shoppingService.shoppingCart = $scope.shoppingCart
		$scope.shoppingCart = [];

		$location.path('/shoppingcart')
	}
}]) // END CONTROLLER



app.controller('cartController', function($scope, shoppingService, $http){

	$scope.shoppingCart = shoppingService.shoppingCart;


	$scope.subTotal = function(price,qty){
		return shoppingService.subTotal(price,qty)	
	}


	$scope.remove = function(index){
		$scope.shoppingcart.splice(index, 1);
	};

	$scope.grandTotal = function(cart){
		
		return  shoppingService.grandTotal(cart)
	}



})






