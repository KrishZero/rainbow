(function() {
	'use strict';

	angular.module('rainbowApp')
		.directive('mixItUp', function($compile, $timeout) {
			return {
				restrict: 'A',
				link: function($scope, element/*, attrs*/) {
					$compile(element.contents())($scope);
					$timeout(function() {
						angular.element(element).mixItUp({
							callbacks: {
								onMixLoad: function() {
									console.log('MixItUp ready!');
								},
								onMixFail: function() {
									console.log('No elements found matching');
								}
							},
							load: {
								filter: 'all'
							},
							debug: {
								enable: true,
								mode: 'verbose'
							}
						});
					});
				}
			};
		});
})();
