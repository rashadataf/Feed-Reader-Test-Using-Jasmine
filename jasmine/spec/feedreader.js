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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL\'s are defined and not empty', function () {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Names\'s are defined and not empty', function () {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function () {
        // variable to hold a reference to the menue icon.
        let menu = document.querySelector('.menu-icon-link');
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        // the menu is hidden using class called 'menu-hidden'.
        // it been assigned to the body element.
        // so we need to check if we can found it in the class list of the body.
        it("Elements should be hidden by default", function () {
            expect(document.body).toHaveClass('menu-hidden');
        });


        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        // we will trigger the click event of the menu
        // then we will check the body if it has 'menu-hidden' class
        // it should not be there so that mean menu is visible
        // then we will trigger click event again and check the same class
        // it should be there so that mean the menu is hidden.
        it("Visibility changed when pressed on menu icon", function () {
            menu.click();
            expect(document.body).not.toHaveClass('menu-hidden');
            menu.click();
            expect(document.body).toHaveClass('menu-hidden');
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function () {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
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
            let entry = document.querySelector('.entry');
            expect(entry).toBeDefined();
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
         /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });

}());
