/**
 * Filename: js/app/models/FeaturesModel
 *
 * example model
 * 
 */// 
// require js: defines the required js libraries and app files
define(["jquery","underscore","backbone"],function(e,t,n){var r=n.Model.extend({defaults:function(){return{personName:"No Name...",order:1,done:!1}}});return r});