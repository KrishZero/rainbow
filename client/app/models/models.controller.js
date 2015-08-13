(function () {
	'use strict';

	var ModelCtrl = function ModelCtrl($scope, RainbowAPI) {
		$scope.title = 'example';

		RainbowAPI.getProducts().then(function (data) {
			console.log(data);
		});
	};

	angular.module('rainbowApp')
		.controller('ModelCtrl', ['$scope','RainbowAPI', ModelCtrl]);
})();
