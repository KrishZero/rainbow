(function () {
'use strict';

angular.module('rainbowApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'app/main/main.view.html',
				controller: 'MainCtrl'
			});
	});
})();