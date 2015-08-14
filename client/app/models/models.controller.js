(function () {
	'use strict';

	var ModelCtrl = function ModelCtrl($scope, RainbowAPI) {
		$scope.products = [];

		$scope.getClass = function (pClass) {
			return pClass.toLowerCase().replace(':', ' ');
		};

		RainbowAPI.getProducts().then(function (data) {
			$scope.products = data;
			console.log(data);

			var residential = angular.element('#btnResidencial');
			var subSections = angular.element('.subContainer-buttons');

			var onResidentialClick = function() {
				subSections.toggle('slow');
			};

			residential.on('click', onResidentialClick);
			angular.element('#Container').mixItUp();
		});
	};

	var ModelsDetail = function ModelsDetail() {
	};

	angular.module('rainbowApp')
		.controller('ModelCtrl', ['$scope','RainbowAPI', ModelCtrl])
		.controller('ModelDetailCtrl', ['$scope', 'RainbowAPI', ModelsDetail]);
})();
