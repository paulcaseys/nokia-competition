
/**
 * Filename: js/app/collections/ExampleCollection
 *
 * collection of models
 * 
 */
// 


// require js: defines the required js libraries and app files
define([

  // required libraries
  'jquery',
  'underscore',
  'backbone',

  // required collections
  //'App.Collections.ExampleCollection',

  // required models  
  'App.Models.FeaturesModel',

  // required views
  //'App.Views.ExamplePageView',



// require js: defines the 
], function($, _, Backbone, FeaturesModel){

  // Todo Collection
  // ---------------

  var FeaturesCollection = Backbone.Collection.extend({

    model: FeaturesModel,
    dataLoaded: null,

    loadLatest: function () {
        var me = this;

        // loads the feature items
        var GItems = new FeaturesModel;
        GItems.url = "http://cosmos.is:81/api/service/data/format/jsonp/?project_name=NokiaNine&project_password=9ee360efafb2e2d5d6d8f5e259df151d&table=unique_references&batch=1&batchSize=50&whereConditionArray=project_id||85&select=*&orderBy=vote_count||desc&callback=?"
        GItems.type = 'GET';
        GItems.dataType = 'jsonp';
        GItems.fetch({success: onDataLoadComplete});

        function onDataLoadComplete(response, dataResponse) {
          me.dataLoaded = dataResponse;
          App.Views.FooterPanelView.addContentFromFeed();
          App.Views.FeaturesPageView.addContentFromFeed();
        }


    }

 
  });






    // require js: defines function/s to be accessed by require js
    return FeaturesCollection;

});