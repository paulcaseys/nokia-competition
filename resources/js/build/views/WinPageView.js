/**
 * Filename: js/app/views/WinPageView
 *
 * initialises the view
 *
 *///
// require js: defines the required js libraries and app files
define(["jquery","underscore","backbone","tweenlite","cosmosdata"],function(e,t,n){var r=n.View.extend({el:e("#win-page"),initialize:function(){e(this.el).hide();this.on("testCall",this.testMethod,this);var t="NokiaNineComp",n="46f43d37b373af0783c9e2ffaca34eda",r="#cosmos-form-wrapper",i=new Cosmos.Data.newForm;i.defineProjectSettings(t,n,!0);i.setupForm(r)},testMethod:function(e){console.log("WinPageView testMethod")},transitionIn:function(){this.addEventListeners();e(this.el).show();TweenLite.from(e("#win-page #cosmos-form-wrapper"),1.5,{css:{alpha:0},ease:Expo.easeOut});TweenLite.to(e(".mid-wrapper"),1.5,{css:{height:620},ease:Expo.easeInOut})},transitionOut:function(){this.removeEventListeners();e(this.el).hide()},addEventListeners:function(){},removeEventListeners:function(){}});return r});