/**
 * Created by CristoH on 08/04/2016.
 */

Template.counterItem.events({
    'click #add': function(e,t){
        e.preventDefault();
        var counterId = this._id;
        Meteor.call('add', counterId);
    },
    'click #dec': function(e,t){
        e.preventDefault();
        var counterId = this._id;
        Meteor.call('decrease', counterId);
    },
    'click #reset': function(e,t){
        e.preventDefault();
        var counterId = this._id;
        Meteor.call('reset', counterId);
    }
});

Template.counterItem.helpers({

    admin: function(){

        var admin = Meteor.user().admin;

        if(admin){
            return true;
        }else{
            return false;
        }
    }
});