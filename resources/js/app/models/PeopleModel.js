
/**
 * Filename: js/app/models/PeopleModel
 *
 * example model
 * 
 */
// 


// require js: defines the required js libraries and app files
define([

  // required libraries
  'jquery',
  'underscore',
  'backbone'


// require js: defines instances
], function($, _, Backbone){

    // Todo Model
    // ----------
    // Our basic **Todo** model has `title`, `order`, and `done` attributes.
    var PeopleModel = Backbone.Model.extend({

      // Default attributes for the todo item.
      defaults: function() {

        this.person1 = {};
        this.person2 = {};
        this.person3 = {};
        this.person4 = {};

        this.person1.firstName = "Catriona";
        this.person1.lastName = "Rowntree";
        this.person1.fileName = "cat";
        this.person1.phoneColor = "pink";

        this.person2.firstName = "Emma";
        this.person2.lastName = "Freedman";
        this.person2.fileName = "emma";
        this.person2.phoneColor = "blue";

        this.person3.firstName = "Kate and Luke";
        this.person3.lastName = "";
        this.person3.fileName = "kate_luke";
        this.person3.phoneColor = "black";
        
      }

    });
     





    // require js: defines function/s to be accessed by require js
    return PeopleModel;

});