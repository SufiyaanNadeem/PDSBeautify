/*chrome.storage.sync.get('background', function (data) {//backgroundURL
    changeBackground.style.backgroundImage = data.background;//backgroundURL
    changeBackground.setAttribute('name', data.background);//backgroundURL
});
*/

//document.getElementById("branding").style.backgroundImage = "url(" + "'http://sufiyaan.ca/Images/logic_parallax.jpeg'" + ")";

backgroundImage = document.getElementById("branding")
chrome.storage.sync.get('background', function (data) {//backgroundURL
    //backgroundImage.className += "slideInLeft animated";//flipInX
    backgroundImage.style.backgroundImage = "url(" + "'http://sufiyaan.ca/Images/logic_parallax.jpeg'" + ")";//backgroundURL
});