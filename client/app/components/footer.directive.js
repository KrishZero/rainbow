(function() {
  'use strict';

  angular
    .module('rainbowApp')
    .directive('acmeFooter', acmeFooter);

  /** @ngInject */
  function acmeFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer.html',
      scope: {
          creationDate: '='
      },
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController() {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
    }
  }

})();
