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
        youtube.pause(5000).expect.element('@volumeSwitcher').text.to.contain('2');
    },

    'Test 3: Cut the speed of the video to a quarter of normal speed': browser => {
        youtube.changeSpeedOfVideo('The Cast of Community Reunites for Table Read #stayhome #withme');
        browser.keys(browser.Keys.UP_ARROW).keys(browser.Keys.UP_ARROW).keys(browser.Keys.UP_ARROW).keys(browser.Keys.ENTER)
        youtube.pause(5000).expect.element('@volumeSwitcher').text.to.contain('.25');
    },
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
        youtube.createQueue('puppies')
    },
    'Test 8: Generate list of suggestions after a search term is entered': browser => {
        youtube.generateSuggestedSearchTerms('devmountain')
    },
    'Test 9: Verify CSS Grid structures changes when width is decreased': browser => {
        youtube.expect.element('@bestOfYoutubeArea').to.be.visible// this is when YouTube is diplayed in full screen
        browser.resizeWindow(1327, 1800).pause(3000)
        youtube.expect.element('@bestOfYoutubeArea').to.not.be.visible
        youtube.expect.element('@leftSideMainBar').to.be.visible // This includes sections like Home, Trending, Subscriptions, Library, and History
        browser.resizeWindow(800, 1800).pause(5000)
        youtube.expect.element('@bestOfYoutubeArea').to.not.be.visible
        youtube.expect.element('@leftSideMainBar').to.not.be.visible
    },
    'Test 10: Verify that the pause button will stop the video and play button will continue playing the video': browser => {
        youtube
            .playAndPauseButton('The Cast of Community Reunites for Table Read #stayhome #withme')
    },
    'Test 11: Verify that subtitles will appear and disappear when the captions button is clicked': browser => {
        youtube
            .wordCaptionFunctionality('The Cast of Community Reunites for Table Read #stayhome #withme')
    },
    'Test 12: Filter selections by only displaying videos that were dispalayed this month': browser => {
        youtube.filterResultsByVideosUploadedThisMonth('community')
    },
    'Test 13: Filter selections by only displaying videos that fall under the show cateogry': browser => {
        youtube.filterResultsByLength('community')
    },
    'Test 14: Filter sections by features of the video': browser => {
        youtube.filterResultsByFeatures('community')
    },
    'Test 15: Sort videos by view count': browser => {
        youtube.sortResultsByViewCount('community')
    }
}