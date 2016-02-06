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
			var num = parseInt(qty)
			var sub = price * num;
			return price * num;
		},
		grandTotal: function(cart){
			return cart.reduce(function(total,current){
				var num = parseInt(current.Quantity)
				var sub = current.Price * num;
				total += sub
				return total;
			}, 0)
		}
	}

})