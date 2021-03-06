/* feedreader.js
 *
 * References include: Udacity Forum, Stack Overflow, and Mozilla Developer Network.
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    describe('RSS Feeds', function() {

        /* This test makes sure that the allFeeds variable has been
        defined and that it is not empty. */ 

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed in the allFeeds
         * object and ensures it has a URL defined and that
         * the URL is not empty. */

        it('have URLs that are defined and not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        /* This test loops through each feed in the allFeeds object
        and ensures it has a name defined and that the name is not empty.*/
         
        it('have names that are defined and not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });

    describe('The menu', function() {

        /* This test that ensures the menu element is
         * hidden by default. */

        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
            expect($('.slide-menu').offset().left).toBe(-192);
        });

        /* This test ensures the menu changes visibility when the menu icon 
        is clicked. This test should have two expectations: does the menu 
        display when clicked and does it hide when clicked again. */

        it('changes visibility when the its icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false); 
      
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {

        /*This test ensure that when the loadFeedd function is called and 
        completes its work, there is at least a single .entry element within 
        the .feed container. Remember that oadFeed() is asynchronous so this 
        test requires the use of Jasmine's beforeEach and asynchronous done() 
        function.*/

        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('have at least one .entry element within the .feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

    describe('New Feed Selection', function() {

        /*This test ensures when a new feed is loaded by the loadFeed function
        that the content actually changes. Remember, loadFeed() is asynchronous.*/

        var entriesBefore, 
            entriesAfter;

        beforeEach(function(done){
            $('.feed').empty();
            loadFeed(0, function(){
                entriesBefore = $('.feed').find("h2").text();
                done();
            });
        });

        it('has a new feed with changing content', function(done) {
            loadFeed(1, function() {
                entriesAfter = $('.feed').find("h2").text();
                expect(entriesBefore).not.toEqual(entriesAfter);
                done();
            });
            
        });
    });
}());
