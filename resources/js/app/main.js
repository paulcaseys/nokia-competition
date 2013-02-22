/*jslint browser: true, devel: true */

// APP STRUCTURE
// defines the app structure
var App = {};
App.Views = {};
App.Models = {};
App.Collections = {};
App.Data = {};

(function () {
    console.log('11');
    'use strict';

    requirejs.config({
        baseUrl: ".",
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

        // paths to main
        'main':                              'resources/js/app/main',

        // paths to app initialiser
        'AppInit':                              'resources/js/app/AppInit',

        // paths to app router (routes hash URIs)
        'App.Router':                       'resources/js/app/Router',

        // paths to the config model (for constants)
        'App.Models.ConfigModel':           'resources/js/app/models/ConfigModel',

        // paths to state PAGE/PANEL model (tells which state to transition to)
        'App.Models.StateModel':            'resources/js/app/models/StateModel',

        // paths to state MENU model (tells which menu item to select)
        'App.Models.StateMenuModel':            'resources/js/app/models/StateMenuModel',

        // paths to views
        'App.Views.HomePageView':           'resources/js/app/views/HomePageView',
        'App.Views.HomePanelView':          'resources/js/app/views/HomePanelView',
        'App.Views.WinPageView':            'resources/js/app/views/WinPageView',
        'App.Views.FeaturesPageView':       'resources/js/app/views/FeaturesPageView',
        'App.Views.FeaturesPanelView':      'resources/js/app/views/FeaturesPanelView',
        'App.Views.VideoPageView':          'resources/js/app/views/VideoPageView',
        'App.Views.VideoPanelView':         'resources/js/app/views/VideoPanelView',
        'App.Views.FooterPanelView':        'resources/js/app/views/FooterPanelView',
        'App.Views.ImageNavPanelView':      'resources/js/app/views/ImageNavPanelView',

        // paths to collections
        'App.Collections.FeaturesCollection':   'resources/js/app/collections/FeaturesCollection',

        // paths to models
        //'App.Models.ExampleModel':            'resources/js/app/models/ExampleModel'
        'App.Models.PeopleModel':           'resources/js/app/models/PeopleModel',
        'App.Models.FeaturesModel':         'resources/js/app/models/FeaturesModel'

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

    //libs
    require([


        // paths to common libraries
        'jquery',
        'backbone',
        'underscore',
        'json',

        // jquery easing
        'jquery.easing',


        // waypoints (scrolling)
        'waypoints',

        // fixie (lorem ipsum generator)
        'fixie',

        // modernizr (html5 conditional and tag correction)
        'modernizr',

        // cosmos image loading (image loading and rescaler)
        'cosmosimageloader',

        // cosmos data (rapid form and data service)
        'cosmosdata',


        // foundation
        'tweenlite',
        'easepack',
        'cssplugin',

        // video-js (html5 video player, with swf fallback for old browsers)
        'videojs',

        // video-js (html5 video player, with swf fallback for old browsers)
        'prism',

        // paths to app initialiser
        'AppInit',

        // paths to app router (routes hash URIs)
        'App.Router',

        // paths to the config model (for constants)
        'App.Models.ConfigModel',

        // paths to state PAGE/PANEL model (tells which state to transition to)
        'App.Models.StateModel',

        // paths to state MENU model (tells which menu item to select)
        'App.Models.StateMenuModel',

        // paths to views
        'App.Views.HomePageView',
        'App.Views.HomePanelView',
        'App.Views.WinPageView',
        'App.Views.FeaturesPageView',
        'App.Views.FeaturesPanelView',
        'App.Views.VideoPageView',
        'App.Views.VideoPanelView',
        'App.Views.FooterPanelView',
        'App.Views.ImageNavPanelView',

        // paths to collections
        'App.Collections.FeaturesCollection',

        // paths to models
        //'App.Models.ExampleModel':            'resources/js/app/models/ExampleModel'
        'App.Models.PeopleModel',
        'App.Models.FeaturesModel'

        ],
        function () {
            var $ = require("jquery"),
            // the startmodule is defined on the same script tag of data-main.
            // example: <script data-main="main.js" data-start="pagemodule/main" src="vendor/require.js"/>
                startModuleName = $("script[data-main][data-start]").attr("data-start");

             console.log('startModuleName');
             console.log(startModuleName);
            if (startModuleName) {
                console.log('1');
                require([startModuleName], function (startModule) {
                    console.log('2');
                    $(function () {
                        var fn = $.isFunction(startModule) ? startModule : startModule.initialize;
                        if (fn) { fn(); }
                    });
                });
            }
        });
} ());