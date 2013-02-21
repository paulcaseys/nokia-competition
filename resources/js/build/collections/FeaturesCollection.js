/**
 * Filename: js/app/collections/ExampleCollection
 *
 * collection of models
 * 
 */// 
// require js: defines the required js libraries and app files
define(["jquery","underscore","backbone","App.Models.FeaturesModel"],function(e,t,n,r){var i=n.Collection.extend({model:r,dataLoaded:null,loadLatest:function(){function n(t,n){e.dataLoaded=n;App.Views.FooterPanelView.addContentFromFeed();App.Views.FeaturesPageView.addContentFromFeed()}var e=this,t=new r;t.url="http://cosmos.is:81/api/service/data/format/jsonp/?project_name=NokiaNine&project_password=9ee360efafb2e2d5d6d8f5e259df151d&table=unique_references&batch=1&batchSize=50&whereConditionArray=project_id||85&select=*&orderBy=vote_count||desc&callback=?";t.type="GET";t.dataType="jsonp";t.fetch({success:n})}});return i});