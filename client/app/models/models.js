(function () {
'use strict';

angular.module('rainbowApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('modelos', {
				url: '/modelos',
				templateUrl: 'app/models/models.view.html',
				controller: 'ModelCtrl'
			});
	});

})();
