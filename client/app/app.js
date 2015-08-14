(function () {
'use strict';

	angular.module('rainbowApp', [
		'ui.router',
		'angular-flexslider'
	])
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
	});

})();

