/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // loop through allFeeds to make sure all feeds have url defined and not empty
        it('URL\'s are defined and not empty', function () {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }
        });
        // loop through allFeeds to make sure all feeds have name defined and not empty
        it('Names\'s are defined and not empty', function () {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            }
        });
    });


    // a new test suite named "The menu"
    describe("The menu", function () {
        // variable to hold a reference to the menue icon.
        let menu = document.querySelector('.menu-icon-link');
        // the menu is hidden using class called 'menu-hidden'.
        // it been assigned to the body element.
        // so we need to check if we can found it in the class list of the body.
        it("Elements should be hidden by default", function () {
            expect(document.body.classList[0]).toBe('menu-hidden');
        });


        // we will trigger the click event of the menu
        // then we will check the body if it has 'menu-hidden' class
        // it should not be there so that mean menu is visible
        // then we will trigger click event again and check the same class
        // it should be there so that mean the menu is hidden.
        it("Visibility changed when pressed on menu icon", function () {
            menu.click();
            expect(document.body.classList[0]).not.toBe('menu-hidden');
            menu.click();
            expect(document.body.classList[0]).toBe('menu-hidden');
        });
    });


    // a new test suite named "Initial Entries"
    describe("Initial Entries", function () {
        // here before we check if there is at least a single entry
        // after we call the loadFeed() function
        // we should to have some way told us if loadFeed() has completed
        // so we pass done() to each function before they invoke
        // so that when the function loadFeed() completed done() will returned
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });
        // before the loadFeed() is invoked there is no element 
        // has the class 'entry' in it
        // so we need to see if there is an element with that class
        // after the loadFeed() is invoked
        it("define if there is at least one entry in the container", function () {
            let entry = document.querySelector('.feed .entry');
            expect(entry).toBeDefined();
        });
    });


    // a new test suite named "New Feed Selection"
    describe('New Feed Selection', function () {
        // firstEntries and secondEntries are variables to hold
        // the value of the entries after first loadFeed
        // and the value of the entries after the second loadFeed
        let firstEntries, secondEntries;
        // we sould call loadFeed twice and make sure it has been completed
        // and assign the first call result to firstEntries
        // and the second call result to secondEntries.
        beforeEach(function (done) {
            let feedDiv = document.querySelector('.feed');
            feedDiv.innerText = '';
            loadFeed(0, function () {
                firstEntries = document.querySelector('.feed').innerHTML;
                loadFeed(1, function () {
                    secondEntries = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });
        // so in order to decide if the content of the feeds are changed
        // we need to compare between firstEntries and secondEntries
        // they should not be the same
        it("Ensure the content actually changed after a new loadFeed", function () {
            expect(firstEntries).not.toBe(secondEntries);
        });
    });

}());
