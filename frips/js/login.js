$(document).ready(function() {
	$("#fb-login-btn").click(function () {
		FB.login(function(response){
			if (response.status === 'connected') {
				$(location).attr('href','/');
	    	    return false;
			} else {
				console.log('Not connected to Facebook');
			}
		});
	});
});