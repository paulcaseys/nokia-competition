/**
 * Filename: js/app/models/ConfigModel
 *
 * config model
 * 
 */// 
// require js: defines the required js libraries and app files
define(["jquery","underscore","backbone","modernizr"],function(e,t,n){var r=n.Model.extend({defaults:function(){this.body=e("body");this.html=e("html");this.touch=!1;this.videoType="mp4";Modernizr.video.h264?this.videoType="mp4":Modernizr.video.webm?this.videoType="webm":Modernizr.video.ogg&&(this.videoType="ogv");this.touch="ontouchstart"in document.documentElement;this.eventType=this.touch?"touchend":"click";this.eventObj={};this.bodyId=this.body.attr("id");this.imgRatioNum=1600/950;this.videoRatioNum=640/360;this.headerOffset=45;this.scrollToOffset=100;this.defineWindowDimensions();e(window).resize(this.defineWindowDimensions);this.debug=e("<div style='padding:10px;background:#FFF;position:fixed;top:0;left:0;color:#000;font-size:12px;z-index:999'>")},defineWindowDimensions:function(){this.windowHeight=e(window).height();this.windowWidth=e(window).width();this.browserRatioNum=this.windowWidth/this.windowHeight}});return r});