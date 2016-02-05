app.service('currencyService', function(){

	return {
		moveDecimal: function(num){
		}
	}
})

app.service('shoppingService', function(){

	var shoppingCart = [];

	return {
		subTotal: function(price,qty){
			console.log('hi', price, qty);
			var num = Number.parseInt(qty);
			return price * num;
		}
	}

})