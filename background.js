/*chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'fed.pdsb.org' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
*/
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ background: 'http://sufiyaan.ca/Images/career_parallax.jpg' }, function () {
        console.log("The background is 'http://sufiyaan.ca/Images/career_parallax.jpg'.");
    });
});

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ background: 'http://sufiyaan.ca/Images/career_parallax.jpg' }, function () {
        console.log('The background is \'http://sufiyaan.ca/Images/career_parallax.jpg\'.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'fed.pdsb.org' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});


