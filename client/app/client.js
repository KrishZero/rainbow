'use strict';

$(function(){
	var residential = $('#btnResidencial');
	var subSections = $('.subContainer-buttons');

	var onResidentialClick = function() {
		subSections.toggle('slow');
	};

	$('.map--rainbow').addClass('scrolloff'); 
    
    $('.map-container').on('click', function () {
        $('.map--rainbow').removeClass('scrolloff'); 
    });

    $(".map--rainbow").mouseleave(function () {
        $('.map--rainbow').addClass('scrolloff'); 
    });

	residential.on('click', onResidentialClick);


	$('#lightSlider').lightSlider({
	    gallery: true,
	    item: 1,
	    slideWidth: 700,
	    loop:true,
	    slideMargin: 0,
	    thumbItem: 4
	});

	$("#contactform").submit(function (event) {
        var SELF = $(this);

        // Disable the form temporarily
        $(this).find("input[type=submit]").attr({disabled:true});
        
        // Send the ajax request
        $.ajax({
            url: 'contact.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function (data) {
                // If the email was sent "successfully" reset the form and tell the user.
                if (data == "OK") {
                    alert("El correo se envio correctamente.");
                    $(SELF).trigger("reset");
                } else {
                    // If there was an error, tell the user what happened.
                    alert(data); // Nice, uh?
                }

                $(SELF).find("input[type=submit]").removeAttr("disabled");
            }
        });

        // Prevent a page reload, what else would we use ajax for, right?
        event.preventDefault();
        return false;
    });

	
});