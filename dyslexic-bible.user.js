// ==UserScript==
// @name         dyslexic-bible
// @namespace    http://tampermonkey.net/
// @version      3
// @description  Use a dyslexic-friendly font at bible.com
// @match        https://*.bible.com/bible/*
// updateURL     https://raw.githubusercontent.com/natematykiewicz/dyslexic-bible/master/dyslexic-bible.user.js
// ==/UserScript==

(function() {
    $(document).ready(function(){
      $('#current-ui-view')
        .css('font-family', 'Dyslexie')
        .css('background', '#fbf7e9')
        .css('color', '#4d4433')
        .css('border-bottom', '1px solid #ddd');
    });
})();
