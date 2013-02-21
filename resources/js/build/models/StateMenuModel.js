/**
 * Filename: js/app/models/StateMenuModel
 *
 * manages the menu items
 * 
 */// 
// require js: defines the required js libraries and app files
define(["jquery","underscore","backbone"],function(e,t,n){var r=n.Model.extend({selectMenuItem:function(t,n,r,i){e(n+" .active").removeClass("active");if(e(n+" "+r+""+i+""+t).length===0)console.log("Clearing all munu states at element at $("+n+" "+r+""+i+""+t+");");else{e(n+" "+r+""+i+""+t).parent().addClass("active");e(n+" "+r+""+i+""+t).addClass("active")}}});return r});