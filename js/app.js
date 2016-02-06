var app = angular.module('teaApp', ['ngRoute']);
	
	app.config(function($routeProvider, $locationProvider){
		$routeProvider
		.when('/',{
			templateUrl: "partials/itemList.html",
			controller: "mainController"
		})
		.when('/shoppingcart', {
			templateUrl: "partials/shoppingCart.html",
			controller: "cartController"
		})
	});


	app.filter('moveDecimal', function(){
		return function(num){
			var newNum = num / Math.pow(10,2);
				return newNum;
		}
	})

	app.filter('checkStock', function(){
		return function(str){
			if (str){
				return 'Yes'
			} else {
				return 'No'
			}
		}
	})
	
