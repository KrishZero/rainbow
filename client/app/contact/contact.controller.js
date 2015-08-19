(function () {
'use strict';

	var ContactCtrl = function ($scope, $http, CartService) {
		$scope.products = CartService.items;

		$scope.remove = function (id) {
			CartService.remove(id);
		};

		$scope.contact = function () {
			var data = [];
			CartService.items.forEach(function (item) {
				data.push(item.name);
			});

			var request = $http({
				method: 'POST',
				url   : 'contact.php',
				data  : data
			});
			request.then(function (response) {
				console.log(response);
			}, function (error) {
				console.log(error);
			});
		};
	};

	angular.module('rainbowApp')
		.controller('ContactCtrl', ['$scope', '$http', 'CartService', ContactCtrl]);
})();
