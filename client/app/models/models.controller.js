(function () {
	'use strict';

	var ModelCtrl = function ModelCtrl($scope, RainbowAPI) {
		$scope.products = [];

		$scope.getClass = function (pClass) {
			return pClass.toLowerCase().replace(':', ' ');
		};

		RainbowAPI.getProducts().then(function (data) {
			console.log(data);
			$scope.products = data;
		});
	};

	angular.module('rainbowApp')
		.controller('ModelCtrl', ['$scope','RainbowAPI', ModelCtrl]);
})();
