// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {

    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {

        // With a new rule ...
        // syntax : chrome.declarativeContent.onPageChanged.addRules(array of Rule rules, function callback)
        chrome.declarativeContent.onPageChanged.addRules([{

            // That fires when a page's URL contains a 'g' ...
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { urlSuffix: '.pdf' },
                })
            ],
            // And shows the extension's page action.
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});