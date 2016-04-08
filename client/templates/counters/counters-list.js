/**
 * Created by CristoH on 08/04/2016.
 */
Template.countersList.helpers({
    counters: function(){
        return Counter.find();
    }
});
Template.countersList.events({
    'click #logout': function(e,t){
        event.preventDefault();
        Meteor.logout();
    }
});