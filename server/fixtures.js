/**
 * Created by CristoH on 08/04/2016.
 */

if(Counter.find().count() === 0){
    Counter.insert({name: 'Counter 1', value: 999});
    Counter.insert({name: 'Counter 2', value: 999});
}
if(Meteor.users.find().count() === 0){
    var admin = {
        username: "admin",
        password: "admin"
    };
    Accounts.createUser(admin);

    Meteor.users.update({username: 'admin'},{$set:{admin:true}});
}