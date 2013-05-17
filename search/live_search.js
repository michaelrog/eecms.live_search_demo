{!--
=======================================================

This template runs several incarnations of Low Search and assembles the JSON object to return to the SmartSuggest plugin.

The returned blob is an array of objects:

[
	{
		"header":
		{
				"title": String,
				"num": int (unused),
				"limit": int (unused)
		},
		"data":
		[
			{
				"primary": String,
				"secondary": String (unused),
				"url": String (URL)
			}
		]	
	}
]

=======================================================
--}



[

{!-- SEARCH RESULTS displayed above native results --}

{exp:low_search:results collection="search_results" limit="5" log_search="yes" loose_ends="both" search:result-display_location="above"}
{
	"header": {
		"title": {if result-search_bar_title}{exp:ce_str:ing json_encode}{result-search_bar_title}{/exp:ce_str:ing}{if:else}""{/if},
		"num": "1",
		"limit": "1"
	},

	"data": [
		{
			"primary": {if result-search_bar_content}{exp:ce_str:ing json_encode}{result-search_bar_content}{/exp:ce_str:ing}{if:else}""{/if},
			"secondary": "",
			"url": ""
		}
	]
},
{/exp:low_search:results}

{!-- TENANTS: Dining --}

{
	"header": {
		"title": "Dining",
		"num": "5",
		"limit": "5"
	},

	"data": [

{exp:low_search:results collection="tenants" category="8" limit="5" backspace="2" loose_ends="both"}
		{
			"primary": {exp:ce_str:ing json_encode}{title}{/exp:ce_str:ing},
			"secondary": "",
			"url": "{page_url}"
		},
{/exp:low_search:results}

	]

},

{!-- TENANTS: Entertainment + Lifestyle --}

{
	"header": {
		"title": "Entertainment + Lifestyle",
		"num": "5",
		"limit": "5"
	},

	"data": [

{exp:low_search:results collection="tenants" category="7" limit="5" backspace="2" loose_ends="both"}
		{
			"primary": {exp:ce_str:ing json_encode}{title}{/exp:ce_str:ing},
			"secondary": "",
			"url": "{page_url}"
		},
{/exp:low_search:results}

	]

},

{!-- TENANTS: Office Tenants --}

{
	"header": {
		"title": "Office",
		"num": "3",
		"limit": "3"
	},

	"data": [

{exp:low_search:results collection="tenants" category="9" limit="5" backspace="2" loose_ends="both"}
		{
			"primary": {exp:ce_str:ing json_encode}{title}{/exp:ce_str:ing},
			"secondary": "",
			"url": "{page_url}"
		},
{/exp:low_search:results}

	]

},

{!-- TENANTS: Hotel Tenants --}

{
	"header": {
		"title": "Hotel",
		"num": "3",
		"limit": "3"
	},

	"data": [

{exp:low_search:results collection="tenants" category="10" limit="5" backspace="2" loose_ends="both"}
		{
			"primary": {exp:ce_str:ing json_encode}{title}{/exp:ce_str:ing},
			"secondary": "",
			"url": "{page_url}"
		},
{/exp:low_search:results}

	]

},

{!-- EVENTS + OFFERS --}

{
	"header": {
		"title": "Events + Offers",
		"num": "4",
		"limit": "4"
	},

	"data": [

{exp:low_search:results collection="calendar_events" limit="4" backspace="2" loose_ends="both"}
		{
			"primary": {exp:ce_str:ing json_encode}{title}{/exp:ce_str:ing},
			"secondary": "",
			"url": "{page_url}"
		},
{/exp:low_search:results}

	]

},

{!-- PAGES --}

{
	"header": {
		"title": "Pages",
		"num": "3",
		"limit": "3"
	},

	"data": [

{exp:low_search:results collection="content_pages" limit="3" backspace="2" loose_ends="both"}
		{
			"primary": {exp:ce_str:ing json_encode}{title}{/exp:ce_str:ing},
			"secondary": "",
			"url": "{page_url}"
		},
{/exp:low_search:results}

	]

},

{!-- NEWS --}

{
	"header": {
		"title": "News",
		"num": "3",
		"limit": "3"
	},

	"data": [

{exp:low_search:results collection="news" limit="3" backspace="2" loose_ends="both"}
		{
			"primary": {exp:ce_str:ing json_encode}{title}{/exp:ce_str:ing},
			"secondary": "",
			"url": "{page_url}"
		},
{/exp:low_search:results}

	]

},

{!-- GALLERIES --}

{
	"header": {
		"title": "Photo Gallery",
		"num": "3",
		"limit": "3"
	},

	"data": [

{exp:low_search:results collection="photo_galleries" limit="3" backspace="2" loose_ends="both"}
		{
			"primary": {exp:ce_str:ing json_encode}{title}{/exp:ce_str:ing},
			"secondary": "",
			"url": "{page_url}"
		},
{/exp:low_search:results}

	]

},

{!-- SEARCH RESULTS displayed below native results --}

{exp:low_search:results collection="search_results" limit="5" log_search="yes" loose_ends="both" search:result-display_location="below"}
{
	"header": {
		"title": {if result-search_bar_title}{exp:ce_str:ing json_encode}{result-search_bar_title}{/exp:ce_str:ing}{if:else}""{/if},
		"num": "1",
		"limit": "1"
	},

	"data": [
		{
			"primary": "",
			"secondary": {if result-search_bar_content}{exp:ce_str:ing json_encode}{result-search_bar_content}{/exp:ce_str:ing}{if:else}""{/if},
			"url": ""
		}
	]
},
{/exp:low_search:results}


{!-- Empty category, to deal with the trailing comma in the template, just to be safe... --}

{
	"header": {
		"title":""
	},
	"data" : []
}

]