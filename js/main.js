/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(document).on('ready', function(){
	$('#order-form').validate({
		submitHandler: function(form) {
			form.submit();
		},
		rules: {	
			"your-name": {
				maxlength: 128,
				required: true,
				minlength: 2
			},
			"your-address": {
				maxlength: 128,
				required: true,
				minlength: 5,

			},
			"your-city": {
				maxlength: 128,
				required: true,
				minlength: 2,

			},
			"your-state": {
				maxlength: 2,
				required: true,
				minlength: 2,

			},
			"your-zip": {
				maxlength: 5,
				required: true,
				minlength: 5,
				number: true
				
			},
			"card-holder-name": {
				maxlength: 128,
				required: true,
				minlength: 2,
				letters: true,
				digits: false
			},
			"card-number": {
				required: true,
				digits: true,
				maxlength: 19
			},
			"cvv": {
				maxlength: 3,
				minlength: 3,
				number: true
			},
			"comments": {
				maxlength: 500
			} 
		}
		
	});
	$('[data-toggle="tooltip"]').tooltip();
});
