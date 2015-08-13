(function () {
'use strict';

	angular.module('rainbowApp')
		.controller('AboutCtrl', function ($scope, $http) {
			$scope.awesomeThings = [];

			$http.get('/api/things').success(function(awesomeThings) {
				$scope.awesomeThings = awesomeThings;
			});
		});
})();
