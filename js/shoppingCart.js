// function shoppingCart(cartName){
// 	this.cartName = cartName;
// 	this.clearCart = false;
// 	this.checkoutParameters = {};
// 	this.teaList = [];
// 	this.loadTea ();

// 	var self = this;

// 	$(window).unload(function(){
// 		if(self.clearCart){
// 			self.clearTea();
// 		}
// 		self.saveTea();
// 		self.clearCart = false;
// 	});
// }

// shoppingCart.prototype.loadTea = function(){
// 	var items = localStorage != null ? localStorage[this.cartName + "_items"] : null;
// 	if(items != null && JSON != null){
// 		try {
// 			var items = JSON.parse(items);
// 			for (var i = 0; i<items.length; i++){
// 				var item = items [i];
// 				if(item.sku != null && item.name != null && item.price != null && item.qty != null){

// 					item = new cartItem(item.sku, item.name, item.price, item.qty);
// 					this.items.push(item);
// 				}
// 			}
// 		}
// 		catch (err){
// 		}
// 	}
// }
// shoppingCart.prototype.saveTea = function (){
// 	if(localStorage != null && JSON != null) {
// 		localStorage[this.cartName + "_items"] = JSON.stringify(this.items);
// 	}
// }

// shoppingCart.prototype.getTotalPrice = function (sku) { 
// var total = 0; 
// for (var i = 0; i < this.items.length; i++) { 
// 	var item = this.items[i]; 
// 	if (sku == null || item.sku == sku) { 
// 	total += this.toNumber(item.quantity * item.price); 
// 	}
// } 
// return total; 
// } 


// shoppingCart.prototype.clearItems = function () { 
// 	this.items = []; 
// 	this.saveItems(); }







