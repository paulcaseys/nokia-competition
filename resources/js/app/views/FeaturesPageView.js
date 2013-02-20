
/**
 * Filename: js/app/views/FeaturesPageView
 *
 * initialises the view
 * 
 */
// 


// require js: defines the required js libraries and app files
define([

  // required libraries
  'jquery',
  'underscore',
  'backbone',
  'tweenlite',

  // state model
  'App.Models.StateModel',

  // state menu model
  'App.Models.StateMenuModel',

  // required views
  'App.Views.FeaturesPanelView'


  // required collections
  //'App.Collections.HelloWorldCollection'

  // required models  
  //'App.Models.HelloWorldModel'

// require js: defines instances
], function($, _, Backbone, tl, StateModel, StateMenuModel, FeaturesPanelView){


	var FeaturesPageView = Backbone.View.extend({

		
	    // binds view to the existing skeleton of the App already present in the HTML.
	    el: $("#features-page"),

      	

	    // at initialization we bind to the relevant events
	    initialize: function() {

	    	
	    	// hides the element until App.Models.StateModel.showView(WheteverView) calls the transitionIn() function
	    	$(this.el).hide(); 
	    	
	  		// creates an example event listener
	    	this.on('testCall', this.testMethod, this);

		    // initialises the state model/controller
		    App.Models.FeaturesPanelsStateModel = new StateModel;

      		// initialises the state controller for the menu
      		App.Models.FeaturesPanelStateMenuModel = new StateMenuModel;

      		// creates three panel views
      		

      		App.Views.FeaturesPanelView1 = new FeaturesPanelView({el: '#features-panel-1'});
      		App.Views.FeaturesPanelView1.id = 0;
	    	for (var i=1; i < 10; i++) {
	    		$('#features-panel-1').clone().appendTo('#features-page .relative-wrapper').attr("id","features-panel-"+(i+1));
      			App.Views['FeaturesPanelView'+(i+1)] = new FeaturesPanelView({el: '#features-panel-'+(i+1)});
      			App.Views['FeaturesPanelView'+(i+1)].id = i;
	    	}


	    },
    	
	    // addes content from the correlating model, when it is loaded
	    addContentFromFeed: function() {	    	
	    	for (var i=0; i < App.Collections.FeaturesCollection.dataLoaded.length; i++) {
	    		App.Collections.FeaturesCollection.dataLoaded[i].id = i;
          		var curObj = App.Collections.FeaturesCollection.dataLoaded[i];
	    		//$("#footer-panel .menu-item-"+(i+1)+" .footer-caption").html(curObj.page_title);
	    		
	    		$('#features-page #features-panel-'+(i+1)+' .content-target .kicker').html("FEATURE "+(i+1)+" OF 9");
	    		$('#features-page #features-panel-'+(i+1)+' .content-target .title').html(curObj.page_summary);
	    		$('#features-page #features-panel-'+(i+1)+' .content-target .body').html(curObj.page_body_text);
	    		var _il1 = new Cosmos.Utils.ImageLoaderWithRescaleSlideShow('#features-page #features-panel-'+(i+1)+' .image-target', [{"img":curObj.uploaded_images[0].uploaded_image_path_original}], 1000, 1000, "rescaleDisnabled", "centreEnabled", "elementResizeListenerDisabled");

	    	}

	    },

    	
    	// method for the eventlistener
	    testMethod: function (e) {
	       console.log('FeaturesPageView testMethod');
	    },
	    



		/*******************
		 * TRANSITION IN/OUT
		 * these are called when the view is routed in / out
		 */
		
    	// transitions the view in
	    transitionIn: function () {	 
	    	// adds eventlisteners     
	    	this.addEventListeners();	

	    	// basic way to display element

	    	$(this.el).show(); 
	    	TweenLite.from($("#features-page .features-background"), 1, {css:{alpha:0}, delay: 0.8, ease:Power2.easeOut}); 

	    	//moves footer to correct position
	    	TweenLite.to($(".mid-wrapper"), 1.5, {css:{height:420}, ease:Expo.easeInOut}); 
	    },

    	// removes all eventlisteners
	    transitionOut: function () {	       
	    	// removes eventlisteners    
	    	this.removeEventListeners();	

	    	// basic way to hide element
	    	$(this.el).hide();  	
	    },	    



		/*******************
		 * EVENT LISTENERS
		 * garbage disposal for unneccesary event listeners
		 */
		
    	// adds eventlisteners
	    addEventListeners: function () { 
	    	// adds an example event listener
	    	//this.on('testCall', this.testMethod, this);

	    },

    	// removes eventlisteners
	    removeEventListeners: function () {	       
	    	// removes an event listeners
	    	//this.off('testCall', this.testMethod, this);
	    }
	    

	});




    // require js: defines function/s to be accessed by require js
    return FeaturesPageView;

});
