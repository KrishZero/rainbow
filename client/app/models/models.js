(function () {
'use strict';

angular.module('rainbowApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('modelos', {
				url: '/modelos',
				templateUrl: 'app/models/models.view.html',
				controller: 'ModelCtrl'
			})
			.state('modelosDetail', {
				url: '/modelos/:id',
				templateUrl: 'app/models/modelDetail.view.html',
				controller: 'ModelDetailCtrl'
			});
	});

})();
