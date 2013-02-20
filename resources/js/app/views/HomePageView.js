
/**
 * Filename: js/app/views/HomePageView
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
  'cssplugin',  
  'cosmosimageloader',

  // state model
  'App.Models.StateModel',

  // state menu model
  'App.Models.StateMenuModel',

  // required views
  'App.Views.HomePanelView'

  // required collections
  //'App.Collections.HelloWorldCollection'

  // required models  
  //'App.Models.PeopleModel'

// require js: defines instances
], function($, _, Backbone, tl, cp, cil, StateModel, StateMenuModel, HomePanelView){


	var HomePageView = Backbone.View.extend({

		
	    // binds view to the existing skeleton of the App already present in the HTML.
	    el: $("#home-page"),
	    curPerson: 1,
	    homePersonInterval: null,

	    // at initialization we bind to the relevant events
	    initialize: function() {

	    	var me = this;

	    	// hides the element until App.Models.StateModel.showView(WheteverView) calls the transitionIn() function
	    	$(this.el).hide(); 

	    	
		    // initialises the state model/controller
		    App.Models.HomePanelsStateModel = new StateModel;

      		// initialises the state controller for the menu
      		App.Models.HomePanelStateMenuModel = new StateMenuModel;

      		
      		// creates three panel views
      		App.Views.HomePanelView1 = new HomePanelView({el: '.home-person-1', panelID:1});
      		App.Views.HomePanelView2 = new HomePanelView({el: '.home-person-2', panelID:2});
      		App.Views.HomePanelView3 = new HomePanelView({el: '.home-person-3', panelID:3});

      		App.Views.HomePanelView1.definePanelID(1);
      		App.Views.HomePanelView2.definePanelID(2);
      		App.Views.HomePanelView3.definePanelID(3);

	    	this.initPerson(1);
	    	this.initPerson(2);
	    	this.initPerson(3);
			
	  		// creates an example event listener
	    	this.on('testCall', this.testMethod, this);

	  		// creates an person event listener
	    	this.on('gotoPrevPersonCall', this.gotoPrevPersonMethod, this);
	    	this.on('gotoNextPersonCall', this.gotoNextPersonMethod, this);


	    },

    	
    	// method for the eventlistener
	    testMethod: function (e) {
	       console.log('HomePageView testMethod');
	    },
	    
    	// initialises the person (configured in the PeopleModel)
	    initPerson: function (personID) {

	    	var thePerson = App.Models.PeopleModel["person"+personID]

	    	var vidTitleHeaderElement = "#home-page .home-person-"+personID+" .video-row .base";
	    	$(vidTitleHeaderElement).html("Watch "+thePerson.firstName+"'s Video");
	    	
	    	//$(vidTitleHeaderElement).css({opacity: 0 })
	    	//TweenLite.to($(vidTitleHeaderElement), 1.3, {css:{autoAlpha:1}, ease:Power2.easeOut, delay:0.5});

	    	var _il1 = new Cosmos.Utils.ImageLoaderWithRescaleSlideShow('#home-page .home-person-'+personID+' .phone-style', [{"img":"resources/images/home_phone_"+thePerson.phoneColor+".png"}], 2000, 1000, "rescaleDisabled", "centreDisabled", "elementResizeListenerDisabled");
			var _il2 = new Cosmos.Utils.ImageLoaderWithRescaleSlideShow('#home-page .home-person-'+personID+' .phone-thumbs', [{"img":"resources/images/home_phone_clip_"+thePerson.fileName+"_01.png"}, {"img":"resources/images/home_phone_clip_"+thePerson.fileName+"_02.png"}], 2000, 1000, "rescaleDisabled", "centreDisabled", "elementResizeListenerDisabled");

	    },

	    gotoPerson: function (personID) {
	    	// define the person panel
			App.Models.HomePanelsStateModel.showView(App.Views["HomePanelView"+personID]);

            // define background image
            App.Views.ImageNavPanelView.showBg(personID);

            // defines the content in the left/right arrows
            App.Views.ImageNavPanelView.defineArrows(personID);

            // redefine the current person
            this.curPerson = personID;

            this.clearPersonInterval();
            this.addPersonInterval();
        },

		// method for the eventlistener
	    gotoPrevPersonMethod: function (e) {
	    	console.log("prev");
	    	var newPerson = this.curPerson;	
	    	if(this.curPerson > 1){
	    		newPerson--;
	    	} else {
	    		newPerson = 3;
	    	}
	    	this.gotoPerson(newPerson);

	    },
		// method for the eventlistener
	    gotoNextPersonMethod: function (e) {
	    	
	    	var newPerson = this.curPerson;	
	    	if(this.curPerson < 3){
	    		newPerson++;
	    	} else {
	    		newPerson = 1;
	    	}
	    	this.gotoPerson(newPerson);

	    },


		addPersonInterval: function () {	
			var me = this;
            this.homePersonInterval = self.setInterval(function(){me.gotoNextPersonMethod(null)}, 8000);
        },

		clearPersonInterval: function () {	
			var me = this;
	    	clearInterval(me.homePersonInterval);
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


	    	//moves footer to correct position
	    	TweenLite.to($(".mid-wrapper"), 1.5, {css:{height:490}, ease:Expo.easeInOut}); 

            // defines which panel to display 
            this.gotoPerson(1);

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
	    	
	    	this.addPersonInterval();

	    	// comp button
			$("#home-page .texter").on("click", App.Models.ConfigModel.eventObj, winClickHandler);
			function winClickHandler(){
				App.Router.navigate("win/", true);
			}
			$("#home-page .texter").on("mouseenter", App.Models.ConfigModel.eventObj, winOverHandler);
			function winOverHandler(){
				TweenLite.to($("#home-page .enter"), 0.3, {css:{"left":"3px", "top":"-3px"}, ease:Power4.easeOut});
				TweenLite.to($("#home-page .location"), 0.3, {css:{"left":"3px"}, ease:Power4.easeOut});
			}
			$("#home-page .texter").on("mouseleave", App.Models.ConfigModel.eventObj, winOutHandler);
			function winOutHandler(){
				TweenLite.to($("#home-page .enter"), 0.6, {css:{"left":"0px", "top":"0px"}, ease:Power4.easeOut});
				TweenLite.to($("#home-page .location"), 0.6, {css:{"left":"0px"}, ease:Power4.easeOut});
			}



	    },

    	// removes eventlisteners
	    removeEventListeners: function () {	 

	    	// removes an event listeners
	    	//this.off('testCall', this.testMethod, this);
	    	
	    	this.clearPersonInterval();

	    	// comp button
			$("#home-page .texter").off("click", App.Models.ConfigModel.eventObj);
			$("#home-page .texter").off("mouseenter", App.Models.ConfigModel.eventObj);
			$("#home-page .texter").off("mouseleave", App.Models.ConfigModel.eventObj);
	    }
	    

	});




    // require js: defines function/s to be accessed by require js
    return HomePageView;

});
