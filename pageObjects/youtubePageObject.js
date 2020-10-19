var youtubeCommands = {
    searchMusicVideo: function (name) {
        this
            .setValue('@searchInput', name)
            .pause(3000)
            .click('@searchButton')
            .pause(3000)
            .click('@firstVideo')
        return this
    },
    changeSpeedOfVideo: function (name) {
        this
            .setValue('@searchInput', name)
            .pause(3000)
            .click('@searchButton')
            .pause(3000)
            .click('@firstVideo')
            .pause(2000)
            .click('@settingsButton')
            .pause(2000)
            .click('@volumeSwitcher')
        return this
    },
    clickBestOfYoutubeSection: function () {
        var bestOfYoutubeSections = ['Music', 'Sports', 'Movies & Shows', 'News', 'Live', 'Learning', 'YouTube', 'Virtual Reality']
        var youtubeSectionSelectors = ['@music', '@sports', '@moviesAndShows', '@news', '@live', '@learning', '@youtube', '@virtualReality']
        for (var i = 0; i < bestOfYoutubeSections.length; i++) {
            this
                .click(youtubeSectionSelectors[i])
                .pause(2000)
                .expect.element('@subjectHeader').text.to.equal(bestOfYoutubeSections[i])
        }
        return this;
    },
    changeLanguageToFrench: function () {
        this
            .click('@topRightCornerSettingsButton')
            .click('@changeLanguageButton')
            .pause(3000)
            .click('@frenchLanguageButton')
            .pause(2000)
        return this
    },
    hideLeftSideBar: function () {
        this
            .click('@hideHamburgerButton')
        return this
    },
    createQueue: function (searchTerm1) {
        this
            .setValue('@searchInput', searchTerm1)
            .pause(2000)
            .click('@searchButton')
            .pause(2000)
            .getLocationInView('@listItem1')
            .pause(5000)
            .click('@listItem1')
            .click('@addVideoQueueButton')
            .click('@youtubeHomeButton')
            .click('@searchButton')
            .click('@listItem2')
            .click('@addVideoQueueButton')
            .click('@youtubeHomeButton')
            .pause(3000)
            .click('@expandVideoButton')
            .click('@playButton')
            .pause(10000)
            .expect.element('@queueContainer').to.be.present
        this
            .expect.element('@queuePlayList').text.to.equal('1 / 2')// watch first video in queue
        this
            .click('@secondVideoInQueue')
            .pause(10000)
            .expect.element('@queuePlayList').text.to.equal('2 / 2');// watch second video in queue
        this
            .click('@clearQueueButton') // this will delete the queue that was created
            .pause(2000)
            .expect.element('@queueContainer').to.not.be.visible
        return this
    },
    generateSuggestedSearchTerms: function (searchTerm) {
        this
            .waitForElementPresent('body', 10000)
            .setValue('@searchInput', searchTerm)
        return this
    },
    playAndPauseButton: function (name) {
        this
            .setValue('@searchInput', name)
            .pause(2000)
            .click('@searchButton')
            .pause(2000)
            .click('@firstVideo')
            .waitForElementPresent('@youtubeVideo')
            .pause(11000)
            .click('@pauseAndPlayButton')
            .pause(2000)
            .expect.element('@timeCurrent').text.to.equal('0:10')
        this
            .click('@pauseAndPlayButton')
            .pause(10000)
            .click('@pauseAndPlayButton')
            .expect.element('@timeCurrent').text.to.equal('0:20')
        this.expect.element('@timeOfVideo').text.to.equal('34:34')
        return this
    },
    wordCaptionFunctionality: function (name) {
        this
            .setValue('@searchInput', name)
            .pause(2000)
            .click('@searchButton')
            .pause(2000)
            .click('@firstVideo')
            .waitForElementPresent('@youtubeVideo')
            .pause(5000)
            .click('@turnCaptionsButtonOn')
            .pause(3000)
            .expect.element('@captions').to.be.present
        this
            .click('@turnCaptionButtonOff')
            .pause(3000)
            .expect.element('@captions').to.not.be.present
        return this
    },
    filterResultsByVideosUploadedThisMonth: function (name) {
        this
            .setValue('@searchInput', name)
            .pause(2000)
            .click('@searchButton')
            .pause(2000)
            .click('@filterButton')
            .pause(5000)
        this
            .click('@videosThisMonth') // this returns video results of videos uploaded within the last month
            .click('@filterButton')
        return this
    },
    filterResultsByLength: function (name) {
        this
            .setValue('@searchInput', name)
            .pause(2000)
            .click('@searchButton')
            .pause(2000)
            .click('@filterButton')
            .pause(2000)
        this
            .click('@shorterThan4Minutes') // this returns video that are 4 minutes or shorter
            .pause(2000)
            .click('@filterButton')
        return this
    },
    filterResultsByFeatures: function (name) {
        this
            .setValue('@searchInput', name)
            .pause(2000)
            .click('@searchButton')
            .pause(2000)
            .click('@filterButton')
            .pause(5000)
        this
            .click('@featureSubtitles') // this returns video results of videos that include subtitles
            .pause(2000)
            .click('@filterButton')
        return this
    },
    sortResultsByViewCount: function (name) {
        this
            .setValue('@searchInput', name)
            .pause(2000)
            .click('@searchButton')
            .pause(2000)
            .click('@filterButton')
            .pause(5000)
        this
            .click('@sortByViewCount') // this returns video results of videos that include subtitles
            .pause(2000)
            .click('@filterButton')
        return this
    }
}





module.exports = {
    url: "https://www.youtube.com/",
    commands: [youtubeCommands],
    elements: {
        sortByRelevance: '#collapse-content > ytd-search-filter-group-renderer:nth-child(5) > ytd-search-filter-renderer.style-scope.ytd-search-filter-group-renderer.selected',
        sortByUploadDate: '#collapse-content > ytd-search-filter-group-renderer:nth-child(5) > ytd-search-filter-renderer:nth-child(4)',
        sortByViewCount: '#collapse-content > ytd-search-filter-group-renderer:nth-child(5) > ytd-search-filter-renderer:nth-child(6)',
        sortByRating: '#collapse-content > ytd-search-filter-group-renderer:nth-child(5) > ytd-search-filter-renderer:nth-child(8)',
        featureLive: '#collapse-content > ytd-search-filter-group-renderer:nth-child(4) > ytd-search-filter-renderer:nth-child(2)',
        feature4k: '#collapse-content > ytd-search-filter-group-renderer:nth-child(4) > ytd-search-filter-renderer:nth-child(4)',
        featureHD: '#collapse-content > ytd-search-filter-group-renderer:nth-child(4) > ytd-search-filter-renderer:nth-child(6)',
        featureSubtitles: '#collapse-content > ytd-search-filter-group-renderer:nth-child(4) > ytd-search-filter-renderer:nth-child(8)',
        shorterThan4Minutes: '#collapse-content > ytd-search-filter-group-renderer:nth-child(3) > ytd-search-filter-renderer:nth-child(2)',
        LongerThan20Minutes:'#collapse-content > ytd-search-filter-group-renderer:nth-child(3) > ytd-search-filter-renderer:nth-child(4)',
        typeVideo: '#collapse-content > ytd-search-filter-group-renderer:nth-child(2) > ytd-search-filter-renderer:nth-child(2)',
        typeChannel: '#collapse-content > ytd-search-filter-group-renderer:nth-child(2) > ytd-search-filter-renderer:nth-child(4)',
        typePlaylist: '#collapse-content > ytd-search-filter-group-renderer:nth-child(2) > ytd-search-filter-renderer:nth-child(6)',
        typeMovie: '#collapse-content > ytd-search-filter-group-renderer:nth-child(2) > ytd-search-filter-renderer:nth-child(8)',
        typeShow:'#collapse-content > ytd-search-filter-group-renderer:nth-child(2) > ytd-search-filter-renderer:nth-child(10)',
        videosInLastHour: '#collapse-content > ytd-search-filter-group-renderer:nth-child(1) > ytd-search-filter-renderer:nth-child(2)',
        videosToday: '#collapse-content > ytd-search-filter-group-renderer:nth-child(1) > ytd-search-filter-renderer:nth-child(4)',
        videosThisWeek: '#collapse-content > ytd-search-filter-group-renderer:nth-child(1) > ytd-search-filter-renderer:nth-child(6)',
        videosThisMonth: '#collapse-content > ytd-search-filter-group-renderer:nth-child(1) > ytd-search-filter-renderer:nth-child(8)',
        videosThisYear: '#collapse-content > ytd-search-filter-group-renderer:nth-child(1) > ytd-search-filter-renderer:nth-child(10)',
        filterButton: '#container > ytd-toggle-button-renderer',
        captions: '#caption-window-1 > span > span:nth-child(1) > span',
        youtubeVideo: '#movie_player > div.html5-video-container > video',
        pauseAndPlayButton: '#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button',
        expandVideoButton: '#movie_player > div.ytp-miniplayer-ui > div > button.ytp-miniplayer-expand-watch-page-button.ytp-button.ytp-miniplayer-button-top-left',
        searchInput: 'input[id = "search"]',
        firstVideo: 'a[id = "video-title"]',
        searchButton: 'button[id = "search-icon-legacy"]',
        titleOfVideoSelected: 'yt-formatted-string[class ="style-scope ytd-video-primary-info-renderer"]',
        settingsButton: 'button[class = "ytp-button ytp-settings-button ytp-hd-quality-badge"]', 
        videoPlaying: 'video[class = "video-stream html5-main-video"]',
        playBackSpeedSetting: 'div[class = "ytp-menuitem-content"]',
        volumeSwitcher: {
            selector: '(//div[@class = "ytp-menuitem-content"])[2]',
            locateStrategy: 'xpath'
        },
        music: {
            selector: '/html/body/ytd-app/div/app-drawer/div[2]/div/div[2]/div[2]/ytd-guide-renderer/div[1]/ytd-guide-section-renderer[3]/div/ytd-guide-entry-renderer[1]/a',
            locateStrategy: 'xpath'
        },
        subjectHeader: {
            selector: '/html/body/ytd-app/div/ytd-page-manager/ytd-browse[2]/div[3]/ytd-c4-tabbed-header-renderer/app-header-layout/div/app-header/div[2]/div[2]/div/div[1]/div/div[1]/ytd-channel-name/div/div/yt-formatted-string',
            locateStrategy: 'xpath'
        },
        sports: {
            selector: '/html/body/ytd-app/div/app-drawer/div[2]/div/div[2]/div[2]/ytd-guide-renderer/div[1]/ytd-guide-section-renderer[3]/div/ytd-guide-entry-renderer[2]/a',
            locateStrategy: 'xpath'
        },
        moviesAndShows: {
            selector: '/html/body/ytd-app/div/app-drawer/div[2]/div/div[2]/div[2]/ytd-guide-renderer/div[1]/ytd-guide-section-renderer[3]/div/ytd-guide-entry-renderer[4]/a',
            locateStrategy: 'xpath'
        },
        news: {
            selector: '/html/body/ytd-app/div/app-drawer/div[2]/div/div[2]/div[2]/ytd-guide-renderer/div[1]/ytd-guide-section-renderer[3]/div/ytd-guide-entry-renderer[5]/a',
            locateStrategy: 'xpath'
        },
        live: {
            selector: '/html/body/ytd-app/div/app-drawer/div[2]/div/div[2]/div[2]/ytd-guide-renderer/div[1]/ytd-guide-section-renderer[3]/div/ytd-guide-entry-renderer[6]/a',
            locateStrategy: 'xpath'
        },
        learning: {
            selector: '/html/body/ytd-app/div/app-drawer/div[2]/div/div[2]/div[2]/ytd-guide-renderer/div[1]/ytd-guide-section-renderer[3]/div/ytd-guide-entry-renderer[8]/a',
            locateStrategy: 'xpath'
        },
        youtube: {
            selector: '/html/body/ytd-app/div/app-drawer/div[2]/div/div[2]/div[2]/ytd-guide-renderer/div[1]/ytd-guide-section-renderer[3]/div/ytd-guide-entry-renderer[9]/a',
            locateStrategy: 'xpath'
        },
        virtualReality: {
            selector: '/html/body/ytd-app/div/app-drawer/div[2]/div/div[2]/div[2]/ytd-guide-renderer/div[1]/ytd-guide-section-renderer[3]/div/ytd-guide-entry-renderer[10]/a',
            locateStrategy: 'xpath'
        },
        topRightCornerSettingsButton: {
            selector: '/html/body/ytd-app/div/div/ytd-masthead/div[3]/div[3]/div[2]/ytd-topbar-menu-button-renderer[3]/div/a/yt-icon-button/button',
            locateStrategy: 'xpath'
        },
        changeLanguageButton: {
            selector: '/html/body/ytd-app/ytd-popup-container/iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[1]/div[2]/ytd-compact-link-renderer[1]/a',
            locateStrategy: 'xpath'
        },
        frenchLanguageButton: {
            selector: '/html/body/ytd-app/ytd-popup-container/iron-dropdown/div/ytd-multi-page-menu-renderer/div[4]/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer/div[3]/ytd-account-settings/div/div[2]/paper-item[19]',
            locateStrategy: 'xpath'
        },
        bestOfYoutubeHeader: {
            selector: '/html/body/ytd-app/div/app-drawer/div[2]/div/div[2]/div[2]/ytd-guide-renderer/div[1]/ytd-guide-section-renderer[3]/h3/yt-formatted-string',
            locateStrategy: 'xpath'
        },
        reccomendationsHeader: {
            selector: '/html/body/ytd-app/div/ytd-page-manager/ytd-browse/ytd-two-column-browse-results-renderer/div[1]/ytd-rich-grid-renderer/div[4]/span',
            locateStrategy: 'xpath'
        },
        bestOfYoutubeArea: {
            selector: '/html/body/ytd-app/div/app-drawer/div[2]/div/div[2]/div[2]/ytd-guide-renderer/div[1]/ytd-guide-section-renderer[3]',
            locateStrategy: 'xpath'
        },
        hideHamburgerButton: {
            selector: '/html/body/ytd-app/div/div/ytd-masthead/div[3]/div[1]/yt-icon-button[2]/button',
            locateStrategy: 'xpath'
        },
        listItem1: {
            selector: '/html/body/ytd-app/div/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer[2]/div[3]/ytd-video-renderer[1]/div[1]/div/div[1]/div/div/ytd-menu-renderer/yt-icon-button/button',
            locateStrategy: 'xpath'
        },
        listItem2: {
            selector: '/html/body/ytd-app/div/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer[2]/div[3]/ytd-video-renderer[2]/div[1]/div/div[1]/div/div/ytd-menu-renderer/yt-icon-button/button',
            locateStrategy: 'xpath'
        },
        playButton: {
            selector: '/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[1]/div/div[1]/div/div/div/ytd-player/div/div/div[4]/button',
            locateStrategy: 'xpath'
        },
        addVideoQueueButton: {
            selector: '/html/body/ytd-app/ytd-popup-container/iron-dropdown/div/ytd-menu-popup-renderer/paper-listbox/ytd-menu-service-item-renderer/paper-item/yt-formatted-string',
            locateStrategy: 'xpath'
        },
        queueContainer: {
            selector: '/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[2]/div/ytd-playlist-panel-renderer/div',
            locateStrategy: 'xpath'
        },
        queuePlayList: {
            selector: '/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[2]/div/ytd-playlist-panel-renderer/div/div[1]/div/div[1]/div[1]/div/div/span',
            locateStrategy: 'xpath'
        },
        clearQueueButton: {
            selector: '/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[2]/div/ytd-playlist-panel-renderer/div/div[1]/div/div[2]/div[2]/div/ytd-menu-renderer/div/ytd-button-renderer/a/paper-button',
            locateStrategy: 'xpath'
        },
        youtubeHomeButton: {
            selector: '/html/body/ytd-app/div/div/ytd-masthead/div[3]/div[1]/ytd-topbar-logo-renderer/a',
            locateStrategy: 'xpath'
        },
        listOfSuggestedSearchTerms: {
            selector: '/html/body/div/div[2]/div[1]/div/ul',
            locateStrategy:'xpath'
        },
        secondVideoInQueue: {
            selector: '/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[2]/div/ytd-playlist-panel-renderer/div/div[2]/ytd-playlist-panel-video-renderer[2]/a',
            locateStrategy: 'xpath'
        },
        leftSideMainBar: {
            selector: '/html/body/ytd-app/div/ytd-mini-guide-renderer',
            locateStrategy: 'xpath'
        },
        timeCurrent: {
            selector: '/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[1]/div/div[1]/div/div/div/ytd-player/div/div/div[27]/div[2]/div[1]/div/span[1]',
            locateStrategy: 'xpath'
        },
        timeOfVideo: {
            selector: '/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[1]/div/div[1]/div/div/div/ytd-player/div/div/div[27]/div[2]/div[1]/div/span[3]',
            locateStrategy: 'xpath'
        },
        turnCaptionsButtonOn: {
            selector: '/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[1]/div/div[1]/div/div/div/ytd-player/div/div/div[27]/div[2]/div[3]/button[2]',
            locateStrategy: 'xpath'
        },
        turnCaptionButtonOff: {
            selector: '/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[1]/div/div[1]/div/div/div/ytd-player/div/div/div[28]/div[2]/div[3]/button[2]',
            locateStrategy: 'xpath'
        }
    }
}

