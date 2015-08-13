(function () {
'use strict';

angular.module('rainbowApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('contacto', {
				url: '/contacto',
				templateUrl: 'app/contact/contact.view.html',
				controller: 'ContactCtrl'
			})
	});

})();

