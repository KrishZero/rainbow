(function(){
	'use strict';
	var residential = angular.element('#btnResidencial');
	var subSections = angular.element('.subContainer-buttons');

	var onResidentialClick = function() {
		subSections.toggle('slow');
	};

	angular.element('.map--rainbow').addClass('scrolloff');

    angular.element('.map-container').on('click', function () {
        angular.element('.map--rainbow').removeClass('scrolloff');
    });

    angular.element('.map--rainbow').mouseleave(function () {
        angular.element('.map--rainbow').addClass('scrolloff'); 
    });

	residential.on('click', onResidentialClick);

	angular.element('#lightSlider').lightSlider({
		gallery: true,
		item: 1,
		slideWidth: 700,
		loop:true,
		slideMargin: 0,
		thumbItem: 4
	});

    angular.element('#Container').mixItUp();

	angular.element('#contactform').submit(function (event) {
        var SELF = angular.element(this);

        // Disable the form temporarily
        angular.element(this).find('input[type=submit]').attr({disabled:true});

        // Send the ajax request
        angular.element.ajax({
            url: 'contact.php',
            type: 'POST',
            data: angular.element(this).serialize(),
            success: function (data) {
                // If the email was sent "successfully" reset the form and tell the user.
                if (data === 'OK') {
                    //alert('El correo se envio correctamente.');
                    $(SELF).trigger('reset');
                } else {
                    // If there was an error, tell the user what happened.
                    //alert(data); // Nice, uh?
                }

                angular.element(SELF).find('input[type=submit]').removeAttr('disabled');
            }
        });

        // Prevent a page reload, what else would we use ajax for, right?
        event.preventDefault();
        return false;
    });
})();