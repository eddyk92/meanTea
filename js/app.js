var app = angular.module('teaApp', ['ngRoute']);
	
	app.config(function($routeProvider, $locationProvider){
		$routeProvider
		.when('/',{
			templateUrl: "partials/itemList.html",
			controller: "mainController"
		})
		.when('/:teaId/shoppingCart', {
			templateUrl: "partials/shoppingCart.html",
			controller: "secondController"
		})
	});

	