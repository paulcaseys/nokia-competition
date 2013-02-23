
/**
 * Filename: js/app/AppInit
 *
 * initialises the views
 *
 */
//


// require js: defines the required js libraries and app files
define([

  // required libraries
  'jquery',
  'underscore',
  'backbone',

  // required app router
  'App.Router',

  // required models
  'App.Models.ConfigModel',
  'App.Models.StateModel',
  'App.Models.StateMenuModel',
  'App.Models.PeopleModel',
  'App.Models.FeaturesModel',

  // required collections
  'App.Collections.FeaturesCollection',

  // required views
  'App.Views.HomePageView',
  'App.Views.WinPageView',
  'App.Views.FeaturesPageView',
  'App.Views.VideoPageView',
  'App.Views.FooterPanelView',
  'App.Views.ImageNavPanelView'



// require js: defines instances
], function($, _, Backbone, Router, ConfigModel, StateModel, StateMenuModel, PeopleModel, FeaturesModel, FeaturesCollection, HomePageView, WinPageView, FeaturesPageView, VideoPageView, FooterPanelView, ImageNavPanelView){




    // initialises various  app views
    var initialize = function(){

      // initialises the app configuration (eg: App.Models.ConfigModel.browserRatioNum)
      App.Models.ConfigModel = new ConfigModel();

      // initialises the state controller
      App.Models.PageStateModel = new StateModel();

      // initialises the state controller for the menu
      App.Models.PageStateMenuModel = new StateMenuModel();

      // initialises the people details
      App.Models.PeopleModel = new PeopleModel();

      // initialises the feature details
      App.Models.FeaturesModel = new FeaturesModel();
      App.Collections.FeaturesCollection = new FeaturesCollection();

      // initialises the views onto the page
      App.Views.HomePageView = new HomePageView();
      App.Views.WinPageView = new WinPageView();
      App.Views.FeaturesPageView = new FeaturesPageView();
      App.Views.VideoPageView = new VideoPageView();
      App.Views.FooterPanelView = new FooterPanelView();
      App.Views.ImageNavPanelView = new ImageNavPanelView();


      // calls eventlisteners in the view, as an example
      App.Views.HomePageView.trigger("testCall");
      App.Views.WinPageView.trigger("testCall");
      App.Views.FeaturesPageView.trigger("testCall");
      App.Views.VideoPageView.trigger("testCall");
      App.Views.FooterPanelView.trigger("testCall");
      App.Views.ImageNavPanelView.trigger("testCall");

      App.Views.FooterPanelView.trigger("transitionInCall");
      App.Views.ImageNavPanelView.trigger("transitionInCall");

      // initialises the router
      Router.initialize();

      //loads the collection
      App.Collections.FeaturesCollection.loadLatest();

      // hides the loading div (if it exists)
      if ($("#loading-page").length > 0){
        $("#loading-page").remove();
      }



    };




    // require js: defines function/s to be accessed by require js
    return {
      initialize: initialize
    };


});
