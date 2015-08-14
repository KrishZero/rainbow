(function () {
'use strict';

	angular.module('rainbowApp')
		.controller('MainCtrl', function ($scope, $http) {
			$scope.awesomeThings = [];

			$http.get('/api/things').success(function(awesomeThings) {
				$scope.awesomeThings = awesomeThings;
			});
		});

		angular.element('.map--rainbow').addClass('scrolloff'); 
    
	    angular.element('.map-container').on('click', function () {
	        $('.map--rainbow').removeClass('scrolloff'); 
	    });

	    angular.element(".map--rainbow").mouseleave(function () {
	        angular.element('.map--rainbow').addClass('scrolloff'); 
	    });
})();
