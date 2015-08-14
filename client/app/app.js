(function () {
'use strict';

	angular.module('rainbowApp', [
		'ui.router'
	])
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
	});

})();

