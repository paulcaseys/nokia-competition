
/**
 * Filename: js/build/AppConfig
 *
 * defines the app paths and initialises the app
 *
 */
//

// APP STRUCTURE
// defines the app structure
var App = {};
App.Views = {};
App.Models = {};
App.Collections = {};
App.Data = {};


// DATA SERVICES
// define data service paths
App.Data.GalleryData = 'resources/data/GalleryData.json' + '?ver=' + ((new Date()).getTime());


// CONSOLE FIX
// Avoid `console` errors in browsers that lack a console (from html5 boilerplate)
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



// APP CONFIG
requirejs.config({

    // defines paths that are used across the app
    paths: {

        // paths to common libraries
        'jquery':       'resources/js/libs/jquery/jquery-min',
        'backbone':     'resources/js/libs/backbone/backbone-min',
        'underscore':   'resources/js/libs/underscore/underscore-min',
        'json':         'resources/js/libs/json2/json2',

        // jquery easing
        'jquery.easing': 'resources/js/libs/jquery/jquery.easing',

        // raphael
        'raphael':  'resources/js/libs/raphael/raphael.min',

        // waypoints (scrolling)
        'waypoints':    'resources/js/libs/waypoints/waypoints.min',

        // fixie (lorem ipsum generator)
        'fixie':    'resources/js/libs/fixie/fixie.min',

        // modernizr (html5 conditional and tag correction)
        'modernizr':    'resources/js/libs/modernizr/modernizr.min',

        // cosmos image loading (image loading and rescaler)
        'cosmosimageloader':    'resources/js/libs/cosmos/cosmos-image-loader.1.01',

        // cosmos data (rapid form and data service)
        'cosmosdata':    'resources/js/libs/cosmos/cosmos-data.1.01.min',

        // foundation
        'foundation':           'resources/js/libs/foundation',
        'foundationtopbar':     'resources/js/libs/foundation/jquery.foundation.topbar',
        'foundationapp':        'resources/js/libs/foundation/app',

        // foundation
        'tweenlite':        'resources/js/libs/tweenlite/TweenLite.min',
        'easepack':         'resources/js/libs/tweenlite/EasePack.min',
        'cssplugin':        'resources/js/libs/tweenlite/CSSPlugin.min',

        // video-js (html5 video player, with swf fallback for old browsers)
        'videojs':        'resources/js/libs/video-js/video.min',

        // video-js (html5 video player, with swf fallback for old browsers)
        'prism':        'resources/js/libs/prism/prism',

        // paths to app initialiser
        'AppInit':                              'resources/js/build/AppInit',

        // paths to app router (routes hash URIs)
        'App.Router':                       'resources/js/build/Router',

        // paths to the config model (for constants)
        'App.Models.ConfigModel':           'resources/js/build/models/ConfigModel',

        // paths to state PAGE/PANEL model (tells which state to transition to)
        'App.Models.StateModel':            'resources/js/build/models/StateModel',

        // paths to state MENU model (tells which menu item to select)
        'App.Models.StateMenuModel':            'resources/js/build/models/StateMenuModel',

        // paths to views
        'App.Views.HomePageView':           'resources/js/build/views/HomePageView',
        'App.Views.HomePanelView':          'resources/js/build/views/HomePanelView',
        'App.Views.WinPageView':            'resources/js/build/views/WinPageView',
        'App.Views.FeaturesPageView':       'resources/js/build/views/FeaturesPageView',
        'App.Views.FeaturesPanelView':      'resources/js/build/views/FeaturesPanelView',
        'App.Views.VideoPageView':          'resources/js/build/views/VideoPageView',
        'App.Views.VideoPanelView':         'resources/js/build/views/VideoPanelView',
        'App.Views.FooterPanelView':        'resources/js/build/views/FooterPanelView',
        'App.Views.ImageNavPanelView':      'resources/js/build/views/ImageNavPanelView',

        // paths to collections
        'App.Collections.FeaturesCollection':   'resources/js/build/collections/FeaturesCollection',

        // paths to models
        //'App.Models.ExampleModel':            'resources/js/build/models/ExampleModel'
        'App.Models.PeopleModel':           'resources/js/build/models/PeopleModel',
        'App.Models.FeaturesModel':         'resources/js/build/models/FeaturesModel'

    },

    // dependancies for certain javascript files
    shim: {
    'underscore': {
        exports: '_'
    },
    'backbone': {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
    },
    'kendo.console': {
        deps: ["jquery"]
    },
    'waypoints': {
        deps: ["jquery"]
    },
    'modernizr': {
        deps: ["jquery"]
    },
    'jquery.easing': {
        deps: ["jquery"]
    },
    'raphael': {
        deps: ["jquery"],
        exports: "raphael"
    },
    'cosmosimageloader': {
        deps: ["jquery"],
        exports: "cosmosimageloader"
    },
    'cosmosdata': {
        deps: ["jquery", "cosmosimageloader"],
        exports: "cosmosdata"
    },
    'foundationtopbar': {
        deps: ["jquery"],
        exports: "foundationtopbar"
    },
    'foundationapp': {
        deps: ["jquery", "foundationtopbar"],
        exports: "foundationapp"
    },
    'tweenlite': {
        deps: ["cssplugin", "easepack"],
        exports: "tweenlite"
    },
    'videojs': {
        deps: ["jquery"],
        exports: "videojs"
    }
  },


    // the duration that require.js should wait before abandoning the load
    waitSeconds: 300,

    // prevents caching during development (remove data and time for live app)
    urlArgs: 'ver=5'

});





requirejs([

    // Load our app module and pass it to our definition function
    'AppInit'


], function(AppInit){
    // dependencies are now loaded
    // initialises app
    AppInit.initialize();


});