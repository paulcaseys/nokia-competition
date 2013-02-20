
/**
 * Filename: js/app/router
 *
 * routes uris and logs a history
 * 
 */
// 


// require js: defines the required js libraries and app files
define([

  // required libraries
  'jquery',
  'underscore',
  'backbone'

  // required views
  //'App.Views.TodoPageView',
  //'App.Views.ExamplePageView'



// require js: defines instances
], function($, _, Backbone){

    var AppRouter = Backbone.Router.extend({
        routes: {
            "features/:id": "getFeatures",
            "win/": "getWin",
            "video/:id": "getVideo",
            "*actions": "defaultRoute" // Backbone will try match the route above first
        },



        defaultRoute: function(){
            console.log('route: home');
            App.Models.PageStateModel.showView(App.Views.HomePageView);
            App.Models.PageStateMenuModel.selectMenuItem(1, "#menu", "a", ".menu-item-");

            // clears the selected footer menu item
            App.Models.FeaturesPanelStateMenuModel.selectMenuItem(null, "#footer-panel .submenu-wrapper", "a", ".menu-item-");
            
            // define background image
            App.Views.ImageNavPanelView.gotoHomeBg();
        },

        getWin: function(){
            console.log('route: win');
            App.Models.PageStateModel.showView(App.Views.WinPageView);
            App.Models.PageStateMenuModel.selectMenuItem(2, "#menu", "a", ".menu-item-");

            // clears the selected footer menu item
            App.Models.FeaturesPanelStateMenuModel.selectMenuItem(null, "#footer-panel .submenu-wrapper", "a", ".menu-item-");
            
            // define background image
            App.Views.ImageNavPanelView.gotoWinBg();
        },

        getFeatures: function(id){
            console.log('route: features '+ id );

            if(App.Models.PageStateModel.currentView != App.Views.FeaturesPageView){
                App.Models.PageStateModel.showView(App.Views.FeaturesPageView);
                App.Models.PageStateMenuModel.selectMenuItem(3, "#menu", "a", ".menu-item-");
            }

            // defines which panel to display 
            App.Models.FeaturesPanelsStateModel.showView(App.Views["FeaturesPanelView"+id]);

            // moves panel to left
            if(id < 6){
                App.Views.FooterPanelView.submenuClickLeftHandler(null);
            }
            

            // selects a footer menu item
            App.Models.FeaturesPanelStateMenuModel.selectMenuItem(id, "#footer-panel .submenu-wrapper", "a", ".menu-item-");
            
            // define background image
            App.Views.ImageNavPanelView.gotoFeaturesBg();
            
        },

        getVideo: function(id){
            console.log('route: video '+ id );
            App.Models.PageStateModel.showView(App.Views.VideoPageView);
            App.Models.PageStateMenuModel.selectMenuItem(4, "#menu", "a", ".menu-item-");

            // selects a menu item
            App.Models.VideoPanelStateMenuModel.selectMenuItem(id, "#video-page .submenu-wrapper", "a", ".menu-item-");
            
            // defines which panel to display 
            App.Models.VideoPanelsStateModel.showView(App.Views["VideoPanelView"+id]);

            // clears the selected footer menu item
            App.Models.FeaturesPanelStateMenuModel.selectMenuItem(null, "#footer-panel .submenu-wrapper", "a", ".menu-item-");
            
            // define background image
            App.Views.ImageNavPanelView.gotoVideoBg();
        }


    });



  
    


    var initialize = function(){

        // Instantiate the router
        App.Router = new AppRouter;

        // Start Backbone history a necessary step for bookmarkable URL's
        Backbone.history.start();
    };

    // require js: defines function/s to be accessed by require js
    return {
      initialize: initialize
    };


});