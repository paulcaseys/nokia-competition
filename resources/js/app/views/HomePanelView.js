
/**
 * Filename: js/app/views/FeaturesPanelView
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
  'tweenlite'

  // required collections
  //'App.Collections.HelloWorldCollection'

  // required models  
  //'App.Models.HelloWorldModel'

// require js: defines instances
], function($, _, Backbone){


    var HomePanelView = Backbone.View.extend({

        
        // binds view to the existing skeleton of the App already present in the HTML.
        el: $("#home-panel-1"),
        panelID: 1,

        // at initialization we bind to the relevant events
        initialize: function() {
            var me = this;
            
            // hides the element until App.Models.StateModel.showView(WheteverView) calls the transitionIn() function
            $(this.el).hide(); 
            
            // creates an example event listener
            this.on('testCall', this.testMethod, this);


        },

        
        // method for the eventlistener
        testMethod: function (e) {
           console.log('FeaturesPanelView testMethod');
        },
        

        // method for the eventlistener
        definePanelID: function (id) {
           this.panelID = id;
        },
        


        /*******************
         * TRANSITION IN/OUT
         * these are called when the view is routed in / out
         */
        
        // transitions the view in
        transitionIn: function () {  
            // adds eventlisteners     
            this.addEventListeners();   

            var el1 = $('.home-person-'+this.panelID+' .intro-row');
            el1.css({ opacity: 0.0 });
            TweenLite.to(el1, 2, {css:{autoAlpha:1}, ease:Power4.easeOut, delay:0.5});

            var el2 = $('.home-person-'+this.panelID+' .answer-row-1');
            el2.css({ opacity: 0.0 });
            TweenLite.to(el2, 2, {css:{autoAlpha:1}, ease:Power4.easeOut, delay:2});

            var el3 = $('.home-person-'+this.panelID+' .answer-row-2');
            el3.css({ opacity: 0.0 });
            TweenLite.to(el3, 2, {css:{alpha:1}, ease:Power4.easeOut, delay:3});

            $("#home-page .home-person-"+me.panelID+" .phone-play-button-img").css({'opacity':0.8, 'width':80, 'height':80, 'top':77, 'left':60});

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
            
            var me = this;

            // adds an example event listener
            //this.on('testCall', this.testMethod, this);

            ///////////

            $("#home-page .home-person-"+me.panelID+" .phone-play-button").on("click", App.Models.ConfigModel.eventObj, videoClickHandler);
            function videoClickHandler(){
                App.Router.navigate("video/"+me.panelID, true);
            }
            $("#home-page .home-person-"+me.panelID+" .phone-play-button").on("mouseenter", App.Models.ConfigModel.eventObj, videoOverHandler);
            function videoOverHandler(){    
                $("#home-page .home-person-"+me.panelID+" .video-row .base").css({'text-decoration':'underline'});
                TweenLite.to($("#home-page .home-person-"+me.panelID+" .phone-play-button-img"), 0.5, {css:{'opacity':1, 'width':90, 'height':90, 'top':72, 'left':55}, ease:Expo.easeOut});        
            }
            $("#home-page .home-person-"+me.panelID+" .phone-play-button").on("mouseleave", App.Models.ConfigModel.eventObj, videoOutHandler);
            function videoOutHandler(){
                $("#home-page .home-person-"+me.panelID+" .video-row .base").css({'text-decoration':'none'});
                TweenLite.to($("#home-page .home-person-"+me.panelID+" .phone-play-button-img"), 0.8, {css:{'opacity':1, 'width':80, 'height':80, 'top':77, 'left':60}, ease:Expo.easeOut});                
            }
        },

        // removes eventlisteners
        removeEventListeners: function () {        
            // removes an event listeners
            //this.off('testCall', this.testMethod, this);
        }
        

    });




    // require js: defines function/s to be accessed by require js
    return HomePanelView;

});
