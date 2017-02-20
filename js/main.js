/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.

//When the document is ready,
$(document).on('ready', function(){
	//create the validation function
	$('#order-form').validate({
		//Tell the submit button to do its job when clicked
		submitHandler: function(form) {
			form.submit();
		},
		//creating rules for submissions.  If the button is clicked and these are not fulfilled, the user will receive a notification.
		rules: {	
			//For example, if
			"your-name": {
				//is less than
				maxlength: 128,
				//characters long, it's all good.  But more than that, it's getting a little weird.
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
			//Keeping the state names to two letters.
			"your-state": {
				maxlength: 2,
				required: true,
				minlength: 2,

			},
			//Keeping the zip codes to 5 digits.
			"your-zip": {
				maxlength: 5,
				required: true,
				minlength: 5,
				number: true
				
			},
			//Keeping names to letters.
			"card-holder-name": {
				maxlength: 128,
				required: true,
				minlength: 2,
				letters: true,
				digits: false
			},
			//Keeping numbers to numbers.
			"card-number": {
				required: true,
				digits: true,
				maxlength: 19
			},
			//And so on.
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
	//Turning on the tooltips.
	$('[data-toggle="tooltip"]').tooltip();
});
