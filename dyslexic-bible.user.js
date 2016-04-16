// ==UserScript==
// @name         dyslexic-bible
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Use a dyslexic-friendly font at bible.com
// @match        https://*.bible.com/bible/*
// updateURL     https://github.com/natematykiewicz/dyslexic-bible/raw/master/dyslexic-bible.user.js
// ==/UserScript==

(function() {
    $(document).ready(function(){
      $('#current-ui-view').css('font-family', 'Dyslexie');
    });
})();
