// ...


/*
============================================================================
	Live Search
============================================================================
*/

try
{

	$(function(){
	
	// We only need to run this bit on the homepage.
	if ($("html").hasClass("_s1_") || $("html").hasClass("_s1_homepage-dev")) {

		console.log("Activating Live Search...");

		// SmartSuggest
		$('#live_search').smartSuggest({
			src: '/search/live_search',
			minChars: 3
		});
		
		// We don't want the ENTER key to submit the form, but we DO want to return it to the SmartSuggest plugin.
		$('#live_search').keypress(function(event) {
			if (event.keyCode == 13) {
				event.preventDefault();
				return true;
			}
		});

	}
	});

}
catch(err)
{
	window.log("ERROR (Live Search): " + err.message);
}

// ...