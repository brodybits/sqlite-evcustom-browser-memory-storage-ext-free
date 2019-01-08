/* 'use strict'; */

var MYTIMEOUT = 12000;

var isWindows = /MSAppHost/.test(navigator.userAgent);
var isAndroid = !isWindows && /Android/.test(navigator.userAgent);
var isFirefox = /Firefox/.test(navigator.userAgent);
var isWebKitBrowser = !isWindows && !isAndroid && /Safari/.test(navigator.userAgent);
var isBrowser = isWebKitBrowser || isFirefox;
var isEdgeBrowser = isBrowser && (/Edge/.test(navigator.userAgent));
var isMac = !isBrowser && /Macintosh/.test(navigator.userAgent);
var isAppleMobileOS = /iPhone/.test(navigator.userAgent) ||
      /iPad/.test(navigator.userAgent) || /iPod/.test(navigator.userAgent);
var hasMobileWKWebView = isAppleMobileOS && !!window.webkit && !!window.webkit.messageHandlers;

window.hasBrowser = true;

// XXX TBD ???:
// window.hasWebKitWebSQL = isAndroid || (isAppleMobileOS && !hasMobileWKWebView) || (isWebKitBrowser && !isEdgeBrowser);
window.hasWebKitWebSQL = (window.cordova) ?
    isAndroid || (isAppleMobileOS && !isWKWebView) || (isWebKitBrowser && !isEdgeBrowser) : false

describe('Check startup for navigator.userAgent: ' + navigator.userAgent, function() {
  it('receives deviceready event', function(done) {
    if (!window.cordova) pending('SKIP due to lack of Cordova framework used');
    expect(true).toBe(true);
    document.addEventListener("deviceready", function() {
      done();
    });
  }, MYTIMEOUT);

  it('has openDatabase', function() {
    if (window.hasWebKitWebSQL) expect(window.openDatabase).toBeDefined();
    expect(window.sqlitePlugin).toBeDefined();
    expect(window.sqlitePlugin.openDatabase).toBeDefined();
  });
});

/* vim: set expandtab : */
