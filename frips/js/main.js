$(document).ready(function() {
    var cities = ['New York', 'Boston', 'Chicago', 'Washington', 'Atlanta', 'Miami', 'New Orleans',
                  'Phoenix', 'Denver', 'Minneapolis', 'Detroit', 'Philadelphia', 'San Francisco',
                  'Los Angeles', 'Las Vegas', 'San Diego', 'Seattle', 'Portland', 'Dallas', 'Houston',
                  'Detroit', 'Charlotte', 'Austin', 'Honolulu', 'Anchorage', 'Nashville', 'Baltimore'];
    
    window.fbAsyncInit = function() {
    	FB.init({
    		appId: '752147971494794',
    		status : true, // check login status
    		cookie: true, // enable cookies to allow the server to access the session
    		xfbml: true,
    		version: 'v2.0' // use version 2.0
    	});
    	
    	FB.getLoginStatus(function(response) {
        	if (response.status === 'connected') {
    	      // Logged into your app and Facebook.
        		testAPI();
        		setLocations();
    	    } else {
    	    	$(location).attr('href','login.html');
    	    	return false;
    	    }
        });

    	// response.authResponse.userID
    	// response.authResponse.accessToken
    };
    
    function testAPI() {
    	console.log('Welcome!  Fetching your information.... ');
    	FB.api('/me', function(response) {
    		console.log('Successful login for: ' + response.name);
    		console.log('Thanks for logging in, ' + response.name + '!');
	    });
	}
    
    function setLocations() {
		$("#autocomplete").on("filterablebeforefilter", function (e, data) {
	        var $ul = $(this);
	        $.each(cities, function (i, city) {
	        	$ul.append($("<li>").append($("<a>").attr("href", "#").append(city).click(function () {
	        		console.log("Going to " + city);
	        	})));
	        });
	        $ul.listview("refresh");
	        $ul.trigger("updatelayout");
	    });
    }
});