
/**
 * Filename: js/app/views/SidemenuPageView
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

  // state menu model
  'App.Models.StateMenuModel',

  // loads waypoints (scrolling)
  'waypoints',

  // loads fixie (for lorem ipsum generation)
  'fixie',

  // loads jquery easing (for better animations)
  'jquery.easing',
  'foundationtopbar',
  'foundationapp',

  // tweenlite
  'tweenlite'


  // required collections
  //'App.Collections.HelloWorldCollection'

  // required models  
  //'App.Models.HelloWorldModel'

// require js: defines instances
], function($, _, Backbone, StateMenuModel){


	var SidemenuPageView = Backbone.View.extend({

		
	    // binds view to the existing skeleton of the App already present in the HTML.
	    el: $("#sidemenu-page"),

	    // at initialization we bind to the relevant events
	    initialize: function() {
	    	
	    	// hides the element until App.Models.StateModel.showView(WheteverView) calls the transitionIn() function
	    	$(this.el).hide(); 
	    	
	  		// creates an example event listener
	    	this.on('testCall', this.testMethod, this);

      		// initialises the state controller for the menu
      		App.Models.SidemenuPageStateMenuModel = new StateMenuModel;

		
	    },

    	
    	// method for the eventlistener
	    testMethod: function (e) {
	       console.log('SidemenuPageView testMethod');
	    },
	    

	    // scrolls to an element id, determines the yOffset
	    scrollTo: function (id) {	

	    	var scrollOffset = App.Models.ConfigModel.scrollToOffset;
			var scrollElement = 'html, body';

			$target = $("*[data-value='" + id +"']");

			if($target.length === 0){
				console.log('ERROR: could not find element: [data-value='+ id + ']');
				
			} else {
				var targetValue = $target.offset().top - scrollOffset;
				$(scrollElement).stop().animate({
					'scrollTop': targetValue
				}, 600, 'easeInOutCirc', function() {
					//$(scrollElement).css('scrollTop', targetValue);
				});
			}
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
	    	
	    	var me = this;

	    	// submenu clicking
			$("#sidemenu-page .signup").on("click", App.Models.ConfigModel.eventObj, signupHandler);
			function signupHandler(){
				me.scrollTo("signup");
			}
	    	
	    	// submenu clicking
			$("#sidemenu-page .sidemenu-wrapper a").on("click", App.Models.ConfigModel.eventObj, submenuHandler);
			
			// clears the selected items
			//App.Models.SidemenuPageStateMenuModel.selectMenuItem('null', "#sidemenu-page .submenu-wrapper", "a", ".menu-item-");


			function submenuHandler(){

				if($(this).data('clickvalue')){
					var targetId = $(this).data('clickvalue');
					App.Views.SidemenuPageView.scrollTo(targetId);

					// updates the uri hash, but does not route
					App.Router.navigate("/sidemenu/"+targetId, { trigger: false });
				}				

				$("#sidemenu-page .expanded").removeClass('expanded');
			}


			
			
	    },

    	// removes eventlisteners
	    removeEventListeners: function () {	       
	    	// removes an event listeners
	    	
	    	
	    	// removes submenu nav event
	    	$("#parallax-page .submenu-wrapper a").off();
			
			// checks if the device is a touch screen
			if (App.Models.ConfigModel.touch === true){
				// IS A TOUCH SCREEN
				var thisCorrectsJSLint = null;
			} else {
				// IS NOT A TOUCH SCREEN
	    		$('#parallax-page .waypoint-section').waypoint('destroy');
	    		$('#parallax-page .submenu-module').waypoint('destroy');
	    		$('#parallax-page .submenu-wrapper').waypoint('destroy');
	    	}
	    }

	});




    // require js: defines function/s to be accessed by require js
    return SidemenuPageView;

});
