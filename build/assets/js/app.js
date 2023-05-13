$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	// $(form).submit(function(e) {
	// 	var obj = new XMLHttpRequest();
	// 	obj.onreadystatechange = function () {
	// 		if(obj.readyState == 4) {
	// 			if(obj.status == 200) {
	// 				var res = JSON.parse(obj.responseText);
	// 				alert(res.message);
	// 			}
	// 			else {
	// 				alert("XMLHttp Status: " + obj.status + "; " + obj.statusText);
	// 			}
	// 		}
	// 	};
	// 	obj.open("post", form.action, true);
	// 	obj.setRequestHeader("Content-Type", "application/json");
	// 	obj.send(JSON.stringify({ name: form.name.value, email: form.email.value, message: form.message.value }));
	// 	return false;
	// })

		// // Stop the browser from submitting the form.
		// e.preventDefault();


	// 	// Serialize the form data.
	// 	var formData = $(form).serialize();

	// 	console.log("f3", formData)

	// 	// Submit the form using AJAX.
	// 	$.ajax({
	// 		type: 'POST',
	// 		url: $(form).attr('action'),
	// 		data: formData
	// 	})
	// 	.done(function(response) {
	// 		// Make sure that the formMessages div has the 'success' class.
	// 		$(formMessages).removeClass('error');
	// 		$(formMessages).addClass('success');

	// 		// Set the message text.
	// 		$(formMessages).text(response);

	// 		// Clear the form.
	// 		$('#name').val('');
	// 		$('#email').val('');
	// 		$('#subject').val('');
	// 		$('#message').val('');
	// 	})
	// 	.fail(function(data) {
	// 		// Make sure that the formMessages div has the 'error' class.
	// 		$(formMessages).removeClass('success');
	// 		$(formMessages).addClass('error');

	// 		// Set the message text.
	// 		if (data.responseText !== '') {
	// 			$(formMessages).text(data.responseText);
	// 		} else {
	// 			$(formMessages).text('Oops! An error occured and your message could not be sent.');
	// 		}
	// 	});

	// });

});
