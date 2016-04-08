/**
 * Created by CristoH on 08/04/2016.
 */

Template.counterOne.helpers({
    counter1: function(){
        return Counter.findOne({name: 'counter1'});
    },
    admin: function(){

        var admin = Meteor.user().admin;

        if(admin){
            return true;
        }else{
            return false;
        }
    }
});