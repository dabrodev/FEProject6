$(function() {

	// Test suite RSS Feeds
	describe('RSS Feeds', function() {

		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		// loop through each feed and check if the url is defined andnot empty
		it('url defined and not empty', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			});
		});

		// loop through each feed and check if the url is defined andnot empty
		it('name defined and not empty', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			});
		});
	});

	// Test suite about menu
	describe('The menu', function() {

		// test the menu is hidden by default
		it('menu is hidden by default', function() {
			expect($("body").hasClass("menu-hidden")).toBe(true);
		});

		// test the hiding and showing of the menu elements
		it('menu display and hide when clicked', function() {
			 // display menu
			$(".menu-icon-link").click();
			expect($("body").hasClass("menu-hidden")).toBe(false);
			// hide menu
			$(".menu-icon-link").click();
			expect($("body").hasClass("menu-hidden")).toBe(true);
		});
	});

 // Test about initial entries
	describe('Initial Entries', function() {
		// Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container
		beforeEach(function(done) {
			loadFeed(0, done);
		});

		it('contains at least one .entry element in .feed container', function() {
			expect($(".feed .entry").length).not.toBe(0);
		});
	});

	// Test suite about new feed selection"
	describe('New Feed Selection', function() {

		// Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
		var feed1,
			feed2;

		beforeEach(function(done) {
			loadFeed(0, function() {
				feed1 = $(".feed").html();
				loadFeed(1, function() {
					feed2 = $(".feed").html();
					done();
				});
			});
		});

		// Compare the same content source from 2 feeds, if they are different, it means content changes.
		it('content changes', function() {
			expect(feed1).not.toEqual(feed2);
		});
	});
}());
