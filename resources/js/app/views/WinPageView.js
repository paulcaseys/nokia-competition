
/**
 * Filename: js/app/views/WinPageView
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
  'cosmosdata'

  // required collections
  //'App.Collections.HelloWorldCollection'

  // required models
  //'App.Models.HelloWorldModel'

// require js: defines instances
], function($, _, Backbone){


    var WinPageView = Backbone.View.extend({

        
        // binds view to the existing skeleton of the App already present in the HTML.
        el: $("#win-page"),

        // at initialization we bind to the relevant events
        initialize: function() {
        
            // hides the element until App.Models.StateModel.showView(WheteverView) calls the transitionIn() function
            $(this.el).hide();
            
            // creates an example event listener
            this.on('testCall', this.testMethod, this);

            var _cosmosProjectName        = "NokiaNineComp";
            var _cosmosProjectPassword    = "46f43d37b373af0783c9e2ffaca34eda";
            var _cosmosFormWrapper        = "#cosmos-form-wrapper";

            // sets up the upload details
            var _cosmosForm = new Cosmos.Data.newForm();
            _cosmosForm.defineProjectSettings(_cosmosProjectName, _cosmosProjectPassword, true);
            _cosmosForm.setupForm(_cosmosFormWrapper);
            
        },

        
        // method for the eventlistener
        testMethod: function (e) {
           console.log('WinPageView testMethod');
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
            
            TweenLite.from($("#win-page #cosmos-form-wrapper"), 1.5, {css:{alpha:0}, ease:Expo.easeOut});   

            //moves footer to correct position
            TweenLite.to($(".mid-wrapper"), 1.5, {css:{height:620}, ease:Expo.easeInOut}); 


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
    return WinPageView;

});