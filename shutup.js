/*

QuieterPlurk Safari Extension
Version 1.0
By Zhusee

Visit: http://zhusee2.net/quieterplurk

*/

var landingTarget = document.querySelector('#top_bar + script + script');
var element = document.createElement('script');

element.textContent = "GB_hide();";

document.body.insertBefore(element, landingTarget);