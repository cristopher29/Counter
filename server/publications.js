/**
 * Created by CristoH on 08/04/2016.
 */

Meteor.publish('counters',function(){
    return Counter.find();
});
Meteor.publish('admin', function(adminId){
    return Meteor.users.find({_id: adminId});
});
