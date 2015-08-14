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

	var ModelsDetail = function ModelsDetail() {
		angular.element('#lightSlider').lightSlider({
			gallery: true,
			item: 1,
			slideWidth: 700,
			loop:true,
			slideMargin: 0,
			thumbItem: 4
		});
	};

	angular.module('rainbowApp')
		.controller('ModelCtrl', ['$scope','RainbowAPI', ModelCtrl])
		.controller('ModelDetailCtrl', ['$scope', 'RainbowAPI', ModelsDetail]);
})();
