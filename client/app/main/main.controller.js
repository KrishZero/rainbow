(function () {
'use strict';

	angular.module('rainbowApp')
		.controller('MainCtrl', function ($scope, $http) {
			$scope.awesomeThings = [];

			$http.get('/api/things').success(function(awesomeThings) {
				$scope.awesomeThings = awesomeThings;
			});
		});
})();
