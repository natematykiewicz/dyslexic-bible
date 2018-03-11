// ==UserScript==
// @name         Dyslexie font for bible.com
// @namespace    http://tampermonkey.net/
// @version      4
// @description  Use a dyslexic-friendly font at bible.com
// @include      https://*.bible.com/bible
// @include      https://*.bible.com/bible/*
// updateURL     https://raw.githubusercontent.com/natematykiewicz/dyslexic-bible/master/dyslexic-bible.user.js
// ==/UserScript==

(function() {
  $(document).ready(function(){
    var style = '<style type="text/css">'+
      'html,' +
      'body,' +
      'input,' +
      '.chapter-picker-modal,' +
      '.circle-buttons,' +
      '.reader-header,' +
      '.search, .search .searchicon-container,' +
      '.verse-action-footer,' +
      '.chapter-picker-modal .chapter-container .chapter-list li,' +
      '.yv-button-bar .yv-button-bar-button,' +
      '.version-picker-modal,' +
      '.version-picker-modal .language-list, .version-picker-modal .version-list,' +
      '.yv-sticky-header .yv-sticky-header-content {' +
        'background: #fbf7e9 !important;' + // "white"
      '}' +


      '.custom-scroll .inner-handle {' +
        'background: #4d4433 !important;' +
      '}' +

      '.book-list .active, .chapter-list .active,' +
      '.version-picker-modal .language-list .active, .version-picker-modal .version-list .active,' +
      '.chapter-picker-modal .chapter-container .chapter-list li.active {' +
        'background: #4d4433 !important;' +
        'color: #fbf7e9 !important;' +
      '}' +

      '.version-picker-modal .language-list .active:not(:hover):not(.focus) *, .version-picker-modal .version-list .active:not(:hover):not(.focus) * {' +
        'color: #fbf7e9 !important;' +
      '}' +

      '.version-picker-modal .language-list .active:hover *, .version-picker-modal .version-list .active:hover *,' +
      '.version-picker-modal .language-list .focus, .version-picker-modal .language-list li:hover, .version-picker-modal .version-list .focus, .version-picker-modal .version-list .focus *, .version-picker-modal .version-list li:hover,' +
      '.version-picker-modal .header,' +
      '.dropdown-arrow-container.open,' +
      '.chapter-picker-modal .header,'+
      '.book-list .focus, .book-list li:hover, .chapter-list .focus, .chapter-list li:hover,' +
      '.book-list .active:hover *, .chapter-list .active:hover *,' +
      '.chapter-picker-modal .chapter-container .chapter-list li:hover {' +
        'background: #f7efd4 !important;' +
        'color: #4d4433 !important;' +
      '}' +

      '::placeholder {' +
        'color: #ccc3b3;' +
      '}' +

      'svg path[fill]:not([fill=none]), svg g[fill]:not([fill=none]) {' +
        'fill: #998766;' +
      '}' +

      '.trigger-button:hover svg path[fill]:not([fill=none]), .trigger-button:hover svg g[fill]:not([fill=none]),' +
      'a:hover svg path[fill]:not([fill=none]), a:hover svg g[fill]:not([fill=none]) {' +
        'fill: #4d4433;' +
      '}' +

      'svg path[stroke]:not([stroke=none]), svg g[stroke]:not([stroke=none]) {' +
        'stroke: #ccc3b3;' +
      '}' +

      'html * {' +
        'font-family: Dyslexie !important;' +
        'color: #4d4433 !important;' +
        'border-color: #ccc3b3 !important;' +
      '}' +

      '.picker-label:hover {' +
        'border-color: #4d4433 !important;' +
      '}' +
    '</style>';
    $(style).appendTo('head');
  });
})();
