(function () {
'use strict';

	angular.module('rainbowApp', [
		'ui.router'
	])
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
	});

	angular.element('#lightSlider').lightSlider({
	    gallery: true,
	    item: 1,
	    slideWidth: 700,
	    loop:true,
	    slideMargin: 0,
	    thumbItem: 4
	});

})();

