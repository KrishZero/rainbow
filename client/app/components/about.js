(function () {
'use strict';

angular.module('rainbowApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('nosotros', {
				url: '/nosotros',
				templateUrl: 'app/models/about.view.html',
				controller: 'AboutCtrl'
			})
	});

})();
