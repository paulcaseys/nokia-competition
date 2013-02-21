
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
  'backbone'

  // required collections
  //'App.Collections.HelloWorldCollection'

  // required models  
  //'App.Models.HelloWorldModel'

// require js: defines instances
], function($, _, Backbone){


    var FeaturesPanelView = Backbone.View.extend({

        
        // binds view to the existing skeleton of the App already present in the HTML.
        el: $("#features-panel-1"),
        id: null,

        // at initialization we bind to the relevant events
        initialize: function() {
            
            // hides the element until App.Models.StateModel.showView(WheteverView) calls the transitionIn() function
            $(this.el).hide(); 
            
            // creates an example event listener
            this.on('testCall', this.testMethod, this);

        },

        
        // method for the eventlistener
        testMethod: function (e) {
           console.log('FeaturesPanelView testMethod');
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

            $('#features-panel-'+(this.id+1)+' .image-target').show(); 
            $('#features-panel-'+(this.id+1)+' .content-target').show(); 

            TweenLite.from($('#features-panel-'+(this.id+1)+' .image-target'), 1, {css:{alpha:0}, delay: 1.0, ease:Power2.easeOut}); 
            TweenLite.from($('#features-panel-'+(this.id+1)+' .content-target'), 1, {css:{alpha:0}, delay: 1.0, ease:Power2.easeOut}); 
            
            
            
            if(App.Collections.FeaturesCollection.dataLoaded){
                $('#features-page #features-panel-'+(this.id+1)+' .image-target').html("");
                var curObj = App.Collections.FeaturesCollection.dataLoaded[this.id];
                var _il1 = new Cosmos.Utils.ImageLoaderWithRescaleSlideShow('#features-page #features-panel-'+(this.id+1)+' .image-target', [{"img":curObj.uploaded_images[0].uploaded_image_path_original}], 1000, 1000, "rescaleDisnabled", "centreEnabled", "elementResizeListenerDisabled");
            }
            
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
    return FeaturesPanelView;

});
