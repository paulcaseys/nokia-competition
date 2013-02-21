/**
 * Filename: js/app/models/StateModel
 *
 * manages the views
 * 
 */// 
// require js: defines the required js libraries and app files
define(["jquery","underscore","backbone"],function(e,t,n){var r=n.Model.extend({showView:function(e){this.currentView!==undefined&&this.currentView.transitionOut();this.currentView=e;this.currentView.transitionIn()}});return r});