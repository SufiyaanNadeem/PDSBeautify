console.log("Your PDSB login is now Better!");
/*
document.getElementById("brandingWrapper").style.backgroundURL = "white";
document.getElementById("branding").className += "slideInLeft animated";//flipInX

document.getElementById("branding").style.backgroundImage = "url(" + "'http://sufiyaan.ca/Images/career_parallax.jpg'" + ")";


*/
let changeBackground = document.getElementById('submit');//backgroundURL

chrome.storage.sync.get('background', function (data) {//backgroundURL
  changeBackground.style.backgroundImage = data.background;//backgroundURL
  changeBackground.setAttribute('name', data.background);//backgroundURL
});


changeBackground.onclick = function (element) {
  let background = element.target.name;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: 'document.getElementById("branding").style.backgroundImage = "url(' + background + ')";document.getElementById("branding").className += "slideInLeft animated";' });
  });
};






