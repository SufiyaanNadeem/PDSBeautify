console.log("Your PDSB login is now Better!");

let changeBackground = document.getElementById('submit');
let inputBackground = document.getElementById("input_backURL");

chrome.storage.sync.get('background', function (data) {
  changeBackground.setAttribute('name', data.background);
  inputBackground.setAttribute('placeholder', "eg: " + data.background);
});


changeBackground.onclick = function (element) {
  let background = element.target.name;

  chrome.storage.sync.set({ background: inputBackground.value }, function () {
    console.log("New Background URL: " + inputBackground.value + " saved");
  });

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: 'document.getElementById("branding").style.backgroundImage = "url(' + inputBackground.value + ')";' });
  });
};






