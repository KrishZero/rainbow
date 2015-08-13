(function () {
'use strict';

	angular.module('rainbowApp')
		.factory('RainbowAPI', ['$http', '$q',
			function ($http, $q) {
				var rainbow = {
					products: []
				};

				var handleSuccess = function (response) {
					return response.data;
				};

				var handleError = function (response) {
					if (!angular.isObject( response.data ) || !response.data.message) {
						return $q.reject( 'An unknown error occurred.');
					}
					return $q.reject(response.data.message);
				};

				rainbow.getProducts = function () {
					var request = $http({
						method: 'GET',
						url   : 'http://api.rainbow.agenciaparadoja.com/v1/products'
					});
					return (request.then(handleSuccess, handleError));
				};

				return rainbow;
			}
		]);
})();
