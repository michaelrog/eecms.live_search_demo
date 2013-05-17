eecms.demo.live_search
======================

Portions of EE templates relevant to creating the Live Search function for http://greenstreetdowntown.com, using:
* Low Search EE2 Module: http://gotolow.com/addons/low-search
* Smart Suggest jQuery Plugin: http://jamesskidmore.com/scripts/smartsuggest

Notes:
* Running Low Search several times in a single template turns out to be much faster than you'd think. Props to Low for that; using native Full-text Search is darn fast... But it would still benefit from some good caching, which is not shown here, as it takes place post-parse.
* In this setup, the first and last category of results come from a special channel designed to plunk arbitrary WYSIWYG content into the results. Smart Suggest's default (hard-coded) behavior is to render each result item as `<li>` containing an `<a>`, but this causes things to break if the WYSIWYG content contains `<a>` tags of its own. So, I had to hack the Smart Suggest source code to only render the `<a>` when the URL property is provided.