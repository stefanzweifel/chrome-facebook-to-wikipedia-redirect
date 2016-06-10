'use strict';

let currentUrl    = window.location.href;
let regex         = new RegExp('facebook.com');
let urlToRedirect = 'https://en.wikipedia.org/wiki/Special:Random';

if (regex.test(currentUrl) === true) {
    window.location.href = urlToRedirect;
}