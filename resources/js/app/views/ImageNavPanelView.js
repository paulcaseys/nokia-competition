
/**
 * Filename: js/app/views/ImageNavPanelView
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
  'easepack',
  'cosmosimageloader'

  // required collections
  //'App.Collections.HelloWorldCollection'

  // required models  
  //'App.Models.HelloWorldModel'

// require js: defines instances
], function($, _, Backbone, tl, cil){


	var ImageNavPanelView = Backbone.View.extend({

		
	    // binds view to the existing skeleton of the App already present in the HTML.
	    el: $("#image-nav-panel"),
	    imageLoaderMain: null,
	    imageMainIsLoaded: false,
	    imageToLoadIntoMain: 0,
	    prevImage: 100000,
	    windowBigEnough: true,

	    // at initialization we bind to the relevant events
	    initialize: function() {
	    	
	    	me = this;

	    	// hides the element until App.Models.StateModel.showView(WheteverView) calls the transitionIn() function
	    	$(this.el).hide(); 
	    	
	  		// creates an example event listener
	    	this.on('testCall', this.testMethod, this);
	    	this.on('transitionInCall', this.transitionInMethod, this);


	    },

	    /////////////////////
	    // page scenarios

	    // define homepage background scenario
	    gotoHomeBg: function () {
	    	me.showSideNav();
	    	me.showBg(1);
	    	me.hideVideoImageOverlay();
	    },

	    // define win background scenario
	    gotoWinBg: function () {
	    	me.hideSideNav();
	    	me.showBg(3);
	    	me.hideVideoImageOverlay();
	    },

	    // define features background scenario
	    gotoFeaturesBg: function () {
	    	me.hideSideNav();
	    	me.showBg(4);
	    	me.hideVideoImageOverlay();
	    },

	    // define video background scenario
	    gotoVideoBg: function () {
	    	me.hideSideNav();
	    	//me.showBg(1);
	    	me.showVideoImageOverlay();
	    },


	    /////////////////////
	    // individual elements

	    // SIDE NAV
	    showSideNav: function () {
	    	if(this.windowBigEnough) {
	    		TweenLite.to($("#image-nav-panel .image-side-nav-right-mask"), 4, {css:{"width":"66px"}, ease:Elastic.easeOut, delay: 2});
	    		TweenLite.to($("#image-nav-panel .image-side-nav-left-mask"), 4.2, {css:{"width":"66px"}, ease:Elastic.easeOut, delay: 2.2});
	    	}
	    	
	    },

	    // SIDE NAV
	    hideSideNav: function () {
	    	TweenLite.to($("#image-nav-panel .image-side-nav-right-mask"), 1, {css:{"width":"0px"}, ease:Power4.easeOut});
	    	TweenLite.to($("#image-nav-panel .image-side-nav-left-mask"), 1, {css:{"width":"0px"}, ease:Power4.easeInOut});
	    },

	    // VIDEO OVERLAY
	    showVideoImageOverlay: function () {
	    	TweenLite.to($("#background-image-panel .background-image-video"), 3, {css:{"autoAlpha":1}, ease:Power4.easeOut});
	    },

	    // VIDEO OVERLAY
	    hideVideoImageOverlay: function () {
	    	TweenLite.to($("#background-image-panel .background-image-video"), 5, {css:{"autoAlpha":0}, ease:Power4.easeOut});
	    },

    	// method for the eventlistener
	    mainImagesLoadedHandler: function (e) {
	    	me.imageMainIsLoaded = true;
			clearInterval(me.imageLoaderMain.slideshowInterval);
			me.showBg(me.imageToLoadIntoMain);
	    },
	    
    	// method for the eventlistener
	    showBg: function (id) {
	    	if(me.imageMainIsLoaded == true){
	    		// IMAGE LOADER IS LOADED
	    		if(id != me.prevImage){
	    			Cosmos.Utils.DisplayImage("#background-image-panel .background-image-main", id-1, 1000, {change:''});
	    			me.prevImage = id;
	    		}	 

	    	} else {
	    		// IMAGE LOADER IS NOT LOADED. wait until 
	    		me.imageToLoadIntoMain = id;
	    	}

	    },

	    defineArrows: function (personID) {

	    	var leftPersonID = personID;	
	    	if(personID > 1){
	    		leftPersonID--;
	    	} else {
	    		leftPersonID = 3;
	    	}
	    	
	    	var rightPersonID = personID;	
	    	if(personID < 3){
	    		rightPersonID++;
	    	} else {
	    		rightPersonID = 1;
	    	}

	    	var rightPerson = App.Models.PeopleModel["person"+rightPersonID];
	    	var leftPerson = App.Models.PeopleModel["person"+leftPersonID];

	    	$("#image-nav-panel .image-side-nav-right-mask .caption-text").html(rightPerson.firstName+" "+rightPerson.lastName);
	    	$("#image-nav-panel .image-side-nav-left-mask .caption-text").html(leftPerson.firstName+" "+leftPerson.lastName);
	    	
	    	var imgWidth = parseInt($("#image-nav-panel .image-side-nav-right-mask .thumb").css("width"));
	    	TweenLite.to($("#image-nav-panel .image-side-nav-right-mask .people-container"), 0.3, {css:{"left":((imgWidth*-1*(rightPersonID-1))-30)+"px"}, ease:Power4.easeOut});
	    	TweenLite.to($("#image-nav-panel .image-side-nav-left-mask .people-container"), 0.3, {css:{"left":((imgWidth*-1*(leftPersonID-1))+30)+"px"}, ease:Power4.easeOut});
	    	

	    },
	    defineWindowSizeBigEnough: function () {
	    	if($(window).width() > 1050){
	    		// WINDOW IS BIG ENOUGH
				if(me.windowBigEnough != true){
					//console.log('big enough');
					me.windowBigEnough = true;
					me.showSideNav();
				}
				
	    	} else {
	    		// WINDOW IS TOO SMALL
				if(me.windowBigEnough != false){
					//console.log('too small');
					me.windowBigEnough = false;
					me.hideSideNav();
				}
				
	    	}

	    },
	    

    	



    	// method for the eventlistener
	    testMethod: function (e) {
	       console.log('ImageNavPanelView testMethod');
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
	    	me = this;
	    	// adds eventlisteners     
	    	this.addEventListeners();	

	    	// basic way to display element
	    	$(this.el).show(); 
	    	
	    	var successFunc = this.mainImagesLoadedHandler;
	    	me.imageLoaderMain = new Cosmos.Utils.ImageLoaderWithRescaleSlideShow("#background-image-panel .background-image-main", [{"img":"resources/images/big_img_cat_wide.png"}, {"img":"resources/images/big_img_emma_wide.png"}, {"img":"resources/images/big_img_kate_luke_wide.png"}, {"img":"resources/images/big_img_cat_wide_2.png"}], 2000, 1000, "rescaleEnabled", "centreEnabled", "elementResizeListenerEnabled", {success:successFunc});
			

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
	    	
	    	// arrow button
			$("#image-nav-panel .image-side-nav-right-mask").on("click", App.Models.ConfigModel.eventObj, rightClickHandler);
			function rightClickHandler(){
				App.Views.HomePageView.trigger("gotoNextPersonCall");
			}
	    	// arrow button
			$("#image-nav-panel .image-side-nav-left-mask").on("click", App.Models.ConfigModel.eventObj, leftClickHandler);
			function leftClickHandler(){
				App.Views.HomePageView.trigger("gotoPrevPersonCall");
			}
			$("#image-nav-panel .image-side-nav-left-mask").on("mouseenter", App.Models.ConfigModel.eventObj, navOverHandler);
			$("#image-nav-panel .image-side-nav-right-mask").on("mouseenter", App.Models.ConfigModel.eventObj, navOverHandler);
			function navOverHandler(){
				TweenLite.to($(this), 0.3, {css:{"width":"155px"}, ease:Power4.easeOut});
			}
			$("#image-nav-panel .image-side-nav-left-mask").on("mouseleave", App.Models.ConfigModel.eventObj, navOutHandler);
			$("#image-nav-panel .image-side-nav-right-mask").on("mouseleave", App.Models.ConfigModel.eventObj, navOutHandler);
			function navOutHandler(){
				TweenLite.to($(this), 0.3, {css:{"width":"66px"}, ease:Power4.easeOut});
			}


	        // defines the window dimensions
	        me.defineWindowSizeBigEnough();

	        // triggered when browser is resized
	        $(window).resize(function() {
	        	me.defineWindowSizeBigEnough();
	        });

          

	    },

    	// removes eventlisteners
	    removeEventListeners: function () {	       
	    	// removes an event listeners
	    	//this.off('testCall', this.testMethod, this);
	    	
	    	$("#image-nav-panel .image-side-nav-right-mask").off("click", App.Models.ConfigModel.eventObj);
			$("#image-nav-panel .image-side-nav-left-mask").off("click", App.Models.ConfigModel.eventObj);
			$("#image-nav-panel .image-side-nav-left-mask").off("mouseenter", App.Models.ConfigModel.eventObj);
			$("#image-nav-panel .image-side-nav-right-mask").off("mouseenter", App.Models.ConfigModel.eventObj);
			$("#image-nav-panel .image-side-nav-left-mask").off("mouseleave", App.Models.ConfigModel.eventObj);
			$("#image-nav-panel .image-side-nav-right-mask").off("mouseleave", App.Models.ConfigModel.eventObj);
			
	    }
	    

	});




    // require js: defines function/s to be accessed by require js
    return ImageNavPanelView;

});
