/**
 * Created by CristoH on 08/04/2016.
 */

if(Counter.find().count() === 0){
    Counter.insert({name: 'counter1', value: 999});
}
if(Meteor.users.find().count() === 0){
    var admin = {
        username: "admin",
        password: "admin"
    };
    Accounts.createUser(admin);
}