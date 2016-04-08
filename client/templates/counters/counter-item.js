/**
 * Created by CristoH on 08/04/2016.
 */

Template.counterItem.events({
    'click #add': function(e,t){
        e.preventDefault();
        var counterId = this._id;
        Meteor.call('add', counterId);
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