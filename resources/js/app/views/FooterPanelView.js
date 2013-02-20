
/**
 * Filename: js/app/views/ExamplePageView
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
  'cosmosimageloader'

  // required collections
  //'App.Collections.HelloWorldCollection'

  // required models  
  //'App.Models.HelloWorldModel'

// require js: defines instances
], function($, _, Backbone){


	var FooterPanelView = Backbone.View.extend({

		
	    // binds view to the existing skeleton of the App already present in the HTML.
	    el: $("#footer-panel"),

	    // at initialization we bind to the relevant events
	    initialize: function() {
	    	
	    	// hides the element until App.Models.StateModel.showView(WheteverView) calls the transitionIn() function
	    	$(this.el).hide(); 
	    	
	  		// creates an example event listener
	    	this.on('testCall', this.testMethod, this);
	    	this.on('transitionInCall', this.transitionInMethod, this);

	    },

    	
	    // addes content from the correlating model, when it is loaded
	    addContentFromFeed: function() {	
	    	for (var i=0; i < App.Collections.FeaturesCollection.dataLoaded.length; i++) {
	    		App.Collections.FeaturesCollection.dataLoaded[i].id = i;
          		var curObj = App.Collections.FeaturesCollection.dataLoaded[i];
	    		$("#footer-panel .menu-item-"+(i+1)+" .footer-caption").html(curObj.page_title);
	    		var _il1 = new Cosmos.Utils.ImageLoaderWithRescaleSlideShow('#footer-panel .menu-item-'+(i+1)+' .footer-thumb-target', [{"img":curObj.uploaded_images[0].uploaded_image_path_100, "background-color":"#efefef"}], 1000, 1000, "rescaleInnerEnabled", "centreEnabled", "elementResizeListenerEnabled");

	    	}

	    },

    	// method for the eventlistener
	    testMethod: function (e) {
	       console.log('FooterPanelView testMethod');
	    },
	    

	    submenuClickLeftHandler: function (e) {
			TweenLite.to($("#footer-panel .footer-container-slide"), 1, {css:{"margin-left":"0px"}, ease:Expo.easeInOut});
		},

	    submenuClickRightHandler: function (e) {
			TweenLite.to($("#footer-panel .footer-container-slide"), 1, {css:{"margin-left":"-950px"}, ease:Expo.easeInOut});
		},


		/*******************
		 * TRANSITION IN/OUT
		 * these are called when the view is routed in / out
		 */
		
	    transitionInMethod: function (e) {	 
	       this.transitionIn();
	    },
    	// transitions the view in
	    transitionIn: function () {	 
	    	// adds eventlisteners     
	    	this.addEventListeners();	

	    	// basic way to display element
	    	$(this.el).show(); 


	    	//TweenLite.from($("#example-page h1, #example-page p"), 1.5, {css:{alpha:0}, ease:Power2.easeOut}); 	
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

	    	var me = this;

	    	// adds an example event listener
	    	//this.on('testCall', this.testMethod, this);

	    	$("#footer-panel .footer-arrow-right").on("click", App.Models.ConfigModel.eventObj, me.submenuClickRightHandler);
			
	    	$("#footer-panel .footer-arrow-left").on("click", App.Models.ConfigModel.eventObj, me.submenuClickLeftHandler);
			

	    },

    	// removes eventlisteners
	    removeEventListeners: function () {	       
	    	// removes an event listeners
	    	//this.off('testCall', this.testMethod, this);
	    }
	    

	});




    // require js: defines function/s to be accessed by require js
    return FooterPanelView;

});
