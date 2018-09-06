// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
/*
let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function (data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

function changeBackground(element) {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: 'document.getElementById("branding").style.backgroundImage = "url(' + 'http://sufiyaan.ca/Images/career_parallax.jpg' + ')";' });
  });
};



//background - image: url("http://sufiyaan.ca/Images/my-pic3.jpg");
window.onload = changeBackground;
*/
//Works
/*window.onload = function () {
  console.log("page load!");
  document.getElementById("branding").style.backgroundImage = "url('http://sufiyaan.ca/Images/career_parallax.jpg');";
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: 'document.getElementById("branding").style.backgroundImage = "url(' + 'http://sufiyaan.ca/Images/career_parallax.jpg' + ')";' });
  });
  chrome.runtime.onMessage.addListener(
    function (message, callback) {

      chrome.tabs.executeScript({
        code: 'document.getElementById("branding").style.backgroundImage = "url(' + 'http://sufiyaan.ca/Images/career_parallax.jpg' + ')";'
      });


    });
};*/

/*
function changeBackground(element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: 'document.getElementById("branding").style.backgroundImage = "url(' + 'http://sufiyaan.ca/Images/career_parallax.jpg' + ')";' });
  });
};



//background - image: url("http://sufiyaan.ca/Images/my-pic3.jpg");
window.onload = changeBackground;*/

console.log("Your PDSB login is now Better!");
document.getElementById("brandingWrapper").style.backgroundColor = "white";
document.getElementById("branding").className += "slideInLeft animated";
document.getElementById("branding").style.backgroundImage = "url(" + "'http://sufiyaan.ca/Images/career_parallax.jpg'" + ")";