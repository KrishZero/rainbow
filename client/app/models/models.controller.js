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

			var residential = angular.element('#btnResidencial');
			var subSections = angular.element('.subContainer-buttons');

			var onResidentialClick = function() {
				subSections.toggle('slow');
			};

			residential.on('click', onResidentialClick);
			angular.element('#Container').mixItUp();
			residential.click();
		});
	};

	var ModelsDetail = function ModelsDetail($scope, $stateParams, RainbowAPI) {
		RainbowAPI.getProducts().then(function (data) {
			data.forEach(function (p) {
				if (p.id === $stateParams.id) {
					$scope.product = p;
				}
			});
		});

	};

	angular.module('rainbowApp')
		.controller('ModelCtrl', ['$scope','RainbowAPI', ModelCtrl])
		.controller('ModelDetailCtrl', ['$scope', '$stateParams', 'RainbowAPI', ModelsDetail]);
})();
