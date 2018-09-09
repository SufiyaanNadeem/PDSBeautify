//On PDSB Page
let backgroundURL = document.getElementById("branding");
let backgroundWrapper = document.getElementById("brandingWrapper");

chrome.storage.sync.get('background', function (data) {
    backgroundURL.style.backgroundImage = "url(" + data.background + ")";
    backgroundURL.className += " slideInLeft animated";
    backgroundWrapper.style.transition = ".5s";
    backgroundWrapper.style.backgroundColor = "#000000";
});
