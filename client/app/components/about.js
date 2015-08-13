(function () {
'use strict';

angular.module('rainbowApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('about', {
				url: '/nosotros',
				templateUrl: 'app/models/about.view.html',
				controller: 'AboutCtrl'
			})
	});

})();

