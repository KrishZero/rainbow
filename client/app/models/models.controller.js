(function () {
	'use strict';

	var ModelCtrl = function ModelCtrl($scope, RainbowAPI) {
		$scope.products = [];

		$scope.getClass = function (pClass) {
			return pClass.toLowerCase().replace(':', ' ');
		};

		RainbowAPI.getProducts().then(function (data) {
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
		$scope.sProd = [{ id: '1' }];

		$scope.convertType = function (type) {
			if (!type) { return ''; }
			return type.replace(':', ' ');
		};

		RainbowAPI.getProducts().then(function (data) {
			for (var i = 0; i < data.length; i++) {
				if (data[i].id === $stateParams.id) {
					$scope.preview = data[i-1];
					$scope.product = data[i];
					if (i === data.length) {
						$scope.last = data[0];
					} else {
						$scope.last = data[i+1];
					}
				}
			}
		});

	};

	angular.module('rainbowApp')
		.controller('ModelCtrl', ['$scope','RainbowAPI', ModelCtrl])
		.controller('ModelDetailCtrl', ['$scope', '$stateParams', 'RainbowAPI', ModelsDetail]);
})();
