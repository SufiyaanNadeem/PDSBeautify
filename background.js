
/*chrome.runtime.onInstalled.addListener(function () {
    /*chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log("It is working!");
    });
    chrome.runtime.reload(console.log("It is working!"));
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
/*
'use strict';
window.onload = function () {
    console.log("page load!");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.getElementById("branding").style.backgroundImage = "url(' + 'http://sufiyaan.ca/Images/career_parallax.jpg' + ')";' });
    });

};*/
/*
var onReady = function (callback) {
    if (document.readyState === 'complete')
        window.setTimeout(callback, 0);
    else
        window.addEventListener('load', callback, false);
};

$(function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.getElementById("branding").style.backgroundImage = "url(' + 'http://sufiyaan.ca/Images/career_parallax.jpg' + ')";' });
    });
};*/

chrome.runtime.onInstalled.addListener(function () {
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