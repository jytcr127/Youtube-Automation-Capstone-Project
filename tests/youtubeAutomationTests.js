var youtube = {}
module.exports = {
    beforeEach: (browser, done) => {
        youtube = browser.page.youtubePageObject()
        youtube.navigate()
        browser.resizeWindow(1900, 1900, done)
    },
    afterEach: browser => {
        browser.end()
    },
    'Test 1: Search for a specific music video': browser => {
        youtube.searchMusicVideo("NCT U 엔시티 유 'BOSS' MV");
    },
    'Test 2: Double the normal speed of a video': browser => {
        youtube.changeSpeedOfVideo('The Cast of Community Reunites for Table Read #stayhome #withme');
        browser.keys(browser.Keys.DOWN_ARROW).keys(browser.Keys.DOWN_ARROW).keys(browser.Keys.DOWN_ARROW).keys(browser.Keys.DOWN_ARROW).keys(browser.Keys.ENTER)
        youtube.pause(10000).expect.element('@volumeSwitcher').text.to.contain('2');
    },

    'Test 3: Cut the speed of the video to a quarter of normal speed': browser => {
        youtube.changeSpeedOfVideo('The Cast of Community Reunites for Table Read #stayhome #withme');
        browser.keys(browser.Keys.UP_ARROW).keys(browser.Keys.UP_ARROW).keys(browser.Keys.UP_ARROW).keys(browser.Keys.ENTER)
        youtube.pause(10000).expect.element('@volumeSwitcher').text.to.contain('.25');
    },
    //     },
    'Test 4: Click each section listed under "Best of Youtube and verify that user is taken to correction section"': browser => {
        youtube.clickBestOfYoutubeSection();

    },
    'Test 5: Change the language to French': browser => { //This will change the display language from English to French
        youtube.changeLanguageToFrench();
    },
    'Test 6: Hide left side bar': browser => { // this will hide the left side bar that shows sections like "Best of Youtube" and "More from Youtube"
        youtube.hideLeftSideBar();
    },
    'Test 7: Create a queue of videos to watch': browser => {
        youtube.createQueue('puppies', 'wolf')
    }
}